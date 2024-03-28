// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4" to="home">LA COLLECTION</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto fw-bold mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="login" className="btn btn-outline-dark m-2">
                                <i className="fa-solid fa-arrow-right-to-bracket me-1"></i>Login</Link>

                            <Link to="register" className="btn btn-outline-dark m-2">
                                <i className="fa-solid fa-user-plus me-1"></i>Register</Link>

                            <Link href="#" className="btn btn-outline-dark m-2">
                                <i className="fa-solid fa-shopping-cart me-1"></i>Cart (0)</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
