import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  HttpError,
  makeRouteConfig,
  Redirect,
  Route,
} from 'found';
import App from './App'
import Register from './Register';
import Login from './login'


const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={App}>
      <Route Component={Login} path='login' />
      <Route Component={Register} path="register" />
    </Route>,
  ),

  renderError: ({ error }) => (
    <div>{error.status === 404 ? 'Not found' : 'Error'}</div>
  ),
});

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));