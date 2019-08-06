import React, { Component } from "react";
import { list } from "../Auth";
import { locations, status } from "../../data";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: [],
      filter: false,
      locationFilter: false,
      statusFilter: false
    };
  }

  componentDidMount() {
    list().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ filter: false, inventories: data });
      }
    });
  }

  render() {
    const { inventories, filter, locationFilter, statusFilter } = this.state;

    return (
      <div>
        <h1>Global Inventory</h1>
        <div>
          <span>
            Filtrar por Localidad:
            <select
            // value={this.state.location}
            // onChange={this.handleFilterLocation}
            >
              <option>Select a Location</option>
              {locations.map((el, idx) => (
                <option key={idx} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </span>
          <span>
            Filtrar por Status:
            <select
            // value={this.state.location}
            // onChange={this.handleFilterStatus}
            >
              <option>Select a Location</option>
              {status.map((el, idx) => (
                <option key={idx} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </span>
        </div>
        <section>
          {!filter && (
            <div>
              <div>
                <div className="width"> UPDATED </div>
                <div className="width"> PRODUCT </div>
                <div className="width"> QUALITY </div>
                <div className="width"> QUANTITY (kg) </div>
                <div className="width"> STATUS </div>
                <div className="width"> OWNER </div>
                <div className="width"> LOCATION </div>
              </div>
              {inventories &&
                inventories.map((el, idx) => (
                  <div key={idx}>
                    {el.items.map((it, idx) => (
                      <div key={idx}>
                        <div className="width">
                          {el.created.slice(0, 10)} {el.created.slice(11, 19)}
                        </div>
                        <div className="width"> {it.product}</div>
                        <div className="width"> {it.quality}</div>
                        <div className="width"> {it.quantity}</div>
                        <div className="width"> {it.status}</div>
                        <div className="width"> {el.notesBy.name}</div>
                        <div className="width"> {el.notesBy.location}</div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Inventory;
