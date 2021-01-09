import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { TablePaginationProps } from './interface/TablePaginationProps';
import { DisplayedRows } from './interface/DisplayedRows';

export default function TablePaginationComponent(props: TablePaginationProps) {

    const { size, page, rowsPerPage, onChangePage, onChangeRowsPerPage } = props;

    return (
        <TablePagination
            rowsPerPageOptions={[10, 25]}
            component="div"
            labelRowsPerPage="Itens por pagina"
            labelDisplayedRows={({ from, to, count }: DisplayedRows) => `${from}-${to} de ${count !== -1 ? count : ` ${to}`}`}
            count={size ?? -1}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage ? onChangePage : () => { }}
            onChangeRowsPerPage={onChangeRowsPerPage}
        />
    );
}