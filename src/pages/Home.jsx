import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../features/video/videoSlice';
import VideoCard from '../components/VideoCard';

const Home = () => {
    const dispatch = useDispatch();
    const { videos, status, error } = useSelector((state) => state.video);

    useEffect(() => {
        dispatch(fetchVideos());
    }, [dispatch]);

    return (
        <div className="container mx-auto mt-8">
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.map((video) => (
                        <VideoCard key={video._id} video={video} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;