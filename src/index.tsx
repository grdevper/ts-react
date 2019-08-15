import React from 'react'
import ReactDOM from 'react-dom'

import App from '@components/layout';

import './index.scss'

const render = (Component: React.ComponentType) => {
    ReactDOM.render(<Component />, document.getElementById('container'))
};

render(App);

