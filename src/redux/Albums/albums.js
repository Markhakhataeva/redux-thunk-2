
const initialState={
    albums:[],
    selectAlbumId:null,
    loadingAlb:false
}
export const albums =(state=initialState, action)=>{
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

        case "select/album/id":
            return {
                ...state,
                selectAlbumId:action.payload
            }

        default:
            return state;
    }
}