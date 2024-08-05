import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleRegister = () => {
        dispatch(registerUser({ username, email, fullName, password }));
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold text-white">Sign Up</h1>
            <div className="mt-4">
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="border p-2 w-full"
                />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="border p-2 w-full mt-2"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border p-2 w-full mt-2"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border p-2 w-full mt-2"
                />
                <button onClick={handleRegister} className="bg-blue-600 text-white p-2 mt-4">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Register;