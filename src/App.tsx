import { Button } from '@material-ui/core';
import React, { useState, MouseEvent, useReducer } from 'react';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW, ACTION, HeadCell } from './component/table/interfaces/TableInterface';
import Table from './component/table/Table.component';
import Reduce from './useReduce/ActionArray/ReduceActionArray';
import { ActionReduce } from './useReduce/ActionArray/Action';
import { Type } from './useReduce/ActionArray/Type';
import Nomes from './Nomes';
import Sobrenome from './Sobrenome';

const headCells: Array<HeadCell> = [
  { id: 'nome', label: 'Nome' },
  { id: 'sobrenome', label: 'Sobrenome' },
  { id: 'idade', label: 'Idade' },
  { id: 'data', label: 'Data Nacimento', format: ['date'] },
  { id: 'familia', label: 'Nome da mãe', viewAttribute: 'nomeMae' },
  { id: 'deficiente', label: 'Deficiente', viewAttributeBoolean: { primaryLabel: "Sim", secundaryLabel: "Não" } },
  { id: ACTION, label: 'Ação' }
];

function App() {
  const [values, dispatch] = useReducer<(state: Array<any>, action: ActionReduce) => Array<any>>(Reduce, []);

  const [pagination, setPagination] = useState<any>({ page: 0, limit: 10, asc: 1, sort: 'id' });

  const handleRequestSort = (_event: MouseEvent<unknown>, property: string) => {
    const isAsc = pagination.sort === property && pagination.asc === 1;
    setPagination({ ...pagination, sort: property, asc: isAsc ? -1 : 1 });
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPagination({ ...pagination, page: newPage });
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPagination({ ...pagination, limit: +event.target.value, page: 0 });
  };

  console.log(pagination);

  const handleClickAction = (action: Action, obj: any, index: number) => {
    if (action === ACTION_EDIT || action === ACTION_DELETE) {
      return dispatch({
        type: action, index, newObject: {
          id: obj.id,
          nome: obj.nome,
          sobrenome: obj.sobrenome,
          idade: parseInt(obj.idade),
          data: obj.data,
          familia: obj.familia,
          deficiente: obj.deficiente
        }
      });
    }
    if (action === ACTION_VIEW) {
      return action;
    }
  };

  const add = () => {
    dispatch({
      type: Type.ACTION_ADD, index: 0, newObject: {
        id: Math.floor(Math.random() * 1000),
        nome: Nomes[(Math.floor(Math.random() * 9))],
        sobrenome: Sobrenome[(Math.floor(Math.random() * 9))],
        idade: Math.floor(Math.random() * 36) + 15,
        data: "1995-12-17T03:24:00",
        familia: {
          nomeMae: Nomes[(Math.floor(Math.random() * 9))]
        },
        deficiente: false
      }
    });
  }

  return (
    <>
      <Button onClick={() => add()}>Adicionar</Button>
      <Table
        data={values}
        headCells={headCells}
        page={pagination.page}
        size={values.length}
        rowsPerPage={pagination.limit}
        order={pagination.asc === 1 ? 'asc' : 'desc'}
        orderBy={pagination.sort}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        onRequestSort={handleRequestSort}
        handleClickAction={handleClickAction}
        editable
      />
    </>
  );
}

export default App;
