import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import SignInPage from "../SignIn";
import SignUpPage from "../SignUp";
import ConfigurationPage from "../Configuration";
import InventoryPage from "../Inventory";
import ItemRegistryPage from "../ItemRegistry";

import * as ROUTES from "../../constants/routes";

const App = () => (
  <div>
    <Router>
      <div>
        <Navigation /> <hr />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.CONFIGURATION} component={ConfigurationPage} />
        <Route path={ROUTES.INVENTORY} component={InventoryPage} />
        <Route path={ROUTES.ITEM_REGISTRY} component={ItemRegistryPage} />
      </div>
    </Router>
    <h1>App</h1>
  </div>
);

export default App;
