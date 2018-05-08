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

  componentDidMount() {
    const ls = localStorage.getItem('count');
    const count = parseInt(ls, 10);
    if(!isNaN(count)) {
      this.setState( () => ( { count } ) );
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
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
        <button onClick={this.handleAddOne} className="mr-2 border-0">
          <h4 className="m-0">+</h4>
        </button>
        <button onClick={this.handleMinusOne} className="mr-2 border-0">
          <h4 className="m-0">-</h4>
        </button>
        <button onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);
