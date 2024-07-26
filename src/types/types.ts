
export interface initialStateAlbuns {
    albums:any[],
    selectAlbumId:null,
    loadingAlb:boolean
}
export interface initialStatePhotos {
    photos:any[],
    filter:string,
    loadingPhotos: boolean
}

export enum ActionTypes{
    FETCH_ALBUMS = "FETCH_ALBUMS",
    FETCH_ALBUMS_SUCCESS="FETCH_ALBUMS_SUCCESS",
    FETCH_PHOTOS = "FETCH_PHOTOS",
    FETCH_PHOTOS_SUCCESS="FETCH_PHOTOS_SUCCESS",
    FETCH_SELECT="FETCH_SELECT",
    FETCH_FILTER="FETCH_FILTER"
}
interface AlbumActionType{
    type:ActionTypes.FETCH_ALBUMS

}
interface AlbumSuccess{
    type:ActionTypes.FETCH_ALBUMS_SUCCESS
    payload:any
}

interface PhotosActionType{
    type:ActionTypes.FETCH_PHOTOS

}
interface PhotosSuccess{
    type:ActionTypes.FETCH_PHOTOS_SUCCESS
    payload:any
}

interface SelectActionType{
    type:ActionTypes.FETCH_SELECT
    payload:number

}
interface FilterSuccess{
    type:ActionTypes.FETCH_FILTER
    payload:string
}


export type TodoActions =
    AlbumActionType
    |AlbumSuccess
    |PhotosActionType
    |PhotosSuccess
    |SelectActionType
    |FilterSuccess