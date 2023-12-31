import {
    CREATE_TASK_ERROR,
    CREATE_TASK_SUCCESS,
    REMOVE_TASK_ERROR,
    REMOVE_TASK_SUCCESS,
    FILTER_TASKS,
    LOAD_TASKS_SUCCESS,
    UNDELETE_TASK_ERROR,
    UNLOAD_TASKS_SUCCESS,
    UPDATE_TASK_ERROR,
    UPDATE_TASK_SUCCESS
  } from './action-types';
  import { taskList } from './task-list';


export function createTask(title) {
    return dispatch => {
        taskList.push({completed: false, title})
            .catch(error => dispatch(createTaskError(error)));
    }
}


export function createTaskSuccess(task) {
    return {
        type: CREATE_TASK_SUCCESS,
        payload: task
    }
}

function createTaskError(error) {
    return {
        type: CREATE_TASK_ERROR,
        payload: error
    }
}

export function updateTask(task, changes) {
    return dispatch => {
        taskList.update(task.key, changes)
          .catch(error => dispatch(updateTaskError(error)));
      };
}

export function removeTask(task) {
    return dispatch => {
        taskList.remove(task.key)
            .catch(error => dispatch(removeTaskError(error)))
    }
}

export function removeTaskError(error) {        
    return {
        type: REMOVE_TASK_ERROR,
        payload: error
    }
}

export function updateTaskError(error) {
    return {
        type: UPDATE_TASK_ERROR,
        payload: error
    }
}

export function updateTaskSuccess(task){
    return {
        type: UPDATE_TASK_SUCCESS,
        payload: task
    }
}

export function loadTaskSuccess(tasks) {
    return {
        type: LOAD_TASKS_SUCCESS,
        payload: tasks
    }
}

export function removeTaskSuccess(tasks) {
    return {
        type: REMOVE_TASK_SUCCESS,
        payload: tasks
    }
}

export function filterTasks(filter) {
    return {
        type: FILTER_TASKS,
        payload: filter
    }
}

export function loadTasks() {
    return (dispatch, getState) => {
        const  {auth}  = getState();
        taskList._path = `tasks/${auth.id}`;
        taskList.subscribe(dispatch)
    }
}