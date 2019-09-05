import React, {Suspense, lazy} from 'react'
import Loadable from 'react-loadable'
import { HashRouter, Router, Switch, Route } from 'react-router-dom'
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'

import Provider from './provider'
import * as store from '@store/index'
import PageLoading from '@components/pageLoading'
import Error from '@components/error'
import styles from './index.scss';

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

const LazyPage = lazy(() => import('@views/lazyPage'));


const AppWrapper = ({children}: {children?: React.ReactNode}) => <div className={styles.wraper}>{children}</div>;

function App() {
  const fallback = () => {
     console.log('11234');
     return (
       <div>i just want to test</div>
     );
  };
  return (
    <Provider>
      <AppWrapper>
        <Router history={history}>
          <HashRouter>
            <Switch>
                <Suspense fallback={fallback()}>
                  <LazyPage/>
                </Suspense>
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