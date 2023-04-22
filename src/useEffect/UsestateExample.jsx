import React, { useState, useEffect } from 'react'
import ProjectHeader from '../projectComponent/projectheader/ProjectHeader'
import { Button } from '@mui/material';

const UsestateExample = () => {

    const [state, setState] = useState(0);
    const [state2, setState2] = useState(0);
    const [state3, setState3] = useState(0);


    useEffect(() => {
        console.log("useqstate example");
        window.alert("useEffect called");
    }, [state])

    useEffect(() => {
        console.log("useqstate example");
        window.alert("secind useEffect called");
    }, [state2])

    useEffect(() => {
        window.alert("third useEffect called");
    }, [state3])

    console.log("function body called");

    return (
        <div>
            <ProjectHeader />
            <button onClick={() => setState(state + 1)}>Click {state}</button>
            <button onClick={() => setState2(state2 + 1)}>Click {state2}</button>
            <button onClick={() => setState3(state3 + 1)}>Click {state2}</button>
        </div>
    )
}

export default UsestateExample