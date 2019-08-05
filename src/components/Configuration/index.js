import React, {Component} from "react";
import {read, isAuthenticated} from "../Auth";


class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.setUser=this.setUser.bind(this);
  }

  setUser(){
    const user = isAuthenticated().user;
    this.setState({user})
    console.log(this.state.user);
  }

  componentDidMount() {
    // const token = isAuthenticated().token
    // const userId= isAuthenticated().user._id;
    // read(userId, token).then(data => {
    //     if(data.error) {
    //       //  this.setState({});
    //     } else {
    //         this.setState({
    //             id: data._id, 
    //             name: data.name, 
    //             email: data.email,
    //             error:"",
    //             about: data.about                    
    //         });
    //     }
    // });
    // console.log(this.state);
    // const user = isAuthenticated().user;
    // this.setState({user})
    // console.log(this.state.user);
    this.setUser();
  }

  render() { 
    return ( 
      <div>
    <h1>Configuration</h1>
    <button onClick={this.setUser}>Set user</button>
  </div>
     );
  }

  
}
 
export default Configuration;

