export type Pagination = {
    limit: number;
    page: number;
    sort: string;
    asc: number;
}

export const INITIAL_PAGINATION = {
    limit: 10,
    page: 1,
    sort: 'id',
    asc: 1
}