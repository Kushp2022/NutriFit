import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './assets/logo.png';
import './index.css';

function Navbar() {
    const navbarStyle = {
        backgroundColor: '#ffff',
        position: 'fixed', // Add the fixed position
        width: '100%', // Set the width to 100% to span the entire viewport
        zIndex: 1000, // Set a high z-index to ensure it's on top
    };

    return (
        <nav className="navbar navbar-expand-lg" style={navbarStyle}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    <span className="navbar-title"><b>NutriFit</b></span>
                </a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-dark" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning" href="/track">Track</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
