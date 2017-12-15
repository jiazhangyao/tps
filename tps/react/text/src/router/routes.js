import React from 'react'
//使用了 HTML5 history API 的高阶路由组件
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from '../container/index'
import Login from '../pages/login/index'
import Add from '../pages/add/index'
import Collapse from '../pages/collapse/index'
import Echarts from '../components/echarts/echarts'
//于支持 HTML5 history API 的浏览器

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
const location = history.location;

const routes = (
  <HashRouter>
    <div>
      <Route path="/header" component={Container} />
      <Route path="/login" component={Login} />
      <Route path="/add" component={Add} />
      <Route path="/collapse" component={Collapse} />
      <Route path="/echarts" component={Echarts} />
    </div>
  </HashRouter>
);

export default routes;
