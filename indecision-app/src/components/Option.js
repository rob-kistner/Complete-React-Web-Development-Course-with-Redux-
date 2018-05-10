import React from 'react';

import X from './X';


const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button 
      className='btn btn--link'
      style={{border: 0}}
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
      >
      <X />
    </button>
  </div>
);

export default Option;