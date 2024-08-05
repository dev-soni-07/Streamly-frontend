import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_API_URL from '../../config';

const initialState = {
    user: null,
    status: 'idle',
    error: null,
};

// Fetch user
export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
    const response = await axios.get(`${BASE_API_URL}/users/${userId}`);
    return response.data;
});

// Login user
export const loginUser = createAsyncThunk('user/loginUser', async (credentials) => {
    const response = await axios.post(`${BASE_API_URL}/users/login`, credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
});

// Register user
export const registerUser = createAsyncThunk('user/registerUser', async (userData) => {
    const response = await axios.post(`${BASE_API_URL}/users/register`, userData);
    localStorage.setItem('token', response.data.token);
    return response.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;