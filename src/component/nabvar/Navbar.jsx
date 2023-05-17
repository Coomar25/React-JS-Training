import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const navLinksStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "red" : "black",
        };
    };


    return (

        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4 pt-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} to="/">context API</NavLink>
                            </li>
                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} to="/userefhook">useRef Hook</NavLink>
                            </li>
                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} to="/exampleusestate">exampleusestate</NavLink>

                            </li>
                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} class="nav-link " to="/movieapp">movieapp</NavLink>

                            </li>
                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} class="nav-link " to="/exampleprops">exampleprops</NavLink>
                            </li>

                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} class="nav-link " to="/todoproject">todoproject</NavLink>
                            </li>

                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} class="nav-link" to="/usestateapifetch">usestateapifetch</NavLink>
                            </li>

                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} class="nav-link" to="/contact">contact</NavLink>
                            </li>

                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} class="nav-link" to="/userdetails">User_Details</NavLink>
                            </li>

                            <li class="nav-item mx-4">
                                <NavLink style={navLinksStyles} class="nav-link" to="/register">Register</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
















        </div>



    )
}

export default Navbar