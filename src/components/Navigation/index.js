import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <Link to={ROUTES.ITEM_REGISTRY}>Register Item</Link>
      </li>
      {/* <li>
        <Link to={ROUTES.INVENTORY}>Inventory</Link>
      </li> */}
      <li>
        <Link to={ROUTES.CONFIGURATION}>Configuration</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
