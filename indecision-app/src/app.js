
class IndecisionApp extends React.Component
{
    constructor(props) {
        super(props);

        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    /**
     * get options out of local storage
     * (if there are any)
     */
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

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
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
                    title="Anthology Horror Movies"
                    subtitle="As covered on WatchMojo's Top 10 Anthology Horror Movies"
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

const Header = props => {
    return(
        <div>
            <h2>{props.title}</h2>
            {props.subtitle && <p>{props.subtitle}</p>}
            <hr />
        </div>
    );
}

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
                <h5 className="py-3 mb-0 letter-spacing-1">
                    What should I do ?
                </h5>
            </button>
        </div>
    );
};

const X = props => {
    return (
        <svg height="25" width="15" className={props.classes} style={{position: 'relative', top: '12px'}}>
            <line x1="0" y1="0" x2="15" y2="15" style={{stroke: '#000', strokeWidth: 2}} />
            <line x1="15" y1="0" x2="0" y2="15" style={{stroke: '#000', strokeWidth: 2}} />
        </svg>
    );
};

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
            {props.options.length === 0 && <p><em>Please add an option to get started</em></p>}
            <button
                onClick={props.handleDeleteOptions}
                className="mx-auto"
                >
                <p className="m-0">
                    <X />
                    <span className="ml-3">Remove All</span>
                </p>
            </button>
        </div>
    );
}

const Option = props => {
    return (
        <div>
            <p>
                {props.optionText}
                <button 
                    className='u-pull-right'
                    style={{border: 0}}
                    onClick={e => {
                        props.handleDeleteOption(props.optionText);
                    }}
                    >
                    <X />
                </button>

            </p>
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

        // clear input field
        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form
                    onSubmit={this.handleAddOption}
                    className="mt-5"
                    >
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