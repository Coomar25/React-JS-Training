import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <Link to="social"> <h2>Social Media Contact</h2> </Link>
            <Link to="mail" className='mt-4'> <h2>COntact page mail</h2></Link>
            // Outlet is a component that will render the component that is matched by the route in the parent component
            <Outlet />
        </div>
    )
}

export default Contact