'use strict';

// app vars
var app = {
    title: 'What Should I Do?',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// add option to array
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

// wipe all options & re-render
var clearOptions = function clearOptions() {
    app.options = [];
    renderApp();
};

// pulls random option listed in the app's options array
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(option);
};

var appRoot = document.getElementById('app');

/**
 * dynamic render function
 * to be called whenever a change is made to the app vars
 */
var renderApp = function renderApp() {
    var tmpl = React.createElement(
        'div',
        { className: 'container mt-5' },
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement(
                'h1',
                null,
                app.title
            ),
            React.createElement(
                'p',
                null,
                app.options.length > 0 ? 'Here are your options...' : 'No options at this time'
            ),
            React.createElement(
                'button',
                { disabled: app.options.length === 0, className: 'btn btn-secondary btn-sm mx-2', onClick: onMakeDecision },
                'What should I do?'
            ),
            React.createElement(
                'button',
                { className: 'btn btn-secondary btn-sm mx-2', onClick: clearOptions },
                'Remove All'
            ),
            React.createElement(
                'ol',
                { className: 'mt-3' },

                // loop through options, mapping each
                // to a jsx expression
                app.options.map(function (opt) {
                    return React.createElement(
                        'li',
                        { key: opt },
                        opt
                    );
                })
            ),
            React.createElement('input', { type: 'text', name: 'option', className: 'py-1 px-2' }),
            React.createElement(
                'button',
                { className: 'btn btn-primary ml-3' },
                'Add Option'
            )
        )
    );
    ReactDOM.render(tmpl, appRoot);
};

renderApp();