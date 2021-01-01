export interface TablePaginationPropse {
    size: number;
    page: number;
    rowsPerPage: number;
    onChangePage?(event: unknown, newPage: number): void;
    onChangeRowsPerPage?(event: React.ChangeEvent<HTMLInputElement>): void;
}