import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { products, quality, user } from "../../data";
import RegistryList from "./RegistryList";

class FormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { user: user.userID, items: [] };
    this.storeItem = this.storeItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.submitInventory = this.submitInventory.bind(this);
  }

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  onSubmit = async values => {
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
      const items = state.items
        .slice(0, i)
        .concat(state.items.slice(i + 1, state.items.length));
      return {
        items
      };
    });
    console.log(i);
  }

  submitInventory() {
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <React.Fragment>
                <label>Product:</label>
                <Field name="product" component="select">
                  <option />
                  {products.map((el, idx) => (
                    <option key={idx} value={el.value}>
                      {el.label}
                    </option>
                  ))}
                </Field>
              </React.Fragment>
              <React.Fragment>
                <label>Quality:</label>
                <Field name="quality" component="select">
                  <option />
                  {quality.map((el, idx) => (
                    <option key={idx} value={el.value}>
                      {el.label}
                    </option>
                  ))}
                </Field>
              </React.Fragment>
              <React.Fragment>
                <label>Quantity (kg):</label>
                <Field
                  name="quantity"
                  component="input"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="00.00"
                  pattern="^\d+(?:\.\d{1,2})?$"
                />
              </React.Fragment>

              <React.Fragment>
                <label>Notes</label>
                <Field name="notes" component="textarea" placeholder="Notes" />
              </React.Fragment>
              <React.Fragment>
                <button type="submit" disabled={submitting || pristine}>
                  Save Item
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </React.Fragment>
            </form>
          )}
        />
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
      </React.Fragment>
    );
  }
}

export default FormBase;
