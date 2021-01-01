import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from './component/tablebody/TableBody.component';
import TableHead from './component/tablehead/TableHead.component';
import { PaperComponent } from './component/Table';
import Progress from '../progress/Progress.component';
import { TableProps } from './interfaces/Table';
import TablePagination from './component/pagination/TablePagination.component';

function TableComponent(props: TableProps) {

    const { data, request, removePagination } = props;

    if (request) {
        return <Progress open={request} />
    }

    return (
        <PaperComponent>
            <TableContainer>
                <Table aria-labelledby="tableTitle" aria-label="enhanced table"  >
                    <TableHead rowCount={data.length} {...props} />
                    <TableBody {...props} />
                </Table>
            </TableContainer>
            {!removePagination && <TablePagination size={data.length} {...props} />}
        </PaperComponent>
    );
}

export default TableComponent;