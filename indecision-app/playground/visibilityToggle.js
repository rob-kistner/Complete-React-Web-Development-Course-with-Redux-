class ToggleVisibility extends React.Component
{
  constructor(props) {
    super(props);

    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      visibility: false
    }
  }

  toggleVisibility() {
    this.setState( (prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          { this.state.visibility ? 'Hide details' : 'Show details' }
        </button>
        {
          this.state.visibility &&
          <p>Text that will get shown or hidden dependent on state</p>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <ToggleVisibility />,
  document.getElementById('app')
);
