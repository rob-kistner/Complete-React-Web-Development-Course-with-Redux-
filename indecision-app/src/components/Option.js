import React from 'react';

import X from './X';


const Option = (props) => (
  <div>
    <p>
      {props.optionText}
      <button 
        className='u-pull-right'
        style={{border: 0}}
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
        >
        <X />
      </button>
    </p>
  </div>
);

export default Option;