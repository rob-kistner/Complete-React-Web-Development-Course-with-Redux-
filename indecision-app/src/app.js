
class IndecisionApp extends React.Component
{
    constructor(props) {
        super(props);

        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
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

        this.setState( prevState => ( { options: prevState.options.concat(option) } ));
    }

    handleDeleteOption( optionToRemove ) {
        this.setState(prevState => ({
            options: prevState.options.filter( option => {
                return optionToRemove !== option;
            })
        }));
    }

    handleDeleteOptions() {
        this.setState( () => ( { options: [] } ) )
    }

    render() {
        return (
            <div className="container">
                <Header
                    // title="Anthology Horror Movies"
                    // subtitle="As covered on WatchMojo's Top 10 Anthology Horror Movies"
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

IndecisionApp.defaultProps = {
    options: []
};

const Header = props => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
            <hr />
        </div>
    );
}

/**
 * default props
 * 
 * Will either use the default value in the spec'd object if
 * the prop isn't passed at all
 * 
 */
Header.defaultProps = {
    title: 'Default Title',
    subtitle: ''
};

const Action = props => {
        return (
            <div>
                <button
                    className="button-primary u-full-width h-auto mb-5"
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >
                    <h5 className="py-3 mb-0 letter-spacing-1">What should I do?</h5>
                </button>
            </div>
        );
}

const Options = props => {
    return (
        <div>
            <div>
                {
                    props.options.map(option => (
                        <Option 
                            key={option} 
                            optionText={option}  
                            handleDeleteOption={props.handleDeleteOption}
                            />
                    ))
                }
            </div>
            <button
                onClick={props.handleDeleteOptions}>
                Remove All
            </button>
        </div>
    );
}

const Option = props => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button 
                onClick={e => {
                    props.handleDeleteOption(props.optionText);
                }}
            >X</button>
        </div>
    );
}

class AddOption extends React.Component
{
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        // state in component to handle errors
        this.state = { error: undefined }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ( { error: error } ));

        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
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

ReactDOM.render(
    <IndecisionApp
        options={[
            'The Twilight Zone', 
            'Asylum',
            'Black Sabbath'
        ]} 
        />, 
    document.getElementById('app')
);