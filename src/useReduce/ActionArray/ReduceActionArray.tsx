import { ActionReduce } from './Action';
import { Type } from './Type'

const reduce = (state: Array<any>, action: ActionReduce): Array<any> => {
    switch (action.type) {
        case Type.ACTION_ADD:
            return [...state, action.newObject];
        case Type.ACTION_DELETE:
            let deleteObject: Array<any> = [...state];
            deleteObject.splice(action.index, 1);
            return deleteObject;
        case Type.ACTION_EDIT:
            let updateObject: Array<any> = [...state];
            updateObject[action.index] = action.newObject;
            return updateObject;
        default:
            return state
    }
}

export default reduce;