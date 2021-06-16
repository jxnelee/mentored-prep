import React from 'react'
// importing the css file for this component
import './Row.css' 
// axios is used to perform api requests
// import axios from 'axios'

// creating the component
export default function Row(props) {
    const name = props.name
    const rating = createStars(props.rating)

    // the HTML of this component (used by the DOM tree)
    return (
        <div className='row-wrapper'>
            <div className='text-wrapper'>
                <p className='text'>{name}</p>
            </div>
            <div className='stars-wrapper'>
                <p className='stars'>{rating}</p>
            </div>
        </div>
    )
}

function createStars(numStars) {
    let stars = ""
    for(let i=0; i<numStars; i++) {
        stars += "*"
    }
    return stars
}
