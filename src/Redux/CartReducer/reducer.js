import { GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "./actionTypes";

const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_CART_REQUEST:
      return {...state, isLoading:true}
    case GET_CART_SUCCESS:
      return {...state, isLoading:false, cart:action.payload}
    case GET_CART_FAILURE:
      return {...state, isLoading:false, isError:true}
    default:
      return state;
  }
};

export { reducer };