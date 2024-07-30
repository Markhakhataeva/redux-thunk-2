import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    photos:[],
    fillter:"",
    loadingPhotos: false
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
    async ({text}) => {
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
            state.fulfilled = action.payload.text
        })
    }
})


export default photosSlice.reducer