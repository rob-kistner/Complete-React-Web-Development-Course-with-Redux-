// app vars
const app = {
    title: 'What Should I Do?',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// add option to array
const onFormSubmit = (e) => {
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

// pulls random option listed in the app's options array
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
};

const appRoot = document.getElementById('app');

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
                
                <button disabled={app.options.length === 0} className="btn btn-secondary btn-sm mx-2" onClick={onMakeDecision}>What should I do?</button>
                <button className="btn btn-secondary btn-sm mx-2" onClick={clearOptions}>Remove All</button>
                
                <ol className="mt-3">
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
