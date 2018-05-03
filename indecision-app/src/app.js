// button styles
const btn = {
    Primary : 'btn btn-primary my-3',
    PrimarySm : 'btn btn-primary btn-small my-3',
    Secondary : 'btn btn-secondary my-3',
    SecondarySm : 'btn btn-outline-secondary my-3',
}

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
                <hr />
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
                    className={`${btn.Primary} w-100 py-2`}
                    onClick={this.handlePick}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component
{
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