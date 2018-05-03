
class IndecisionApp extends React.Component
{
    render() {
        const title = 'InDecision';
        const subtitle = 'Because decisions are greatly overrated';
        const options = ['Thing one', 'Thing two', 'Thing four'];
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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component
{
    render() {
        return (
            <div>
                <p>Here are the options...</p>
                <p>Number of options: <strong>{this.props.options.length}</strong></p>
                {
                    this.props.options.map(option => {
                        return <Option key={option} optionText={option}  />
                    })
                }
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
    render() {
        return (
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}

ReactDOM.render(
    <IndecisionApp />, 
    document.getElementById('app')
);