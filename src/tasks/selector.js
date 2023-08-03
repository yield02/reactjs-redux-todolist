import { createSelector } from "reselect";

export function getTask(state) {
    return state.tasks;
}


export function getTaskFilter(state) {
    return getTask(state).filter
}