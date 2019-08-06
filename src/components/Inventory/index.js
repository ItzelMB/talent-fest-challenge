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
            <span> UPDATED </span>
            <span> PRODUCT </span>
            <span> QUALITY </span>
            <span> QUANTITY </span>
            <span> STATUS </span>
            <span> OWNER </span>
            <span> LOCATION </span>
          </div>
          {inventories &&
            inventories.map((el, idx) => (
              <div key={idx}>
                <span>{el.created}</span>
                <span>holi! {el.items.product}</span>
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
