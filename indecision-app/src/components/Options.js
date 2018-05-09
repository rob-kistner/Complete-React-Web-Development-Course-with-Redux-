import React from 'react';
import Option from './Option';
import X from './X';

const Options = props => {
  return (
    <div>
      <div>
        {
          props.options.map(option => (
            <Option 
              key={option} 
              optionText={option}  
              handleDeleteOption={props.handleDeleteOption}
              />
          ))
        }
      </div>
      {props.options.length === 0 && <p><em>Please add an option to get started</em></p>}
      <button
        onClick={props.handleDeleteOptions}
        className="mx-auto"
        >
        <p className="m-0">
          <X />
          <span className="ml-3">Remove All</span>
        </p>
      </button>
    </div>
  );
}

export default Options;