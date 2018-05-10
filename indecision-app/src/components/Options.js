import React from 'react';
import Option from './Option';
import X from './X';

const Options = props => (
  <div>
    <div className="widget-header">
      <h4 className="widget-header__title">Your Options</h4>
      <button
        onClick={props.handleDeleteOptions}
        className="btn btn--link"
        >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
    {
      props.options.map((option, index) => (
        <Option 
          key={option} 
          optionText={option} 
          count={index+1}
          handleDeleteOption={props.handleDeleteOption}
          />
      ))
    }
  </div>
);

export default Options;