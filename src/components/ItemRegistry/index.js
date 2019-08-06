import React, { Component } from "react";
import RegistryForm from "./RegistryForm";
import { user } from "../../data";
import "./itemRegistry.css";

class ItemRegistry extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    return (
      <div className="container">
        <header className="row">
          <div class="col">
            <h1>Create inventory</h1>
            <p className="subtitle">Register item</p>
          </div>
          {/*<section class="col userInfo">
            <p>User: {user.username}</p>
            <p>Location: {user.location}</p>
    </section>*/}
          <section className="productView">
              <RegistryForm storeItem={this.storeItem} />
          </section>
        </header>
      </div>
    );
  }
}

export default ItemRegistry;
