import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import './Register.css';

class Register extends Component {
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
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
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

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.registerUser(newUser, this.props.history);
    }
    
    render() {
        const {errors} = this.state;
        return(
            <div className="register">
                <h1>Register</h1>
                <form noValidate onsubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input
                            onchange={this.handleChange}
                            defaultValue={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                            placeholder="Name"
                            className={classnames("", {
                                invalid: errors.name
                            })}
                        />
                        <span className="error-text">{errors.name}</span>
                    </div>
                    <div className="input-field">
                        <input
                            onchange={this.handleChange}
                            defaultValue={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            placeholder="Email"
                            className={classnames("", {
                                invalid: errors.email
                            })}
                        />
                        <span className="error-text">{errors.email}</span>
                    </div>
                    <div className="input-field">
                        <input
                            onchange={this.handleChange}
                            defaultValue={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            placeholder="Password"
                            className={classnames("", {
                                invalid: errors.password
                            })}
                        />
                        <span className="error-text">{errors.password}</span>
                    </div>
                    <div className="input-field">
                        <input
                            onchange={this.handleChange}
                            defaultValue={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            placeholder="Confirm Password"
                            className={classnames("", {
                                invalid: errors.password2
                            })}
                        />
                        <span className="error-text">{errors.password2}</span>
                    </div>
                    <div className="">
                        <button type="submit" className="btn-register">Sign up</button>
                    </div>
                    <div className="">
                        <p className="">
                            Already have an account? <Link to="/login">Log in</Link>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { registerUser })(withRouter(Register));