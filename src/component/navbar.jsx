/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/img/logo.png";
// import bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import nav from 'react-bootstrap/nav';
// import tab from 'react-bootstrap/tab';

// console.log(bootstrap);

function Navbar() {
    return(
        <nav className="navbar navbar-light border-bottom border-light border-2">
            <div className="container-fluid g-3">
                <a href="#" className='navbar-brand'><img src={logo} alt="logo" width='50' height='50' /></a>
                <ul className='nav'>
                    <li className='nav-item'> <a href="#" className='nav-link'> Overview</a></li>
                    <li className='nav-item'><a href="#" className='nav-link '> Campaigns</a></li>
                    <li className='nav-item'><a href="#" className='nav-link '> Analatycs</a></li>
                </ul>
                <button type="button" className="btn btn-primary ">Premuim</button>
            </div>
        </nav>
    )
}

export default Navbar;