import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/user/userSlice';

const Profile = ({ match }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        dispatch(fetchUser(match.params.userId));
    }, [dispatch, match.params.userId]);

    return (
        <div className="container mx-auto mt-8">
            {user ? (
                <div>
                    <h1 className="text-3xl font-bold">{user.fullName}</h1>
                    <img src={user.avatar} alt={user.fullName} className="w-32 h-32 rounded-full mt-4" />
                    <p className="mt-2">{user.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;