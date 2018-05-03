class Counter extends React.Component
{
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    }
  }

  handleAddOne() {
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
    this.setState( () => { return { count: 0 } });

    /**
     * Older method, just pass in an object with the set.
     * Only problem is setState operates asynchronously and
     * that could be an issue if the handler calls is again
     * before the state change actually occurs. This is 
     * solved by just using the explicit function instead.
     */
    
    // this.setState( { count: 0 } );

    /** using functions instead will run setState calls synchronously
     *  React will actually combine the update functions together as 
     *  needed in order to affect the state as intended.
     */
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
