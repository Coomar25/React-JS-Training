import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const submitForm = (e) => {
        e.preventDefault(); // Prevent the default form submit action
        console.log(email + " " + password);

    }


    return (
        <div className='loginForm'>

            <form onSubmit={submitForm}>
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}

export default Login