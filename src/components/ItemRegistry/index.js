import React, { Component } from "react";
import RegistryForm from "./RegistryForm";
import { user } from "../../data";

class ItemRegistry extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    return (
      <div>
        <header>
          <h1>Register Item</h1>
          <section>
            <p>User: {user.username}</p>
            <p>Location: {user.userLocation}</p>
          </section>
          <section>
            <RegistryForm storeItem={this.storeItem} />
          </section>
        </header>
      </div>
    );
  }
}

export default ItemRegistry;
