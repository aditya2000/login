import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Landing.css";

class Landing extends Component {
    render() {
        return(
            <div className="landing">
                <h4>Welcome!</h4>
                <div className="buttons">
                <Link to="/register">
                    <button className="btn-landing">Register</button>
                </Link>
                <Link to="/login">
                    <button className="btn-landing">Login</button>
                </Link>
                </div>        
            </div>
        )
    }
}

export default Landing;