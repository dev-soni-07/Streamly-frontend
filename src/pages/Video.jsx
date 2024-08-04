import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideo } from '../features/video/videoSlice';

const Video = ({ match }) => {
    const dispatch = useDispatch();
    const video = useSelector((state) => state.video.currentVideo);

    useEffect(() => {
        dispatch(fetchVideo(match.params.videoId));
    }, [dispatch, match.params.videoId]);

    return (
        <div className="container mx-auto mt-8">
            {video ? (
                <div>
                    <h1 className="text-3xl font-bold">{video.title}</h1>
                    <video controls src={video.videoFile} className="w-full mt-4" />
                    <p className="mt-2">{video.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Video;