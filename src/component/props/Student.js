import React from 'react'
import Comp from './Comp'
import PropsType from 'props-type'

const Student = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <Comp name={props.name} age={props.age}></Comp>
            <h2>{props.newName}</h2>
            <h2>{props.Rage}</h2>
        </div>

    )
}

Student.prototype = {
    name: PropsType.string,
    age: PropsType.number
}



export default Student