import { ChangeEvent } from 'react';

export interface TablePaginationProps {
    size?: number;
    page: number;
    rowsPerPage: number;
    onChangePage?(event: unknown, newPage: number): void;
    onChangeRowsPerPage?(event: ChangeEvent<HTMLInputElement>): void;
}