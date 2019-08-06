import React, { Component } from "react";
import { list } from "../Auth";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = { inventories: [] };
  }

  componentDidMount() {
    list().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ inventories: data });
        console.log(this.state.inventories);
      }
    });
  }

  render() {
    const { inventories } = this.state;
    return (
      <div>
        <h1>Global Inventory</h1>
        <section>
          <div>
            <div className="width"> UPDATED </div>
            <div className="width"> PRODUCT </div>
            <div className="width"> QUALITY </div>
            <div className="width"> QUANTITY </div>
            <div className="width"> STATUS </div>
            <div className="width"> OWNER </div>
            <div className="width"> LOCATION </div>
          </div>
          {inventories &&
            inventories.map((el, idx) => (
              <div key={idx}>
                {/* <div className="width">{el.created}</div> */}
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
        </section>
      </div>
    );
  }
}

export default Inventory;
// {inventories &&
//   inventories.map((el, idx) => (
//     <div key={idx}>
//       <table key={idx}>
//         <tbody>
//           <tr>
//             <th>Updated</th>
//             <th>Product</th>
//             <th>Quality</th>
//             <th>Quantity</th>
//             <th>Status</th>
//             <th>Owner</th>
//             <th>Location</th>
//           </tr>
//           {el.items.map((it, idx) => (
//             <tr key={idx}>
//               <td>{el.created}</td>
//               <td>{it.product}</td>
//               <td>{it.quality}</td>
//               <td>{it.quantity}</td>
//               <td>{it.status}</td>
//               <td>{el.notesBy.name}</td>
//               <td>{el.notesBy.location}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   ))}
