import React, { useState, ChangeEvent } from 'react';
import { TableBody, TableRow, TextField } from '@material-ui/core';
import { Delete, Create, VisibilitySharp, Done, Close } from '@material-ui/icons';
import { Button } from '../Table';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW, ACTION } from '../../interfaces/TableInterface';
import TableEmpty from './component/TableEmpty.component';
import { TableBodyProps } from './interface/TableBody';
import { HeadCell } from '../../interfaces/TableInterface';
import { ValueEdit } from './interface/ValueEdit';
import { createRow } from './component/CreateRow';
import ActionButton from './component/ActionButton.component';
import formatValues from './format/FormatValues';
import { TableCellComponent } from './component/TableCell';

function TableBodyComponent(props: TableBodyProps) {

    const { data, actionColumns, handleClickAction, headCells, noActionEdit, noActionDelete, noActionView, editable } = props;

    const [newValue, setNewValue] = useState<ValueEdit>({ values: undefined, index: -1 });
    const [valuePrevious, setValuePrevious] = useState<any>({});

    const handleClick = (action: Action, value: Object, index?: number) => {
        handleClickAction && handleClickAction(action, value, index);

        if (editable && action === ACTION_EDIT) {
            //deep copy of the object's value, creating a new object reference
            setValuePrevious(JSON.parse(JSON.stringify(value)));

            //deep copy of the object's value, creating a new object reference
            setNewValue({ ...newValue, values: JSON.parse(JSON.stringify(value)), index: index ?? -1 });
        }
    }

    const closeEdit = () => {
        handleClickAction && handleClickAction(ACTION_EDIT, newValue.values, newValue.index);
        setNewValue({ ...newValue, values: undefined, index: undefined });
    }

    const cancelEdit = () => {
        setNewValue({ ...newValue, values: valuePrevious, index: undefined });
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const valueAux: any = newValue.values;
        valueAux[event.target.name] = event.target.value.trim() || valuePrevious[event.target.name];
        setNewValue({ ...newValue, values: valueAux, index: index });
    }

    const rowList: Array<HeadCell> = createRow([...headCells]);

    const action: boolean = [...headCells][headCells.length - 1].id === ACTION;

    if (![...data].length) {
        return <TableEmpty />
    }

    return (
        <TableBody>
            {[...data].map((row: any, index: number) => (
                <TableRow key={`TableRow-${index}`}>

                    {rowList.map((keys: HeadCell, indexKeys: number) => {

                        let actionRow: boolean = !!actionColumns && (actionColumns === indexKeys + 1);

                        let value: string = formatValues(keys, row[keys.id], row);

                        if (editable && index === newValue.index) {
                            return (
                                <TableCellComponent key={`TableRow-${index} - TableCell${indexKeys}`} index={index}>
                                    <TextField fullWidth id={`InputTableRow-${index} - InputTableCell${indexKeys}`} defaultValue={value} name={keys.id} onChange={(data: ChangeEvent<HTMLInputElement>) => onChange(data, index)} />
                                </TableCellComponent>
                            );
                        }

                        return (
                            <TableCellComponent key={`TableRow-${index} - TableCell${indexKeys}`} index={index}>
                                {actionRow ? <Button onClick={() => handleClick(ACTION, row, index)}>{value}</Button> : value}
                            </TableCellComponent>
                        );
                    })}

                    {action && (
                        <TableCellComponent key={`TableRowAction-${index}`} width={80} index={index}>

                            <ActionButton title="Deletar" left={0} view={!noActionDelete && (index !== newValue.index)}>
                                <Delete fontSize="small" color="primary" onClick={() => handleClick(ACTION_DELETE, row, index)} />
                            </ActionButton>

                            <ActionButton title="Editar" view={!noActionEdit && (index !== newValue.index)}>
                                <Create fontSize="small" color="primary" onClick={() => handleClick(ACTION_EDIT, row, index)} />
                            </ActionButton>

                            <ActionButton title="Visualizar" view={!noActionView && (index !== newValue.index)}>
                                <VisibilitySharp fontSize="small" color="primary" onClick={() => handleClick(ACTION_VIEW, row, index)} />
                            </ActionButton>

                            <ActionButton title="Concluir" view={index === newValue.index}>
                                <Done fontSize="default" color="primary" onClick={() => closeEdit()} />
                            </ActionButton>

                            <ActionButton title="Cancelar" view={index === newValue.index}>
                                <Close fontSize="default" color="primary" onClick={() => cancelEdit()} />
                            </ActionButton>

                        </TableCellComponent>
                    )}
                </TableRow>
            ))}
        </TableBody>
    );
}

export default TableBodyComponent;