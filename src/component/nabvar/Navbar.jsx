import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (

        <div>



            <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4 pt-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/exampleusestate">exampleusestate</Link>

                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/movieapp">movieapp</Link>

                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/exampleprops">exampleprops</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/todoproject">todoproject</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="/usestateapifetch">usestateapifetch</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
















        </div>



    )
}

export default Navbar