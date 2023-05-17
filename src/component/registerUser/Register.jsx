
import axios from 'axios';
import React, { useState } from 'react'
import Home from './home';
import http from '../axios/http';
import { NavLink, useNavigate } from 'react-router-dom';



const Register = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        http.post('/users', inputs).then((res) => {
            navigate('/register');
        })
    }

    const navLinksStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "none" : "none",
            color: isActive ? "white" : "black",
        };
    };



    return (
        <div className='container'>

            <h1 className='mt-4 mb-4'>CRUD Operation React JS and Laravel API</h1>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" value={inputs.name || ''} onChange={handleChange} name='name' className="form-control" />
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" value={inputs.email || ''} onChange={handleChange} name='email' className="form-control" />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" value={inputs.password || ''} onChange={handleChange} name='password' className="form-control" />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input type="password" value={inputs.password_confirmation || ''} onChange={handleChange} name='password_confirmation' className="form-control" />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Contact</label>
                <div className="col-sm-10">
                    <input type="tel" value={inputs.contact || ''} onChange={handleChange} name="contact" className="form-control" />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                    <input type="text" value={inputs.address || ''} onChange={handleChange} name='address' className="form-control" />
                </div>
            </div>

            <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-primary ml-4">
                <NavLink to="/loginPage" style={navLinksStyles}>Login</NavLink >
            </button>



            <Home />




        </div>
    )
}

export default Register