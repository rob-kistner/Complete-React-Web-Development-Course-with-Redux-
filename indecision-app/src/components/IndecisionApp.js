import React from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

/**
 * class methods no longer requires 
 * explicit binding due to:
 * 
 * babel-plugin-transform-class-properties
 * 
 * that means you can just 
 * get rid of the constructor
 */

class IndecisionApp extends React.Component
{

  state = {
    options: [],
    title: this.props.title,
    subtitle: this.props.subtitle
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
  }

  handleAddOption = (option) => {
    if ( !option ) {
      return 'Enter a valid value to add an item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState( prevState => ( { options: prevState.options.concat(option) } ));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter( option => {
        return optionToRemove !== option;
      })
    }));
  }

  handleDeleteOptions = () => {
    this.setState( () => ( { options: [] } ) )
  }

  componentDidMount() {
    // test for valid json data
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
        this.setState( () => ({ options: options }) );
      }
    } catch(e) {
      // otherwise do nothing
    }
  }

  componentDidUpdate( prevProps, prevState ) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div className="container">
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
          />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          />
        <AddOption
          handleAddOption={this.handleAddOption}
          />
      </div>
    );
  }
}

export default IndecisionApp;