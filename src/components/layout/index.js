import React from 'react';
import Loadable from 'react-loadable';
import { HashRouter, Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import Provider from './provider';
import * as store from '@store/index';
import PageLoading from '@components/pageLoading';
import Error from '@components/error';
const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, store.routerStore);
const Home = Loadable({
    loader: () => import(/* webpackChunkName: "Home" */ '@views/home'),
    loading: PageLoading
});
const Page1 = Loadable({
    loader: () => import(/* webpackChunkName: "Page1" */ '@views/page1'),
    loading: PageLoading
});
const AppWrapper = ({ children }) => React.createElement("div", null, children);
function App() {
    return (React.createElement(Provider, null,
        React.createElement(AppWrapper, null,
            React.createElement(Router, { history: history },
                React.createElement(HashRouter, null,
                    React.createElement(Switch, null,
                        React.createElement(Route, { exact: true, path: "/page1", component: Page1 }),
                        React.createElement(Route, { path: "/", component: Home }),
                        React.createElement(Route, { component: Error })))))));
}
export default App;
//# sourceMappingURL=index.js.map