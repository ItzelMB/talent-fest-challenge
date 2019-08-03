import React, { Component } from "react";
import { Form, Field } from "react-final-form";

// VIENEN DE DB //
const products = [
  { value: "Kidney Beans", label: "Kidney Beans" },
  { value: "Black Beans", label: "Black Beans" },
  { value: "Soybeans", label: "Soybeans" }
];

const quality = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" }
];
// VIENEN DE DB //

class FormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.storeItem = this.storeItem.bind(this);
  }
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  onSubmit = async values => {
    await this.sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
    console.log(values);
    this.storeItem(values);
    console.log(this.state);
  };

  storeItem(values) {
    this.setState(state => {
      const items = state.items.concat(values);
      return {
        items
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form
          onSubmit={this.onSubmit}
          //   initialValues={{ stooge: "larry", employed: false }}
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
                <button
                  type="submit"
                  disabled={submitting || pristine}
                  // onClick={() => this.storeItem(values)}
                  // onClick={() => this.props.storeItem(values)}
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </React.Fragment>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </React.Fragment>
    );
  }
}

export default FormBase;
