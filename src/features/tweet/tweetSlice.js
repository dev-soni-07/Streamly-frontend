import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../../config';

const initialState = {
    tweets: [],
    currentTweet: null,
    status: 'idle',
    error: null,
};

// Fetch all tweets for a user
export const fetchTweets = createAsyncThunk('tweet/fetchTweets', async (userId) => {
    const response = await axios.get(`${BASE_URL}/tweets/user/${userId}`);
    return response.data;
});

// Create a new tweet
export const createTweet = createAsyncThunk('tweet/createTweet', async (tweetData) => {
    const response = await axios.post(`${BASE_URL}/tweets`, tweetData);
    return response.data;
});

// Update a tweet
export const updateTweet = createAsyncThunk('tweet/updateTweet', async ({ tweetId, tweetData }) => {
    const response = await axios.patch(`${BASE_URL}/tweets/${tweetId}`, tweetData);
    return response.data;
});

// Delete a tweet
export const deleteTweet = createAsyncThunk('tweet/deleteTweet', async (tweetId) => {
    const response = await axios.delete(`${BASE_URL}/tweets/${tweetId}`);
    return response.data;
});

const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTweets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTweets.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tweets = action.payload;
            })
            .addCase(fetchTweets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createTweet.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createTweet.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tweets.push(action.payload);
            })
            .addCase(createTweet.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateTweet.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateTweet.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.tweets.findIndex(tweet => tweet._id === action.payload._id);
                if (index !== -1) {
                    state.tweets[index] = action.payload;
                }
            })
            .addCase(updateTweet.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteTweet.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteTweet.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tweets = state.tweets.filter(tweet => tweet._id !== action.payload._id);
            })
            .addCase(deleteTweet.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default tweetSlice.reducer;