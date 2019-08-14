import React from 'react'
import ReactDOM from 'react-dom'

import App from '@components/layout';

const render = (Component: React.ComponentType) => {
    ReactDOM.render(<Component />, document.getElementById('container'))
}

render(App)

