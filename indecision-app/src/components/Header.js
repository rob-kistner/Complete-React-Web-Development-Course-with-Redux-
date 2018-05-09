import React from 'react';

const Header = props => (
  <div>
    <h2>{props.title}</h2>
    {props.subtitle && <p>{props.subtitle}</p>}
  </div>
);

Header.defaultProps = {
  title: 'Default Title',
  subtitle: ''
};

export default Header;