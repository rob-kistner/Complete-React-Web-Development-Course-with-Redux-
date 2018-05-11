import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="mb-5">
    <h3>Rob Kistner Portfolio</h3>
    <ul className="nav">
      <li><NavLink activeClassName="is-active" exact to="/">Home</NavLink></li>
      <li><NavLink activeClassName="is-active" exact to="/portfolio">Portfolio</NavLink></li>
      <li><NavLink activeClassName="is-active" exact to="contact">Contact</NavLink></li>
    </ul>
  </header>
);

export default Header;