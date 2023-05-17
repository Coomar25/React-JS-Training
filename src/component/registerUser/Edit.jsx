
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Home from './home';
import http from '../axios/http';
import { useNavigate, useParams } from 'react-router-dom';



const Edit = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = () => {
        console.log('/edit/' + id);
        http.get('/edit/' + id).then((res) => {
            const user = res.data.user;
            console.log(user);
            setInputs({
                name: user.name,
                email: user.email,
                address: user.new_user.address,
                contact: user.new_user.contact
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        http.put('/updateuser/' + id, inputs).then((res) => {
            navigate('/register');
        })
    }


    return (
        <div className='container'>


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

            <button type="button" onClick={submitForm} className="btn btn-primary">Update</button>


        </div>
    )
}

export default Edit