import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
        <Sidebar />
        <div className="flex-1 p-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/video/:videoId" component={Video} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;