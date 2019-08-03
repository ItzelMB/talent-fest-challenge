import React, { Component } from "react";

// ///// Traer de la DB //// //
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
// ///// Traer de la DB //// //

const INITIAL_STATE = {
  product: products[0].value,
  quality: quality[0].value,
  quantity: 0
};
class RegistryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
    this.handleChangeProduct = this.handleChangeProduct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeQuality = this.handleChangeQuality.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

  handleChangeProduct(event) {
    let value = event.target.value;
    this.setState({ product: value });
  }
  handleChangeQuality(event) {
    let value = event.target.value;
    this.setState({ quality: value });
  }
  handleChangeQuantity(event) {
    let value = event.target.value;
    this.setState({ quantity: value });
  }

  async handleSubmit(event) {
    alert(
      "Product: " +
        this.state.product +
        "Quality: " +
        this.state.quality +
        "Quantity: " +
        this.state.quantity
    );

    this.props.storeItem(this.state);
    this.setState({ ...INITIAL_STATE });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose product:
            <select
              value={this.state.product}
              onChange={this.handleChangeProduct}
              name="product"
            >
              {products.map((el, idx) => (
                <option key={idx} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Choose quality:
            <select
              value={this.state.quality}
              onChange={this.handleChangeQuality}
            >
              {quality.map((el, idx) => (
                <option key={idx} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Quantity (kg):
            <input
              type="number"
              value={this.state.quantity}
              onChange={this.handleChangeQuantity}
            />
          </label>

          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default RegistryForm;
