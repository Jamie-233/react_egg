import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/demo',
        exact: true,
        component: require('../demo.js').default,
        _title: 'react_Egg',
        _title_default: 'react_Egg',
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
        _title: 'react_Egg',
        _title_default: 'react_Egg',
      },
      {
        path: '/class',
        exact: false,
        component: require('../class/_layout.js').default,
        routes: [
          {
            path: '/class/component-new',
            exact: true,
            component: require('../class/component-new.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/component-old',
            exact: true,
            component: require('../class/component-old.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/context/consumer',
            exact: true,
            component: require('../class/context/consumer.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/context',
            exact: true,
            component: require('../class/context/index.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/context/lists',
            exact: true,
            component: require('../class/context/lists.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/context/search',
            exact: true,
            component: require('../class/context/search.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/context/searchContext',
            exact: true,
            component: require('../class/context/searchContext.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/dva',
            exact: true,
            component: require('../class/dva/index.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/dva/lists',
            exact: true,
            component: require('../class/dva/lists.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/dva/search',
            exact: true,
            component: require('../class/dva/search.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class',
            exact: true,
            component: require('../class/index.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/list-item1',
            exact: true,
            component: require('../class/list-item1.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/list-item2',
            exact: true,
            component: require('../class/list-item2.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            path: '/class/lists',
            exact: true,
            component: require('../class/lists.js').default,
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
          {
            component: () =>
              React.createElement(
                require('/Users/xss/Documents/github/react_Egg/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
            _title: 'react_Egg',
            _title_default: 'react_Egg',
          },
        ],
        _title: 'react_Egg',
        _title_default: 'react_Egg',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/xss/Documents/github/react_Egg/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'react_Egg',
        _title_default: 'react_Egg',
      },
    ],
    _title: 'react_Egg',
    _title_default: 'react_Egg',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/xss/Documents/github/react_Egg/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'react_Egg',
    _title_default: 'react_Egg',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
