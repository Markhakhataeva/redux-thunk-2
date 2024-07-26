import {ActionTypes, initialStateAlbuns, TodoActions} from "../../types/types";

const initialState:initialStateAlbuns = {
    albums:[],
    selectAlbumId:null,
    loadingAlb:false
}

export const albums = (state= initialState, action:TodoActions)=>{
    switch(action.type){
        case ActionTypes.FETCH_ALBUMS:
            return {
                ...state,
                loadingAlb:true
            }

        case ActionTypes.FETCH_ALBUMS_SUCCESS:
            return{
                ...state,
                loadingAlb:false,
                albums:action.payload
            }

        case ActionTypes.FETCH_SELECT:
            return {
                ...state,
                selectAlbumId:action.payload
            }

        default:
            return state;
    }
}