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

/**
 * converted to stateless functional component
 */
const Header = props => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p className="lead">{props.subtitle}</p>
            <hr />
        </div>
    );
}

/**
 * converted to stateless functional component
 */
const Action = props => {
        return (
            <div>
                <button
                    className={`${btn.Primary} w-100 py-2`}
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
}

/**
 * converted to stateless functional component
 */
const Options = props => {
    return (
        <div>
            <p><strong>{props.options.length}</strong> options&hellip;</p>
            {
                props.options.map(option => {
                    return <Option key={option} optionText={option}  />
                })
            }
            <button
                className={btn.SecondarySm}
                onClick={props.handleDeleteOptions}>
                Remove All
            </button>
        </div>
    );
}

/**
 * converted to stateless functional component
 */
const Option = props => {
    return (
        <div>
            <p>{props.optionText}</p>
        </div>
    );
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

/**
 * Stateless Functional Component
 * 
 * Only concerned about display without exchanging 
 * data, etc.
 * 
 * props is an object with any
 * passed in properties from the call
 */

/*
 const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
};
*/

ReactDOM.render(
    <IndecisionApp />, 
    document.getElementById('app')
);