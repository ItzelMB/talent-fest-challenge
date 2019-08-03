import React, { Component } from "react";

class RegistryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const items = this.props.items;
    return (
      <div>
        {items.map((el, idx) => (
          <p key={idx}>
            <i>index: {idx}</i>
            <strong>Product:</strong>
            <span> {el.product}</span> <strong>Quality:</strong>
            <span> {el.quality}</span> <strong>Quantity:</strong>
            <span> {el.quantity} kg</span> <strong>Notes:</strong>
            <span> {el.notes}</span>
            <button>ERASE</button>
          </p>
        ))}
      </div>
    );
  }
}

export default RegistryList;
