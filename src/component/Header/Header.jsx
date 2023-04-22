import { Link } from '@mui/material'
import React from 'react'



const Header = (props) => {
    return (
        <div>
            <h1 className='header' style={{ textAlign: "center" }}>Below Movie Data is fetched from JSON and displayed using MAP Function</h1>
            <h2 style={{ textAlign: "center" }}>{props.name}</h2>
            <hr></hr>

        </div>
    )
}

export default Header