import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><Link to="/tweets">Tweets</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;