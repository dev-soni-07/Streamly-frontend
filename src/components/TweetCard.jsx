import React from 'react';

const TweetCard = ({ tweet }) => {
    return (
        <div className="bg-white shadow-md rounded p-4">
            <h2 className="mt-2 text-xl font-bold">{tweet.owner.username}</h2>
            <p>{tweet.content}</p>
        </div>
    );
};

export default TweetCard;