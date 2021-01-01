export type Action = 'edit' | 'delete' | 'view' | 'action' | 'communities' | 'institution';

export type Order = 'asc' | 'desc';

export interface HeadCell {
    id: string;
    label: string;
    format?: Array<'date'>;
    viewAttribute?: string;
}

export const ACTION_EDIT = 'edit';
export const ACTION_DELETE = 'delete';
export const ACTION_VIEW = 'view';
export const ACTION = 'action';
export const ACTION_COMMUNITIES = 'communities';
export const ACTION_INSTITUTION = 'institution';