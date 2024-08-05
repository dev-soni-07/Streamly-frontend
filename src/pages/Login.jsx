import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser({ email, password }));
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold">Login</h1>
            <div className="mt-4">
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border p-2 w-full"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border p-2 w-full mt-2"
                />
                <button onClick={handleLogin} className="bg-blue-600 text-white p-2 mt-4">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;