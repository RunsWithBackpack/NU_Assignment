//IMPORTS FOR STORE
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

import { indexOfObj } from "./Utils"

//CONSTANTS

const ADD_TASK = "ADD_TASK"

const DELETE_TASK = "DELETE_TASK"

const SORT_TASKS = "SORT_TASKS"

//ACTION CREATORS

export const addTask = function(newTask) {
  return {
    type: ADD_TASK,
    task: newTask,
  }
}

export const deleteTask = function(oldTaskName) {
  return {
    type: DELETE_TASK,
    task: oldTaskName,
  }
}

export const sortTasks = function(sortBy) {
  return {
    type: SORT_TASKS,
    sortBy: sortBy,
  }
}

//DISPATCHERS

//REDUCER

const initialState = {
  tasks: [],
  sortBy: "timestamp",
}

function reducer(state = initialState, action) {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case ADD_TASK:
      nextState.tasks = [...state.tasks, action.task]
      console.log("STORE NEW STATE", nextState)
      break
    case DELETE_TASK:
      let indexToRemove = indexOfObj(state.tasks, "name", action.task)
      nextState.tasks = [
        ...state.tasks.slice(0, indexToRemove),
        ...state.tasks.slice(indexToRemove + 1),
      ]
      console.log("whatever is", indexOfObj(state.tasks, "name", action.task))
      break
    // case SORT_TASKS:
    default:
      return state
  }
  return nextState
}

//STORE

export default createStore(reducer, applyMiddleware(thunkMiddleware))
