
const initialState={
    albums:[],
    photos:[],

    selectAlbumId:null,
    filter:"",

    loadingAlb:false,
    loadingPhotos: false,


}





export const  reducer = (state=initialState, action) =>{
    switch(action.type){
        case "load/albums/start":
            return {
                ...state,
                loadingAlb:true

            }

        case "load/albums/fulfilled":
                return{
                    ...state,
                    loadingAlb:false,
                    albums:action.payload

                }


        case "load/photos/start":
            return {
                ...state,
                loadingPhotos:true

            }

        case "load/photos/fulfilled":
            return{
                ...state,
                loadingPhotos:false,
                photos:action.payload

            }

        case "select/album/id":
            return {
                ...state,
                selectAlbumId:action.payload
            }

        case "filtered/setFiltered":
            return {
                ...state,
                filter:action.payload
            }

        default:
            return state;

    }
}
