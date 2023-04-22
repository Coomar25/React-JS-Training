
// ===================================================================================================================//
// =======================================Below code is for Movie App from json ======================================//
// ===================================================================================================================//

import React from 'react'
import Header from './component/Header/Header'
import Movie from './component/movieapp/Movie'
import moviess from './moviess.json'
import './App.css'
const App = () => {
    return (
        <div>
            <Header name="This line is from Header Coomponet from App through propss" ></Header>
            <div className="MovieContainer">
                {
                    moviess.map((Element, index) => {
                        return (
                            <Movie
                                key={index}
                                title={Element.Title}
                                year={Element.Year}
                                runtime={Element.Runtime}
                                poster={Element.Poster} />
                        )
                    })
                }
            </div>

        </div>
    )
}
export default App
// ===================================================================================================================//
// =======================================Above code is for Movie App from json ======================================//
// ===================================================================================================================//


