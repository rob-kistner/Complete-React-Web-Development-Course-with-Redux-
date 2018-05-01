'use strict';

/* -- COURSE COMPONENT -------------------------------------- */

var count = 0;
var myBtn = 'btn btn-secondary mr-3 py-2 px-3 text-uppercase font-weight-bold';

/**
 * The long & wonky way, re-render the app every time
 * the count altering functions are executed.
 */

var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    if (count > 0) count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

/* -- RENDER -------------------------------------- */

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {

    var tmplCounter = React.createElement(
        'div',
        { className: 'container mt-5' },
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { className: myBtn, onClick: addOne },
            '+'
        ),
        React.createElement(
            'button',
            { className: myBtn, onClick: minusOne },
            '-'
        ),
        React.createElement(
            'button',
            { className: myBtn, onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(tmplCounter, appRoot);
};

renderCounterApp();
