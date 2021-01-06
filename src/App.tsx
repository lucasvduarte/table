import React, { useState, MouseEvent } from 'react';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW } from './component/table/interfaces/TableInterface';
import Table from './component/table/Table.component';

function App() {

  const [pagination, setPagination] = useState<any>({ page: 0, limit: 10, asc: 1, sort: 'id' });

  const handleRequestSort = (event: MouseEvent<unknown>, property: string) => {
    const isAsc = pagination.sort === property && pagination.asc === 1;
    setPagination({ ...pagination, sort: property, asc: isAsc ? -1 : 1 });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPagination({ ...pagination, page: newPage });
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPagination({ ...pagination, limit: +event.target.value, page: 0 });
  };

  const handleClickAction = (action: Action, obj: any) => {
    if (action === ACTION_EDIT) {
      return action;
    }
    if (action === ACTION_DELETE) {
      return action;
    }
    if (action === ACTION_VIEW) {
      return action;
    }
  };
  return (
    <Table
      data={[{ id: 0, nome: 'teste' }]}
      headCells={[{ id: 'nome', label: 'Nome' }, { id: 'action', label: 'Ação' }]}
      //page={pagination.page}
      //rowsPerPage={pagination.limit}
      //order={pagination.asc === 1 ? 'asc' : 'desc'}
      // orderBy={pagination.sort}  
      // onChangePage={handleChangePage}
      // onChangeRowsPerPage={handleChangeRowsPerPage}
      // onRequestSort={handleRequestSort}
      handleClickAction={handleClickAction}
    />
  );
}

export default App;
