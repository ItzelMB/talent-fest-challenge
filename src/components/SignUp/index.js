import React, { Component } from "react";
import { locations } from "../../data";
import { signup } from '../Auth';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  name: "",
  email: "",
  location: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
  }

  handleChangeLocation(event) {
    this.setState({ location: event.target.value });
  }
  onSubmit = event => {
    event.preventDefault();
    const {name, email, passwordOne, location} = this.state;
    const user = {
        name,
        email,
        passwordOne,
        location
    };
    console.log(user);
    signup(user).then(data => {
         if(data.error) this.setState({error: data.error});
         else this.setState({
             error: "",
             name: "",
             email: "",
             passwordOne: "",
             location: "",
             open: true
         });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      name === "";

    return (
      <form onSubmit={this.onSubmit} className="sign-up-form">
        <label>Full Name</label>
        <input
          name="name"
          value={name}
          onChange={this.onChange}
          type="text"
          placeholder="Nombre Completo"
        />
        <label>Email</label>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <label>
          Location:
          <select
            value={this.state.location}
            onChange={this.handleChangeLocation}
          >
            <option />
            {locations.map((el, idx) => (
              <option key={idx} value={el.value}>
                {el.label}
              </option>
            ))}
          </select>
        </label>
        <label>Password</label>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <label>Confirm Password</label>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = SignUpFormBase;

export default SignUpPage;
export { SignUpForm };
