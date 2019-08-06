import React, { Component } from "react";
import { isAuthenticated, signout } from "../Auth";

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = { user: isAuthenticated().user };
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <h1>Configuration</h1>
        <section>
          <h2>My Profile</h2>
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Location: {user.location}</p>
          </div>
          <button>Editar Datos</button>
        </section>
      </div>
    );
  }
}

export default Configuration;
