// ===================================================================================================================//
// =======================================Below code learning useState Hooks==========================================//
// ===================================================================================================================//


import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

    const [num, setnum] = useState(1);

    const incre = () => {
        setnum(num + 1);
    }

    const decre = () => {
        setnum(num - 1);
    }


    // Changing background color to dark red like some thing
    const [stateLayout, setBackground] = useState('stateLayout', 'light');
    const changeBackground = () => {
        setBackground('usingstateLayout');
    }

    const [unknown, setLight] = useState('usingstateLayout');
    const LightMode = () => {
        setLight('light');
    }

    return (
        <div className='useStateExample'>
            <div className={stateLayout}>
                <div className={unknown}>
                    <div className='number'>
                        <h1> {num} </h1>
                    </div>
                    <div className='bttn'>
                        <button onClick={incre}>Increment</button>
                        <button onClick={decre}>Decrement</button>
                        {/* <button onClick={changeBackground}>Change backGround</button>
                        <button onClick={LightMode}>Light Mode</button> */}
                    </div>
                </div>

            </div>
        </div >
    )
}

export default App