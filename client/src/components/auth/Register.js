import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

        console.log(newUser);
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
                        />
                    </div>
                    <div className="input-field">
                        <input
                            onchange={this.handleChange}
                            defaultValue={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-field">
                        <input
                            onchange={this.handleChange}
                            defaultValue={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="input-field">
                        <input
                            onchange={this.handleChange}
                            defaultValue={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            placeholder="Confirm Password"
                        />
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

export default Register;