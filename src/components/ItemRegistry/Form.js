import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { products, quality, status } from "../../data";
import "./itemRegistry.css";

class FormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onSubmitForm } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <Form className="form"
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
                  <Field className="select-item" name="product" component="select">
                    <option>select</option>
                    {products.map((el, idx) => (
                      <option key={idx} value={el.value}>
                        {el.label}
                      </option>
                    ))}
                  </Field>
                </React.Fragment>
                <React.Fragment>
                  <label>Quality:</label>
                  <Field className="select-item" name="quality" component="select">
                  <option>select</option>
                    {quality.map((el, idx) => (
                      <option key={idx} value={el.value}>
                        {el.label}
                      </option>
                    ))}
                  </Field>
                </React.Fragment>
                <React.Fragment>
                  <label>Status:</label>
                  <Field className="select-item" name="status" component="select">
                    <option>select</option>
                    {status.map((el, idx) => (
                      <option key={idx} value={el.value}>
                        {el.label}
                      </option>
                    ))}
                  </Field>
                </React.Fragment>
                <React.Fragment>
                  <label>Quantity (kg):</label>
                  <Field className="select-item" placeholder="kg"
                    name="quantity"
                    component="input"
                    type="number"
                    step="0.01"
                  />
                </React.Fragment>

                {/* <React.Fragment>
                  <label>Notes</label>
                  <Field
                    name="notesBy"
                    component="textarea"
                    placeholder="Notes"
                  />
                </React.Fragment> */}
                <React.Fragment>
                  <button className="btn btn-success button-item" type="submit" disabled={submitting || pristine}>
                    Save Item
                  </button>
                  <button className="btn btn-success button-item"
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
          </div>
      </div>
    );
  }
}

export default FormBase;
