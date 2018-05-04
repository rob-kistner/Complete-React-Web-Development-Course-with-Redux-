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

        this.state = {
            title: 'Indecision',
            subtitle: 'Because decisions are greatly overrated',
            options: ['Thing one', 'Thing two', 'Thing three']
        }
    }

    /**
     * handlePick()
     * 
     * is a function acting as a prop
     * 
     * gets passed down to Action called under
     * onClick={this.props.handlePick}
     * 
     * in order to work properly, gets bind(this) above in constructor
     */
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }

    /**
     * handleDeleteOptions()
     * 
     * is a function acting as state
     * 
     * gets passed down to Options as prop called under
     * handleDeleteOptions={this.handleDeleteOptions}
     * 
     * in order to work properly, gets bind(this) above in constructor
     */
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
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption />
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
    handleAddOption(e) {
        e.preventDefault();
        let fld = e.target.elements.option;
        const option = fld.value.trim();
        if(option) {
            console.log(option);
        }
        fld.value = '';
    }

    render() {
        return (
            <div>
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