import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/layout';
const render = (Component) => {
    ReactDOM.render(React.createElement(Component, null), document.getElementById('container'));
};
render(App);
//# sourceMappingURL=index.js.map