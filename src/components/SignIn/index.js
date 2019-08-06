import React, { Component } from "react";
import { signin, authenticate } from "../Auth";
import { Redirect } from "react-router-dom";
import "./signIn.css";
import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <div className="signIn">
    <div className="container">
      <SignInForm />
    </div>
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  redirect: false
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    console.log(user);
    signin(user).then(data => {
      if (data.error) {
        this.setState({ error: data.error, loading: false });
      } else {
        //authenticate
        authenticate(data, () => {
          this.setState({ redirect: true });
          window.location.reload();
        });
      }
    });

    // this.props.location.push(ROUTES.INVENTORY);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";
    if (this.state.redirect) {
      return <Redirect to={ROUTES.INVENTORY} />;
    }

    return (
      <div className="card card-login">
        <div className="card-body card-body-login">
          <p className="title"> Sign In</p>
          <form onSubmit={this.onSubmit}>
            {/*<label>Email</label>*/}
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email"
            />
            {/*<label>Constraseña</label>*/}
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <button
              className="btn btn-success button-login"
              disabled={isInvalid}
              type="submit"
            >
              GO TO INVENTORY
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

const SignInForm = SignInFormBase;

export default SignInPage;

export { SignInForm };
