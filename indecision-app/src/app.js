/**
 * CHALLENGE
 * 
 * 1. only render the subtitle and p tag if subtitle exists - use logical && operator
 * 2. conditionally render new p tag if options.length > 0, return 'Here are your options...'
or return 'no options'
 */

let appinfo = {
    title: 'My Title',
    subtitle: 'This is the subtitle',
    options: ['One', 'Two']
};

let tmplApp = (

    <div>
        <h1>{ appinfo.title }</h1>
        { appinfo.subtitle && <p>{appinfo.subtitle}</p> }
        <p>{ (appinfo.options && appinfo.options.length > 0) ? 'Here are your options...' : 'No options available' }</p>
    </div>

);

let user = {
    name: 'Rob Kistner',
    age: 48,
    location: 'Chicago'
}

/**
 * Note the use of JSX within the expression
 * to insert the value conditionally
 * 
 * @param {string} location 
 */
function getLocation( location ) {
    if(location) {
        return <p>Location: {location}</p>
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
let tmplUser = (

    <div>
        <h1>{ user.name ? user.name : 'Anonymous' }</h1>
        { (user.age && user.age >= 18) && <p>Age: { user.age}</p>}
        { getLocation(user.location) }
    </div>

);

var appRoot = document.getElementById('app');

ReactDOM.render(
    tmplApp,
    appRoot
);
