import { legacy_createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as TaskReducer } from "./TaskReducer/reducer";
import { reducer as CartReducer } from "./CartReducer/reducer";

const rootReducer= combineReducers({TaskReducer, CartReducer})

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export { store };