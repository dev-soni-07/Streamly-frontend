import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error } = useSelector((state) => state.user);

    const handleLogin = async () => {
        const result = await dispatch(loginUser({ email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            localStorage.setItem('token', result.payload.token);
            navigate('/dashboard');
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold text-white">Login</h1>
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
                {status === 'loading' && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
            </div>
        </div>
    );
};

export default Login;