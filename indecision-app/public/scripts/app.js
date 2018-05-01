'use strict';

var appinfo = {
    title: 'My Title',
    subtitle: 'This is the subtitle'
};

var tmplApp = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appinfo.title
    ),
    React.createElement(
        'p',
        null,
        appinfo.subtitle
    )
);

var user = {
    name: 'Rob Kistner',
    age: 48,
    location: 'Chicago'
};

var tmplUser = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(tmplApp, appRoot);
