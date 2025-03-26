import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky-top bg-white">
            <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                <div className="container d-flex justify-content-between">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="d-inline-block align-top"
                            alt="Logo"
                            style={{ height: '3rem' }}
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-1" id="navbarNav">
                        <div className="d-flex justify-content-center w-100">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'text-warning' : 'text-dark'}`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'text-warning' : 'text-dark'}`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'text-warning' : 'text-dark'}`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/github"
                                        className={({ isActive }) =>
                                            `nav-link ${isActive ? 'text-warning' : 'text-dark'}`
                                        }
                                    >
                                        Github
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex ms-lg-3 flex-shrink-0">
                            <Link
                                to="#"
                                className="btn btn-outline-dark me-2"
                            >
                                Log in
                            </Link>
                            <Link
                                to="#"
                                className="btn btn-warning text-white"
                            >
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
