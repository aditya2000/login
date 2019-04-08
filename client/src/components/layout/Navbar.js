import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <Link to="/" className="brand-logo">
                    Auth
                </Link>
            </div>
        )
    }
}

export default Navbar;