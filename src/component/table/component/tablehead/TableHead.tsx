import { HeadCell, Order } from '../../interfaces/TableInterface';

export interface TableHeadProps {
    onRequestSort?: (event: React.MouseEvent<unknown>, property: string) => void;
    order?: Order;
    orderBy?: string;
    rowCount: number;
    headCells: Array<HeadCell>;
}