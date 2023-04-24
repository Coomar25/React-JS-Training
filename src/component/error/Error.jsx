import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 >404 Error Occured</h1>
            <button onClick={() => navigate(-1)} className="btn btn-primary mt-4">Go to Back</button >
        </div>
    )
}

export default Error