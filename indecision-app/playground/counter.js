class Counter extends React.Component
{
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    // initialize state to handle tracked data
    this.state = {
      name: 'Julie',
      count: 0
    }
  }

  handleAddOne() {
    /**
     * setState is used to update state, you can't
     * just affect the object directly and have it 
     * re-render
     * 
     * the prevState object is passed in by default, so 
     * you can specify it and use it
     * 
     * you'll return an object setting any of the various state
     * values to update
     */
    this.setState( prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }
  
  handleMinusOne() {
    this.setState( prevState => {
      return {
        count: (prevState.count > 0) ? prevState.count - 1 : prevState.count
      }
    });
  }
  
  handleReset() {
    // don't care about prevState for this one
    this.setState( () => { return { count: 0 } });
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+</button>
        <button onClick={this.handleMinusOne}>-</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);
