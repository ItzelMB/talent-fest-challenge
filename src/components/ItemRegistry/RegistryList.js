import React, { Component } from "react";
//import FormBase from "./Form";

class RegistryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }
  onEditItem() {
    this.setState({ editMode: true });
  }
  render() {
    const { items, removeItem } = this.props;
    const { editMode } = this.state;
    return (
      <div>
        {items.map((el, idx) =>
          !editMode ? (
            <p key={idx}>
              <i>{idx + 1} </i>
              <strong>Product:</strong>
              <span className="data"> {el.product ? el.product : "~"}</span>{" "}
              <strong>Quality:</strong>
              <span className="data"> {el.quality ? el.quality : "~"}</span>{" "}
              <strong>Quantity:</strong>
              <span className="data"> {el.quantity ? el.quantity : "~"} kg</span>{" "}
              <strong>Notes:</strong>
              <span className="data"> {el.notes ? el.notes : "~"}</span>
              {/* <button onClick={() => this.onEditItem()}>Edit Item</button> */}
              <button className="btn btn-danger button-delete"
                onClick={() => {
                  removeItem(idx);
                }}
              >
                Delete Item
              </button>
            </p>
          ) : (
            <div key={idx}>{/* <FormBase onSubmitForm={editItem} /> */}</div>
          )
        )}
      </div>
    );
  }
}

export default RegistryList;
