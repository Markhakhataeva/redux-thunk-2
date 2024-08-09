import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {PhotosProps} from "../../types/types";

const initialState:PhotosProps = {
    photos:[],
    fillter:"",
    loadingPhotos: false
}

interface text{
    text:string
}

export const GetPhotos = createAsyncThunk(
    "FETCH_PHOTOS",
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos")
        return res.json()
    }
)

export const setFiltered = createAsyncThunk(
    "FETCH_FILTER",
    async ({text}:text) => {
       return{
           text
       }
    }
)




export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
        .addCase(GetPhotos.pending, (state, action) => {
            state.loadingPhotos = true
        })
        .addCase(GetPhotos.fulfilled, (state, action) => {
            state.loadingPhotos = false
            state.photos = action.payload
        })
        .addCase(setFiltered.fulfilled, (state, action) => {
            state.fillter = action.payload.text
        })
    }
})


export default photosSlice.reducer