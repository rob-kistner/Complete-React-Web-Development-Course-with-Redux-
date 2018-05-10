import React from 'react';

import Modal from 'react-modal';
import X from './X';

/**
 * Remember, !! converts values to boolean
 * 
 * Since the option is being passed in from
 * the IndecisionApp component, that string
 * will be converted to true and show the modal
 * 
 */ 
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearPick}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    >
    <p className="modal__body">Your randomly selected item is&hellip;</p>
    {props.selectedOption && <h3 className="modal__title">{props.selectedOption}</h3>}
    <button
      onClick={props.handleClearPick}
      className="btn"
      >
      Okay
    </button>
  </Modal>
);

export default OptionModal;