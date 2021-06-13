import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import meetsReducer from "./meets-reducer";


let reducers = combineReducers({
    meetsReducer,
    usersReducer
})

let store = createStore(reducers)

export default store;
