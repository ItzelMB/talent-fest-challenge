import React from "react";
import RegistryForm from "./RegistryForm";

const ItemRegistry = () => (
  <div>
    <header>
      <h1>Register Item</h1>
      <section>
        <p>User: Authenticated user</p>
        <p>Location: Registred location</p>
      </section>
      <section>
        <RegistryForm />
      </section>
    </header>
  </div>
);

export default ItemRegistry;
