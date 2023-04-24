import React from 'react'
import ComA from './ComA'
import { createContext, useState } from 'react'




const AppState = createContext();

const Home = () => {
    const [data, setData] = useState("Coomar:- This message is from Home.js we are passing this message to ComC.js")
    const [name, setName] = useState({ name: "Coomar", age: 23 })
    return (
        <div className='parentComp'>
            <h1>This page is Context API Page Where Component A is Callled</h1>
            <h2>That message is send directly from This Home Component to Component C using contextAPI</h2>
            <AppState.Provider value={{ data, name }}>
                <ComA />
            </AppState.Provider>
        </div>
    )
}

export default Home
export { AppState }