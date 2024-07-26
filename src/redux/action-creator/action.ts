import {Dispatch} from "react";
import {ActionTypes, TodoActions} from "../../types/types";

export const GetAlbums = () => {
    return (dispatch:Dispatch<TodoActions>) =>{
        dispatch({type:ActionTypes.FETCH_ALBUMS})
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then((json) =>
                {
                    dispatch({
                        type:ActionTypes.FETCH_ALBUMS_SUCCESS,
                        payload:json
                    })
                }
            )

    }
 }

 export const GetAlbumPhotos = () => {
     return (dispatch:Dispatch<TodoActions>) =>{
         dispatch({type:ActionTypes.FETCH_PHOTOS})
         fetch("https://jsonplaceholder.typicode.com/photos")
             .then(res => res.json())
             .then((json) =>
                 {
                     dispatch({
                         type:ActionTypes.FETCH_PHOTOS_SUCCESS,
                         payload:json
                     })
                 }
             )

     }
 }

export const selectId=(userId:number)=>{
    return {
        type:ActionTypes.FETCH_SELECT,
        payload:userId
    }
}

export const setFiltered=(text:string)=>{
    return{
        type:ActionTypes.FETCH_FILTER,
        payload:text

    }
}
