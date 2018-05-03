const btn = {
    Primary : 'btn btn-primary my-3',
    PrimarySm : 'btn btn-primary btn-small my-3',
    Secondary : 'btn btn-secondary my-3',
    SecondarySm : 'btn btn-outline-secondary my-3',
}

/**
 * bind exercise
 * 
 * illustrating how 'this' gets lost in scope
 */
/*
 const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};

binding object to reinstate 'this'
const getName = obj.getName.bind(obj);
// will set name to something else
//const getName = obj.getName.bind({name: 'RobK'});
console.log(getName());
*/

class IndecisionApp extends React.Component
{
    render() {
        const title = 'InDecision';
        const subtitle = 'Because decisions are greatly overrated';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        // const options = [];
        return (
            <div className="container mt-5">
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
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
            </div>
        );
    }
}

class Action extends React.Component
{
    handlePick() {
        console.log('handlePick');
    }

    render() {
        return (
            <div>
                <button
                    className={btn.Primary}
                    onClick={this.handlePick}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component
{
    /**
     * constructor always gets the props when called
     * 
     * Here we're using it to make sure handleRemoveAll 
     * gets correct binding wherever it's called.
     * This also allows it to be bound once when the
     * object is instantiated rather than re-binding 
     * it every time by using bind(this) on the onClick
     * function call, for example
     */
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
    }

    render() {
        // binding 
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
                    onClick={this.handleRemoveAll}>
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