import React, { Component } from "react";
import { isAuthenticated } from "../Auth";

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setUser = this.setUser.bind(this);
  }

  setUser() {
    const user = isAuthenticated().user;
    this.setState({ user });
    console.log(this.state.user);
  }

  componentDidMount() {
    this.setUser();
  }

  render() {
    return (
      <div>
        <h1>Configuration</h1>
        <button onClick={this.setUser}>Set user</button>
      </div>
    );
  }
}

export default Configuration;
