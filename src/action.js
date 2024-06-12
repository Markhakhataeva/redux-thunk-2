 export const AddAlbums = () => {
    return (dispatch) =>{
        dispatch({type:"load/albums/start"})
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then((json) =>
                {
                    dispatch({
                        type:"load/albums/fulfilled",
                        payload:json
                    })
                }
            )

    }
 }

 export const AddPhotos = () => {
     return (dispatch) =>{
         dispatch({type:"load/photos/start"})
         fetch("https://jsonplaceholder.typicode.com/photos")
             .then(res => res.json())
             .then((json) =>
                 {
                     dispatch({
                         type:"load/photos/fulfilled",
                         payload:json
                     })
                 }
             )

     }
 }

export const selectId=(userId)=>{
    return {
        type:"select/album/id",
        payload:userId
    }
}

export const setFiltered=(text)=>{
    return{
        type:"filtered/setFiltered",
        payload:text
    }
}