import React from 'react';

const X = props => {
  return (
    <svg height="25" width="15" className={props.classes} style={{position: 'relative', top: '5px'}}>
      <line x1="0" y1="0" x2="15" y2="15" style={{stroke: "#fff", strokeWidth: 2}} />
      <line x1="15" y1="0" x2="0" y2="15" style={{stroke: "#fff", strokeWidth: 2}} />
    </svg>
  );
};

export default X;