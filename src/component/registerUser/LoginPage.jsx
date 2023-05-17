import React from 'react'
import { NavLink } from 'react-router-dom';

const LoginPage = () => {

    const navLinksStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "none",
            color: isActive ? "white" : "black",
        };
    };
    return (
        <div>
            <h1>Login Page</h1>
            <div className='container'>

                <div class="form-outline">
                    <label class="form-label" for="formControlLg">Enter username</label>
                    <input type="text" id="formControlLg" class="form-control form-control-lg" />
                </div>

                <div class="form-outline">
                    <label class="form-label" for="formControlDefault">Password</label>
                    <input type="password" id="formControlDefault" class="form-control" />
                </div>

                <button type="button" className="btn btn-primary ml-4 mt-4">
                    Login
                </button>

            </div>




        </div>
    )
}

export default LoginPage