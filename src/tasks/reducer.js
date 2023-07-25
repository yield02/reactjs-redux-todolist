import { List, Record } from 'immutable';


export const TasksState = new Record({
    deleted: null,
    filter: '',
    list: new List(),
    previous: null
  });

function tasksReducer(state = new TasksState(), {payload, type}) {

    return state;
}

export default tasksReducer;