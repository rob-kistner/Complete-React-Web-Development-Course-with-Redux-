import React from 'react';

/**
 * class methods no longer requires 
 * explicit binding due to:
 * 
 * babel-plugin-transform-class-properties
 */

export default class AddOption extends React.Component
{
  state = {
    error: undefined
  }

  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ( { error: error } ));

    // clear input field
    if(!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        { this.state.error && <p className="add-option-error">{this.state.error}</p> }
        <form
          className="add-option"
          onSubmit={this.handleAddOption}
          >
          <input
            name="option" 
            type="text"
            placeholder="Enter an option"
            size="40"
            className="add-option__input"
            />
          <button className="btn">Add Option</button>
        </form>
      </div>
    );
  }
}
