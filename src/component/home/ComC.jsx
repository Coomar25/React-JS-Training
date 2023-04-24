import React, { useContext } from 'react'
import { AppState } from './Home'


const ComC = () => {
    const appData = useContext(AppState)
    return (
        <div className='CompC'>

            <h4>THis is Component C child of Component B [ Component C ]</h4>
            <h3> Received Message = {appData.data}</h3>
            <h3> Received Message = {appData.name.name}</h3>
            <h3> Received Message = {appData.name.age}</h3>
        </div>
    )
}

export default ComC