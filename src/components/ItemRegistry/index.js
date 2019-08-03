import React, { Component } from "react";
import RegistryForm from "./RegistryForm";

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
            <p>User: Authenticated user</p>
            <p>Location: Registered location</p>
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
