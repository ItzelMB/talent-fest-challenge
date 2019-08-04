import React, { Component } from "react";
import { user } from "../../data";
import RegistryList from "./RegistryList";
import FormBase from "./Form";

const INITIAL_STATE = {
  userID: user.userID,
  items: []
};
class RegistryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.storeItem = this.storeItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.submitInventory = this.submitInventory.bind(this);
  }

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  onSubmitForm = async values => {
    await this.sleep(300);
    this.storeItem(values);
  };

  storeItem(values) {
    this.setState(state => {
      const items = state.items.concat(values);
      return {
        items
      };
    });
  }

  removeItem(i) {
    this.setState(state => {
      const items = state.items.filter((item, idx) => i !== idx);
      return {
        items
      };
    });
  }

  submitInventory() {
    console.log(this.state);
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    return (
      <section>
        <FormBase onSubmitForm={this.onSubmitForm} />
        {this.state.items && (
          <RegistryList items={this.state.items} removeItem={this.removeItem} />
        )}
        <div>
          <button
            disabled={!this.state.items[0]}
            onClick={this.submitInventory}
          >
            Submit Inventory
          </button>
        </div>
      </section>
    );
  }
}

export default RegistryForm;
