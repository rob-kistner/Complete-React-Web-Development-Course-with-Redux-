// app vars
const app = {
    title: 'What Should I Do?',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// add option to array
const onFormSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

// wipe all options & re-render
const clearOptions = () => {
    app.options = [];
    renderApp();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

/**
 * dynamic render function
 * to be called whenever a change is made to the app vars
 */
const renderApp = () => {
    const tmpl = (

        <div className="container mt-5">
            <form onSubmit={onFormSubmit}>
                <h1>{app.title}</h1>
                <p>{app.options.length > 0 ? 'Here are your options...' : 'No options at this time'}</p>
                <button className="btn btn-secondary btn-sm" onClick={clearOptions}>Remove All</button>
                
                {
                    // examples of display array contents...
                    /*
                    // will display everything except the last 3
                    [99, 98, 97, 'Rob Kistner', null, undefined, true]

                    // will render each of the jsx expressions
                    // note: this will also throw the 'key prop' warning
                    // for arrays if you don't have it
                    [
                        <p key="1">a</p>, 
                        <p key="2">b</p>, 
                        <p key="3">c</p>
                    ]

                    // map each value to a jsx expression
                    numbers.map(number => {
                        return <p key={number}>Number: {number}</p>;
                    })
                    */
                }
                
                <p className="mt-3">Number of options: <strong>{app.options.length}</strong></p>
                <ol>
                    {
                        // loop through options, mapping each
                        // to a jsx expression
                        app.options.map(opt => <li key={opt}>{opt}</li>)
                    }
                </ol>
                <input type="text" name="option" className="py-1 px-2" />
                <button className="btn btn-primary ml-3">Add Option</button>
            </form>
        </div>

    );
    ReactDOM.render(tmpl, appRoot);
};

renderApp();
