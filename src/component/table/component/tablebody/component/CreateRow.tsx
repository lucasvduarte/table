import { HeadCell } from '../../../interfaces/TableInterface';

export function createRow(columnsList: Array<HeadCell>, action: boolean): Array<HeadCell> {
    if (action) {
        columnsList.pop();
    }

    return columnsList;
}