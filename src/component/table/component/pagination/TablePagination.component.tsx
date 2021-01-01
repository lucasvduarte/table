import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { TablePaginationPropse } from './TablePaginationProps';

type DisplayedRows = {
    from: number;
    to: number;
    count: number
}

export default function TablePaginationComponent(props: TablePaginationPropse) {

    const { size, page, rowsPerPage, onChangePage, onChangeRowsPerPage } = props;

    return (
        <TablePagination
            rowsPerPageOptions={[10, 25]}
            component="div"
            labelRowsPerPage="Itens por pagina"
            labelDisplayedRows={({ from, to, count }: DisplayedRows) => `${from}-${to} de ${count !== -1 ? count : ` ${to}`}`}
            count={size === rowsPerPage ? -1 : rowsPerPage * page}
            rowsPerPage={rowsPerPage}
            page={page - 1}
            onChangePage={onChangePage ? onChangePage : () => { }}
            onChangeRowsPerPage={onChangeRowsPerPage}
        />
    );
}