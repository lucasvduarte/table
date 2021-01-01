import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { Span } from '../Table';
import { TableHeadProps } from './TableHead';

function EnhancedTableHead(props: TableHeadProps) {
    const { order, orderBy, onRequestSort, headCells } = props;

    const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
        if (onRequestSort) {
            onRequestSort(event, property);
        }
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {(orderBy === headCell.id) ? (
                                <Span>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default EnhancedTableHead;