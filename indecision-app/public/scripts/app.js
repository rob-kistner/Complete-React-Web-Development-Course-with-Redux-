'use strict';

/**
 * CHALLENGE
 * 
 * 1. only render the subtitle and p tag if subtitle exists - use logical && operator
 * 2. conditionally render new p tag if options.length > 0, return 'Here are your options...'
or return 'no options'
 */

var appinfo = {
    title: 'My Title',
    subtitle: 'This is the subtitle',
    options: ['One', 'Two']
};

var tmplApp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appinfo.title
    ),
    appinfo.subtitle && React.createElement(
        'p',
        null,
        appinfo.subtitle
    ),
    React.createElement(
        'p',
        null,
        appinfo.options && appinfo.options.length > 0 ? 'Here are your options...' : 'No options available'
    )
);

var user = {
    name: 'Rob Kistner',
    age: 48,
    location: 'Chicago'

    /**
     * Note the use of JSX within the expression
     * to insert the value conditionally
     * 
     * @param {string} location 
     */
};function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
    return undefined;
}

/**
 * Turnary operator for conditional user name
 * 
 * For user.age:
 * Remember that && will ignore the 2nd statement 
 * if the first statement is falsy
 */
var tmplUser = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(tmplApp, appRoot);
