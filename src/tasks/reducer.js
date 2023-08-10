import { List, Record } from 'immutable';
import { CREATE_TASK_SUCCESS, FILTER_TASKS, LOAD_TASKS_SUCCESS, CREATE_TASK_ERROR, UPDATE_TASK_SUCCESS } from './action-types';


export const TasksState = new Record({
    deleted: null,
    filter: '',
    list: new List(),
  });

function tasksReducer(state = new TasksState(), {payload, type}) {
    switch(type) {
      case CREATE_TASK_SUCCESS:
        return state.merge({
          deleted: null,
          list: state.list.push(payload)
        })
        case LOAD_TASKS_SUCCESS:
        	return state.set('list', new List(payload.reverse()));

        case UPDATE_TASK_SUCCESS:
          return state.merge({
            deleted: null,
            list: state.list.map(task => task.key === payload.key ? payload : task)
          })

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