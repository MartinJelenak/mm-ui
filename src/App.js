import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login.component";
import Register from "./components/Register.component";
import Home from "./components/Bord-Home.component";
import Profile from "./components/Profile.component";
import BoardUser from "./components/user.component";
import BoardModerator from "./components/Board-moderator.component";
import BoardAdmin from "./components/Board-admin.component";
import BlogManager from "./components/Blog-manager.component"

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      console.log('is user')
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            {/* <a className="navbar-brand" href="#"> */}
            {/* <img src="http://www.martinjelenak.com/static/media/logo.2ca6c8b0.png" height="30" className="d-inline-block align-top" alt="" loading="lazy" /> */}
            {/* </a> */}
              Zerowaste girls
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <>
                <li className="nav-item">
                  <Link to={"/redactor"} className="nav-link">
                    Redactor
                </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/blogmanager"} className="nav-link">
                    Blog manager
                </Link>
                </li>
              </>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  User manager
                </Link>
              </li>
            )}

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
              // <div className="navbar-nav ml-auto">
              //   <li className="nav-item">
              //     <Link to={"/login"} className="nav-link">
              //       Login
              //   </Link>
              //   </li>

              //   <li className="nav-item">
              //     <Link to={"/register"} className="nav-link">
              //       Sign Up
              //   </Link>
              //   </li>
              // </div>
              <>
              </>
            )}
        </nav>

        <div className="container-fluid">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/redactor" component={BoardModerator} />
            <Route path="/blogmanager" component={BlogManager} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;