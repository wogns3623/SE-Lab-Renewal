import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>
        Home
      </h2>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Etc">Etc</Link></li>
      </ol>
    </div>
  );
};

export default Home;