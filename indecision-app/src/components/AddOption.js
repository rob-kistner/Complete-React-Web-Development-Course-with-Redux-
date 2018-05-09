import React from 'react';

export default class AddOption extends React.Component
{
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { error: undefined }
  }

  handleAddOption(e) {
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
        {this.state.error && <p>{this.state.error}</p>}
        <form
          onSubmit={this.handleAddOption}
          className="mt-5"
          >
          <input
            type="text"
            placeholder="Enter an option"
            name="option" 
            size="40"
            className="mr-3"
            />
          <button className="button-primary">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}
