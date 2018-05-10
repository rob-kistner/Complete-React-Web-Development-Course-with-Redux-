import React from 'react';

import { NavLink } from 'react-router-dom';

/**
 * needs to render on every page
 */
const Header = () => (
  <header className="mb-5">
    <h3>Expensify</h3>
    <ul className="nav">
      <li><NavLink activeClassName="is-active" exact={true} to="/">Home</NavLink></li>
      <li><NavLink activeClassName="is-active" exact={true} to="/create">Create</NavLink></li>
      <li><NavLink activeClassName="is-active" exact={true} to="/edit">Edit</NavLink></li>
      <li><NavLink activeClassName="is-active" exact={true} to="/help">Help</NavLink></li>
    </ul>
  </header>
);

export default Header;