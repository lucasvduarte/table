import { Action, HeadCell } from '../../../interfaces/TableInterface';

export interface TableBodyProps {
    data: Array<Object>;
    action: boolean;
    actionColumns?: number;
    handleClickAction?(action: Action, value: Object | undefined, index?: number): void;
    headCells: Array<HeadCell>;
    noActionDelete?: boolean;
    noActionEdit?: boolean;
    noActionView?: boolean;
    actionCommunities?: boolean;
    actionInstitution?: boolean;
    editable?: boolean;
}