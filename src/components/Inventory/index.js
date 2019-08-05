import React, {Component} from "react";
import {list} from "../Auth";


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = { inventories:[] }
  }

  componentDidMount() {
    list().then(data => {
      if(data.error) {
          console.log(data.error);
      } else {
          this.setState({inventories: data}); console.log(this.state.inventories);
          
      }
  });  
  }

  render() { 
    return ( 
      <div>
    <h1>Inventory</h1>
  </div>
     );
  }
}
 
export default Inventory;

