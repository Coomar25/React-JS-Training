import React from 'react'
import './movie.css'

const Movie = (props) => {
    return (
        <div>
            <div className="moviecontainer">
                <div className="poster">
                    <img src={props.poster} alt="" />
                </div>
                <div className="detail">
                    <h4>{props.title}</h4>
                    <h4>{props.year}</h4>
                    <h4>{props.runtime}</h4>
                </div>
            </div>
        </div>
    )
}


export default Movie