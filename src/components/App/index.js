import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { isAuthenticated, signout } from "../Auth";
import Navigation from "../Navigation";
import SignInPage from "../SignIn";
import SignUpPage from "../SignUp";
import ConfigurationPage from "../Configuration";
import InventoryPage from "../Inventory";
import ItemRegistryPage from "../ItemRegistry";

import * as ROUTES from "../../constants/routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authUser: null };
  }
  componentDidMount() {
    const authUser = isAuthenticated().user;
    authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.CONFIGURATION} component={ConfigurationPage} />
            <Route path={ROUTES.INVENTORY} component={InventoryPage} />
            <Route path={ROUTES.ITEM_REGISTRY} component={ItemRegistryPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

// const App = () => (
//   <div>
//     <Router>
//       <div>
//         <Navigation /> <hr />
//         <h1>Inventory System</h1>
//         <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
//         <Route path={ROUTES.SIGN_IN} component={SignInPage} />
//         <Route path={ROUTES.CONFIGURATION} component={ConfigurationPage} />
//         <Route path={ROUTES.INVENTORY} component={InventoryPage} />
//         <Route path={ROUTES.ITEM_REGISTRY} component={ItemRegistryPage} />
//       </div>
//     </Router>
//   </div>
// );

// export default App;
