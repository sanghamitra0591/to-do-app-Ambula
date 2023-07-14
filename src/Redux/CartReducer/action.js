import axios from "axios";
import { ADD_CART_FAILURE, ADD_CART_REQUEST, ADD_CART_SUCCESS, DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, UPDATE_CART_FAILURE, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS } from "./actionTypes"


export const getCart= () => (dispatch) => {
    dispatch({type : GET_CART_REQUEST});

    return axios.get(`http://localhost:8080/cart`)
    .then((r)=>{dispatch({type : GET_CART_SUCCESS, payload:r.data})})
    .catch((e)=>{dispatch({type : GET_CART_FAILURE, payload:e})})
}


export const AddCart= (payload) => (dispatch) => {
    dispatch({type : ADD_CART_REQUEST});

    return axios.post(`http://localhost:8080/cart`, payload)
    .then((r)=>{dispatch({type : ADD_CART_SUCCESS, payload:r.data})})
    .catch((e)=>{dispatch({type : ADD_CART_FAILURE, payload:e})})
}


export const updateCart= (id, payload)=> (dispatch) => {
    dispatch({type : UPDATE_CART_REQUEST});

    return axios.patch(`http://localhost:8080/cart/${id}`, payload)
    .then((r)=>{dispatch({type : UPDATE_CART_SUCCESS, payload:r.data})})
    .catch((e)=>{dispatch({type : UPDATE_CART_FAILURE, payload:e})})
}


export const deleteCart= (id)=> (dispatch) => {
    dispatch({type : DELETE_CART_REQUEST});

    return axios.delete(`http://localhost:8080/cart/${id}`)
    .then((r)=>{dispatch({type : DELETE_CART_SUCCESS, payload:r.data})})
    .catch((e)=>{dispatch({type : DELETE_CART_FAILURE, payload:e})})
}