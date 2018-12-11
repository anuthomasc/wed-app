import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import AppReducer from "../reducers/index";

function configureStore(initialState) {
    //const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
    const enhancer = compose(applyMiddleware(thunkMiddleware));
    return createStore(AppReducer, initialState, enhancer);
}

const store = configureStore({});

export default store; 