// app vars
const appData = {
  visible: false
};

const toggleVisible = () => {
  appData.visible = !appData.visible;
  renderApp();
};

const appRoot = document.querySelector('#app');

const renderApp = () => {
  const template = (

      <div className="container mt-5">
        <h1 className="mb-5">Visibility Toggle</h1>
        <button className="btn btn-secondary btn-small border-0" onClick={toggleVisible}>{appData.visible ? 'Hide It' : 'Show It'}</button>
        <p className="my-3">{appData.visible ? 'This is the section to show and hide' : ''}</p>
      </div>

  );
  ReactDOM.render(template, appRoot);
};

renderApp();
