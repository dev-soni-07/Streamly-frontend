import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import videoReducer from '../features/video/videoSlice';
import tweetReducer from '../features/tweet/tweetSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        video: videoReducer,
        tweet: tweetReducer,
    },
});