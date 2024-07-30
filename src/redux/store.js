import { configureStore } from '@reduxjs/toolkit'
import AlbumReducer from "./Albums/AlbumsSlice"
import PhotoReducer from "./photos/PhotoSlice"


export const store = configureStore({
    reducer: {
        albums:AlbumReducer,
        photo:PhotoReducer
    },
})