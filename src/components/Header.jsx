import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">Streamly</Link>
                <nav>
                    <Link to="/login" className="text-white mx-2">Login</Link>
                    <Link to="/register" className="text-white mx-2">Sign Up</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;