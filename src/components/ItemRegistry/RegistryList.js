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
// eslint-disable-next-line
// MOSTRAR INVENTARIO EN FORMA DE TABLA:
{
  /* <table>
        <tbody>
          <tr>
            <th>Index:</th>
            <th>Product:</th>
            <th>Quality:</th>
            <th>Quantity:</th>
            <th>Notes:</th>
          </tr>
          {items.map((el, idx) => (
            <tr key={idx}>
              <td>{idx + 1} </td>
              <td> {el.product ? el.product : "~"}</td>{" "}
              <td> {el.quality ? el.quality : "~"}</td>{" "}
              <td> {el.quantity ? el.quantity : "~"} kg</td>{" "}
              <td> {el.notes ? el.notes : "~"}</td>
              <button
                onClick={() => {
                  removeItem(idx);
                }}
              >
                Erase Item
              </button>
            </tr>
          ))}
        </tbody>
      </table> */
}
