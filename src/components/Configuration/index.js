import React, { Component } from "react";
import { isAuthenticated, signout } from "../Auth";

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = { user: isAuthenticated().user };
    // this.setUser = this.setUser.bind(this);
  }

  // setUser() {
  //   console.log("se ejecuta");
  //   const user = isAuthenticated().user;
  //   this.setState({ user: user });
  //   console.log(this.state.user);
  // }

  componentDidMount() {
    console.log(this.state.user);
  }

  render() {
    return (
      <div>
        <h1>Configuration</h1>
        {/* <button onClick={this.setUser}>Set user</button> */}
        <button onClick={signout}>Sign Out</button>
      </div>
    );
  }
}

export default Configuration;
