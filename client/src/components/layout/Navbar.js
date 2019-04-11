import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/List.png';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <Link to="/">
                    <img src={logo} className="brand-logo"/>
                </Link>
            </div>
        )
    }
}

export default Navbar;