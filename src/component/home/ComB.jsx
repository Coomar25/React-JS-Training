import React from 'react'
import ComC from './ComC'

const ComB = () => {
    return (
        <div className='CompB'>
            <h4>THis is Component B child of Component A  [ Component B ]</h4>

            <ComC />
        </div>
    )
}

export default ComB