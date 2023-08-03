import { List, Record } from 'immutable';
import { CREATE_TASK_SUCCESS, FILTER_TASKS, LOAD_TASKS_SUCCESS, CREATE_TASK_ERROR } from './action-types';


export const TasksState = new Record({
    deleted: null,
    filter: '',
    list: new List(),
    previous: null
  });

function tasksReducer(state = new TasksState(), {payload, type}) {
    switch(type) {
      case CREATE_TASK_SUCCESS: 
        return state.merge({
          deleted: null,
          previous: null,
          list: state.deleted && state.deleted.key === payload.key ? state.previous : state.list.unshift(payload)
        })
        case LOAD_TASKS_SUCCESS:
        	return state.set('list', new List(payload.reverse()));

        case FILTER_TASKS:
          return state.set('filter', payload);
        
        case CREATE_TASK_ERROR:
          console.log("error:", payload);
        return state;

        default:
          return state;
    }
}

export default tasksReducer;