import axios from "axios";
import { ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, DELETE_TASK_FAILURE, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, UPDATE_TASK_FAILURE, UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS } from "./actionTypes"


export const getTasks= () => (dispatch) => {
    dispatch({type : GET_TASKS_REQUEST});

    return axios.get(`http://localhost:8080/tasks`)
    .then((r)=>{dispatch({type : GET_TASKS_SUCCESS, payload:r.data})})
    .catch((e)=>{dispatch({type : GET_TASKS_FAILURE, payload:e})})
}


export const AddTasks= (payload) => (dispatch) => {
    dispatch({type : ADD_TASK_REQUEST});

    return axios.post(`http://localhost:8080/tasks`, payload)
    .then((r)=>{dispatch({type : ADD_TASK_SUCCESS, payload:r.data})})
    .catch((e)=>{dispatch({type : ADD_TASK_FAILURE, payload:e})})
}


export const updateTasks= (id, payload)=> (dispatch) => {
    dispatch({type : UPDATE_TASK_REQUEST});

    return axios.patch(`http://localhost:8080/tasks/${id}`, payload)
    .then((r)=>{dispatch({type : UPDATE_TASK_SUCCESS, payload:r.data})})
    .catch((e)=>{dispatch({type : UPDATE_TASK_FAILURE, payload:e})})
}


export const deleteTasks= (id)=> (dispatch) => {
    dispatch({type : DELETE_TASK_REQUEST});

    return axios.delete(`http://localhost:8080/tasks/${id}`)
    .then((r)=>{dispatch({type : DELETE_TASK_SUCCESS, payload:r.data})})
    .catch((e)=>{dispatch({type : DELETE_TASK_FAILURE, payload:e})})
}