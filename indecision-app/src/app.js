// button styles
const btn = {
    Primary : 'btn btn-primary my-3',
    PrimarySm : 'btn btn-primary btn-small my-3',
    Secondary : 'btn btn-secondary my-3',
    SecondarySm : 'btn btn-outline-secondary my-3',
}

class IndecisionApp extends React.Component
{
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            title: 'Indecision',
            subtitle: 'Because decisions are greatly overrated',
            options: []
        }
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }

    /**
     * Passed up from child
     * 
     * uses Array.concat()
     * 
     * @ param option 
     */
    handleAddOption(option) {

        // error handling
        if ( !option ) {
            return 'Enter a valid value to add an item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => {
            return {
                // js array function concat the option 
                // to the current state array
                options: prevState.options.concat(option)
            };
        });
    }

    handleDeleteOptions() {
        this.setState( () => {
            return {
                options: []
            }
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    />
                <AddOption
                    handleAddOption={this.handleAddOption}
                    />
            </div>
        );
    }
}

class Header extends React.Component
{
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
                <hr />
            </div>
        );
    }
}

class Action extends React.Component
{
    render() {
        return (
            <div>
                <button
                    className={`${btn.Primary} w-100 py-2`}
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component
{
    /**
     * the handleDeleteOptions state function
     * is passed into this component as props
     * and can be utilized just like state 
     * variable props
     */
    render() {
        return (
            <div>
                <p><strong>{this.props.options.length}</strong> options&hellip;</p>
                {
                    this.props.options.map(option => {
                        return <Option key={option} optionText={option}  />
                    })
                }
                <button
                    className={btn.SecondarySm}
                    onClick={this.props.handleDeleteOptions}>
                    Remove All
                </button>
            </div>
        );
    }
}

class Option extends React.Component
{
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component
{
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        // state in component to handle errors
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error: error
            };
        });

        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="alert alert-danger mb-0">{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input
                        type="text"
                        placeholder="Enter an option"
                        name="option" 
                        className="py-2 px-3 mr-2"
                        />
                    <button className={btn.Primary}>
                        Add Option
                    </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <IndecisionApp />, 
    document.getElementById('app')
);