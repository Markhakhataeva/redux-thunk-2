import {applyMiddleware, combineReducers, createStore, } from "redux";
import {thunk} from "redux-thunk";
import {albums} from "./Albums/albums";
import {photos} from "./photos/photos";
import {createLogger} from "redux-logger";

const logger = createLogger({
    diff:true,
    collapsed:true
});


const rootState = combineReducers({
    albums: albums,
    photos: photos
})

export const store = createStore(rootState,applyMiddleware(thunk,logger));

export type RootState = ReturnType<typeof store.getState>
