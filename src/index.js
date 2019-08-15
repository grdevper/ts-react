import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/layout';
import './index.scss';
const render = (Component) => {
    ReactDOM.render(React.createElement(Component, null), document.getElementById('app'));
};
render(App);
//# sourceMappingURL=index.js.map