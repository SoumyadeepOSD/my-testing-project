import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import Users from './pages/users.jsx';

const App = () => {
  return (
    <div>
      <h1>Home</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users/profile" element={<Users />}/>
      </Routes>
    </div>
  )
}

export default App