import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../features/video/videoSlice';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { videos, status, error } = useSelector((state) => state.video);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            dispatch(fetchVideos());
        }
    }, [dispatch, user, navigate]);

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