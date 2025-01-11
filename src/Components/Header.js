import React from 'react';
import '../static/header.css';
import companyLogo from '../static/company_logo.png';

const Header = () => {
    
    function introPage() {
        window.location.href = '/intro';
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>
                    <img src={companyLogo} className='navbar-brand' alt="CryptoDashboard" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#taxes">Crypto Taxes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tools">Free Tools</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resources">Resource Center</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary" onClick={introPage}>Get Started</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;