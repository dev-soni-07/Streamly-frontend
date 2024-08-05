import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_API_URL from '../../config';

const initialState = {
    videos: [],
    currentVideo: null,
    status: 'idle',
    error: null,
};

// Fetch all videos
export const fetchVideos = createAsyncThunk('video/fetchVideos', async () => {
    const response = await axios.get(`${BASE_API_URL}/videos`);
    return response.data;
});

// Fetch a single video
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (videoId) => {
    const response = await axios.get(`${BASE_API_URL}/videos/${videoId}`);
    return response.data;
});

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchVideo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentVideo = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default videoSlice.reducer;