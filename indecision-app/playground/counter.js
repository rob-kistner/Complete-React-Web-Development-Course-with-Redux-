class Counter extends React.Component
{
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    console.log("handleAddOne called");
  }
  
  handleMinusOne() {
    console.log("handleMinusOne called");
  }
  
  handleReset() {
    console.log("handleReset called");
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Count: </h1>
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
