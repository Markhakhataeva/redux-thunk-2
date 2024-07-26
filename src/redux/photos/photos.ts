import {ActionTypes, initialStatePhotos, TodoActions} from "../../types/types";

const initialState:initialStatePhotos={
    photos:[],
    filter:"",
    loadingPhotos: false
}





export const  photos = (state=initialState, action:TodoActions) =>{
    switch(action.type){
        case ActionTypes.FETCH_PHOTOS:
            return {
                ...state,
                loadingPhotos:true

            }

        case ActionTypes.FETCH_PHOTOS_SUCCESS:
            return{
                ...state,
                loadingPhotos:false,
                photos:action.payload

            }

        case ActionTypes.FETCH_FILTER:
            return {
                ...state,
                filter:action.payload
            }

        default:
            return state;

    }
}
