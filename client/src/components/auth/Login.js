import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.state({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(userData);
    }
    
    render() {
        const {errors} = this.state;
        return(
            <div className="container">
            <div className="">
              <div className="">
                <Link to="/" className="btn">
                  Back to home
                </Link>
                <div className="">
                  <h4>Login</h4>
                  <p className="grey-text">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="input-field">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field">
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="">
                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="btn"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;