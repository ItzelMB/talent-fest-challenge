import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { products, quality } from "../../data";

class FormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onSubmitForm } = this.props;
    return (
      <React.Fragment>
        <Form
          onSubmit={onSubmitForm}
          render={({
            handleSubmit,
            form,
            reset,
            submitting,
            pristine,
            values
          }) => (
            <form
              onSubmit={event => {
                handleSubmit(event).then(() => {
                  form.reset();
                });
              }}
            >
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
        />{" "}
      </React.Fragment>
    );
  }
}

export default FormBase;
