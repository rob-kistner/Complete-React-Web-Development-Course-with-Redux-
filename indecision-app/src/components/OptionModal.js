import React from 'react';

import Modal from 'react-modal';
import X from './X';

const styles = {
  content: {
    width: 'auto',
    height: 'auto',
    left: '50%',
    right: 'auto',
    top: '50%',
    bottom: 'auto',
    transform: "translate(-50%, -50%)"
  }
};

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
    style={styles}
    >
    <p className="mb-0 text-center">Your randomly selected item is&hellip;</p>
    {props.selectedOption && <h3 className="text-primary text-center">{props.selectedOption}</h3>}
    <button
      onClick={props.handleClearPick}
      className="mx-auto px-5"
      >
      Okay
    </button>
  </Modal>
);

export default OptionModal;