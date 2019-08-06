import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { signout } from "../Auth";
import "./navigation.css";

const logOut = history => {
  signout();
  history.push("/signin");
  window.location.reload();
};

const Navigation = ({ authUser, history }) => (
  <nav className="navbar">
    <a className="navbar-brand logo" href="">Inventory</a>

      <ul className="navbar-nav">
        {authUser ? (
          <React.Fragment>
            <li className="nav-item">
              <Link to={ROUTES.ITEM_REGISTRY}>Create inventory</Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.INVENTORY}>My inventory</Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.INVENTORY}>Global inventory</Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.CONFIGURATION}>Configuration</Link>
            </li>
            <button className="btn btn-outline-success my-2 my-sm-0 signOut-btn"
              onClick={() => {
                logOut(history);
              }}
            >
              Sign Out
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li className="nav-item">
              <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
  </nav>
);

export default withRouter(Navigation);