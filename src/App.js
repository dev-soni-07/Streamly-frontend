import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Video from './pages/Video';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Header />
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="flex-1 p-4 bg-gray-800">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/video/:videoId" element={<Video />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;