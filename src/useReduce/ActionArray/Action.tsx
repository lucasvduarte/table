export interface ActionReduce {
    type: 'ACTION_ADD' | 'ACTION_DELETE' | 'ACTION_EDIT';
    index: number;
    newObject: Object;
}
