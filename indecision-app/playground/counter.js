class Counter extends React.Component
{
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: props.count
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

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(
  <Counter count={1000} />,
  document.getElementById('app')
);
