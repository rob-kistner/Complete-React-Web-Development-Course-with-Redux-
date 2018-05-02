"use strict";

// app vars
var appData = {
  visible: false
};

var toggleVisible = function toggleVisible() {
  appData.visible = !appData.visible;
  renderApp();
};

var appRoot = document.querySelector('#app');

var renderApp = function renderApp() {
  var template = React.createElement(
    "div",
    { className: "container mt-5" },
    React.createElement(
      "h1",
      { className: "mb-5" },
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { className: "btn btn-secondary btn-small border-0", onClick: toggleVisible },
      appData.visible ? 'Hide It' : 'Show It'
    ),
    React.createElement(
      "p",
      { className: "my-3" },
      appData.visible ? 'This is the section to show and hide' : ''
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
