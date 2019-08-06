import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { signout } from "../Auth";

const logOut = history => {
  signout();
  history.push("/signin");
  window.location.reload();
};

const Navigation = ({ authUser, history }) => (
  <nav>
    <ul>
      {authUser ? (
        <React.Fragment>
          <li>
            <Link to={ROUTES.ITEM_REGISTRY}>Register Item</Link>
          </li>
          <li>
            <Link to={ROUTES.INVENTORY}>Inventory</Link>
          </li>
          <li>
            <Link to={ROUTES.CONFIGURATION}>Configuration</Link>
          </li>
          <button
            onClick={() => {
              logOut(history);
            }}
          >
            Sign Out
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          </li>
        </React.Fragment>
      )}
    </ul>
  </nav>
);

export default withRouter(Navigation);
