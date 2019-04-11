import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';
import './Login.css';

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

    componentWillReceiveProps(nextProps) {
      if(nextProps.auth.isAuthenticated) {
        this.props.history.push("/dashboard")
      }

      if(nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        })
      }
    }

    componentDidMount() {
      // If logged in and user navigates to Login page, should redirect them to dashboard
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
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

        this.props.loginUser(userData);
    }
    
    render() {
        const {errors} = this.state;
        return(
          <div className="login">
            <h1>Login</h1>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  onChange={this.onChange}
                  defaultValue={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <span className="error-text">{errors.email} {errors.emailnotfound}</span>
              </div>
              <div className="input-field">
                <input
                  onChange={this.onChange}
                  defaultValue={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <span className="error-text">{errors.password}{errors.passwordincorrect}</span>
              </div>
              <div className="">
                <button type="submit" className="btn-login">Login</button>
              </div>
            </form>
                <div className="">
                  <p className="grey-text">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>
          </div>
        );
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.errors
})

export default connect(
  mapStateToProps, { loginUser }
)(Login);