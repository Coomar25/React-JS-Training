import React, { useState, useEffect, useRef } from 'react'


const UserefHookExample = () => {

    const [input, setInput] = useState("");
    // const [counter, setCounter] = useState(0);
    const counter = useRef(0);
    const prevState = useRef("");

    useEffect(() => {
        console.log("Application has been rendered");
        // setCounter(counter + 1);
        counter.current = counter.current + 1;
        prevState.current = input;

    })



    const formHandler = (e) => {
        setInput(e.target.value);
    }



    return (
        <div className='useRefHookForm'>

            {/* onChange={(e) => setInput(e.target.value) */}
            <input type="text" value={input} onChange={formHandler} />
            <h3>Application has been rendered {counter.current} times</h3>
            <h3>Previous State was = {prevState.current} </h3>


        </div>
    )
}

export default UserefHookExample