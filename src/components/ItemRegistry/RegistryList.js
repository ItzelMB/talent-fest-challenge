import React, { Component } from "react";

class RegistryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { items, removeItem } = this.props;
    return (
      <div>
        {items.map((el, idx) => (
          <p key={idx}>
            <i>{idx + 1} </i>
            <strong>Product:</strong>
            <span> {el.product ? el.product : "~"}</span>{" "}
            <strong>Quality:</strong>
            <span> {el.quality ? el.quality : "~"}</span>{" "}
            <strong>Quantity:</strong>
            <span> {el.quantity ? el.quantity : "~"} kg</span>{" "}
            <strong>Notes:</strong>
            <span> {el.notes ? el.notes : "~"}</span>
            <button>Edit Item</button>
            <button
              onClick={() => {
                removeItem(idx);
              }}
            >
              Erase Item
            </button>
          </p>
        ))}
      </div>
    );
  }
}

export default RegistryList;
