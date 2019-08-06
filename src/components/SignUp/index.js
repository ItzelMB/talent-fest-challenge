import React, { Component } from "react";
import { locations } from "../../data";
import { signup } from "../Auth";
import "./signUp.css";

const SignUpPage = () => (
  <div className="signUp">
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  name: "",
  email: "",
  location: "",
  password: "",
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
    const { name, email, password, location } = this.state;
    const user = {
      name,
      email,
      password,
      location
    };
    console.log(user);
    signup(user).then(data => {
      console.log(data.error);
      if (data.error) this.setState({ error: data.error });
      else
        this.setState({
          error: "",
          name: "",
          email: "",
          password: "",
          location: "",
          open: true
        });
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, email, password, passwordTwo, error } = this.state;

    const isInvalid =
      password !== passwordTwo ||
      password === "" ||
      email === "" ||
      name === "";

    return (
      <div className="card">
        <div className="card-body">
          <p className="title">Sign Up</p>
          <form onSubmit={this.onSubmit} className="sign-up-form">
            {/*<label>Full Name</label>*/}
            <input
              name="name"
              value={name}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
            {/*<label>Email</label>*/}
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email"
            />
            {/*<label>
              Location:*/}
            <select
              value={this.state.location}
              onChange={this.handleChangeLocation}
            >
              <option>Select a Location</option>
              {locations.map((el, idx) => (
                <option key={idx} value={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
            {/*</label>*/}
            {/*<label>Password</label>*/}
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            {/*<label>Confirm Password</label>*/}
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <button
              className="btn btn-success button"
              disabled={isInvalid}
              type="submit"
            >
              Sign Up
            </button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const SignUpForm = SignUpFormBase;

export default SignUpPage;
export { SignUpForm };
