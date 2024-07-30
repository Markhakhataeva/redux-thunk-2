import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    albums:[],
    selectAlbumId:null,
    loadingAlb:false
}

export const GetAlbums = createAsyncThunk(
    "FETCH_ALBUMS",
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/albums")
        return res.json()
    }
)


export const albumSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
        .addCase(GetAlbums.pending, (state, action) => {
            state.loadingAlb = true
        })
        .addCase(GetAlbums.fulfilled, (state, action) => {
            state.loadingAlb = false
            state.albums = action.payload
        })
    }
})


export default albumSlice.reducer