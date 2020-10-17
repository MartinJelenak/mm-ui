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
import Main from './Main';


const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={App}>
      <Route Component={Main} />
      <Route Component={Register} path="register" />
      <Route Component={Login} path='login' />
    </Route>,
  ),

  renderError: ({ error }) => (
    <div>{error.status === 404 ? 'Not found' : 'Error'}</div>
  ),
});

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));