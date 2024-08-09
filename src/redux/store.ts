import { configureStore } from '@reduxjs/toolkit'
import AlbumReducer from "./Albums/AlbumsSlice"
import PhotoReducer from "./photos/PhotoSlice"


export const store = configureStore({
    reducer: {
        albums:AlbumReducer,
        photos:PhotoReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch