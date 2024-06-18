import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import {createLogger} from "redux-logger/src";
import {albums} from "./Albums/albums";
import {photos} from "./photos/photos";

const logger= createLogger({
    diff:true,
    collapsed:true
});

const rootState= combineReducers({
    albums: albums,
    photos: photos
})

export const store = createStore(rootState,applyMiddleware(thunk,logger));

