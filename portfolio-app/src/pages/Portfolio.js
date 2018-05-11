import React from 'react';

import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>This is your portfolio page...</p>
      <ul className="nav">
        <li><Link to="/portfolio/1">Project 1</Link></li>
        <li><Link to="/portfolio/2">Project 2</Link></li>
        <li><Link to="/portfolio/3">Project 3</Link></li>
      </ul>
    </div>
  );
}

export default Portfolio;