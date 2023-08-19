import React  from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export default function Navbar(props) {
    let myStyle ={
        color: props.mode === 'light'?'black':'white',
    }
return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container">
            <Link  className="navbar-brand text-decoration-none" to="/">{props.navTitle}</Link >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-4">
                    <li className="nav-item">
                    <Link  className="nav-Link text-decoration-none  active" style={myStyle} aria-current="page" to="/">{props.navItemOne}</Link >
                    </li>
                    <li className="nav-item">
                    <Link  className="nav-Link text-decoration-none " style={myStyle} to="/about">{props.navItemTwo}</Link >
                    </li>
                    <li className="nav-item">
                    <Link  className="nav-Link text-decoration-none " style={myStyle} to="/contactus">{props.navItemThree}</Link >
                    </li>
                </ul>
                <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </div>
    </nav>
)
}


Navbar.propTypes ={
    navTitle: PropTypes.string,
    navItemOne: PropTypes.string,
    navItemTwo: PropTypes.string,
    navItemThree: PropTypes.string
}

Navbar.defaultProps ={
    navTitle: 'Logo/Title Here',
    navItemOne: 'Home',
    navItemTwo: 'About',
    navItemThree: 'Contact'
};


