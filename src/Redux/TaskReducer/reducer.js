import { GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS } from "./actionTypes";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_TASKS_REQUEST:
      return {...state, isLoading:true}
    case GET_TASKS_SUCCESS:
      return {...state, isLoading:false, tasks:action.payload}
    case GET_TASKS_FAILURE:
      return {...state, isLoading:false, isError:true}
    default:
      return state;
  }
};

export { reducer };