import React, { Component } from "react";
import { signin, authenticate } from "../Auth";
import "./signIn.css"

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
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true })
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    console.log(user);
    signin(user).then(data => {
      if (data.error) {
        this.setState({ error: data.error, loading: false })
      }
      else {
        //authenticate
        authenticate(data, () => {
          this.setState({ redirectToReferer: true })
        });
      }
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div className="card">
        <div className="card-body">
          <p className="title"> Iniciar Sesión</p>
          <form onSubmit={this.onSubmit}>
            {/*<label>Email</label>*/}
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Correo electrónico"
            />
            {/*<label>Constraseña</label>*/}
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Contraseña"
            />
            <button className="btn btn-success button" disabled={isInvalid} type="submit">
              ENTRAR A INVENTORY
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
