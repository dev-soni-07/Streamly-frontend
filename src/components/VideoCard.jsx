import React from 'react';

const VideoCard = ({ video }) => {
    return (
        <div className="bg-white shadow-md rounded p-4">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover rounded" />
            <h2 className="mt-2 text-xl font-bold">{video.title}</h2>
            <p>{video.description}</p>
        </div>
    );
};

export default VideoCard;