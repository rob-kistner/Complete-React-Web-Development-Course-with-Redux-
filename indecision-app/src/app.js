

let appinfo = {
    title: 'My Title',
    subtitle: 'This is the subtitle'
};

let tmplApp = (

    <div>
        <h1>{ appinfo.title }</h1>
        <p>{ appinfo.subtitle }</p>
    </div>

);

let user = {
    name: 'Rob Kistner',
    age: 48,
    location: 'Chicago'
}

let tmplUser = (

    <div>
        <h1>{ user.name }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { user.location }</p>
    </div>

);

var appRoot = document.getElementById('app');

ReactDOM.render(tmplApp, appRoot);
