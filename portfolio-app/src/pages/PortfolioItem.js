import React from 'react';

const PortfolioItem = (props) => {
  return (
    <div>
      <h1>Portfolio Item</h1>
      <p>Checking out Portfolio Item #<strong>{props.match.params.id}</strong></p>
    </div>
  );
}

export default PortfolioItem;