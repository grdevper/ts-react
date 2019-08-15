import React from 'react'
import Loadable from 'react-loadable'
import { HashRouter, Router, Switch, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'

import Provider from './provider'
import * as store from '@store/index'
import PageLoading from '@components/pageLoading'
import Error from '@components/error'

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

const AppWrapper = ({children}: {children?: React.ReactNode}) => <div>{children}</div>;

function App() {
  return (
    <Provider>
      <AppWrapper>
        <Router history={history}>
          <HashRouter>
            <Switch>
                <Route exact path="/page1" component={Page1} />
                <Route path="/" component={Home} />
                <Route component={Error} />
            </Switch>
          </HashRouter>
        </Router>
      </AppWrapper>
    </Provider>
  )
}
export default App