import React, { Component } from "react";
import { user } from "../../data";
import RegistryList from "./RegistryList";
import FormBase from "./Form";
import {isAuthenticated, create} from '../Auth';

const INITIAL_STATE = {
  user: {},
  items: []
};
class RegistryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.storeItem = this.storeItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.submitInventory = this.submitInventory.bind(this);
  }

  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  onSubmitForm = async values => {
    await this.sleep(300);
    this.storeItem(values);
  };

  storeItem(values) {
    this.setState(state => {
      const items = state.items.concat(values);
      return {
        items
      };
    });
  }

  removeItem(i) {
    this.setState(state => {
      const items = state.items.filter((item, idx) => i !== idx);
      return {
        items
      };
    });
  }

  // editItem() {}

  submitInventory(event) {
    event.preventDefault();
    
        console.log(this.state.items)   
        const userId = isAuthenticated().user._id;
        const token = isAuthenticated().token;
        const objeto = {items:null};
        objeto.items=this.state.items
        
        create(userId, token, objeto).then(data => {
            if(data.error) this.setState({error: data.error});
            
            
        });
     this.setState({ ...INITIAL_STATE });
    
  }

  componentDidMount(){
    //this.postData = new FormData();
    this.setState({user: isAuthenticated().user}) 
    console.log(this.state.user);
}

  render() {
    return (
      <section>
        <FormBase onSubmitForm={this.onSubmitForm} />
        {this.state.items && (
          <RegistryList
            items={this.state.items}
            removeItem={this.removeItem}
            editItem={this.editItem}
          />
        )}
        <div>
          <button
            disabled={!this.state.items[0]}
            onClick={this.submitInventory}
          >
            Submit Inventory
          </button>
        </div>
      </section>
    );
  }
}

export default RegistryForm;
