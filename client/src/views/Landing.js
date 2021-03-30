import React from 'react'
import DevJoke from '../components/DevJoke'
import { Link } from '@reach/router';

const Landing = () => {
    return (
        <div>
            <h1>Landing Page!</h1>
            <h3>Navigation Links:</h3>
                Will be a dropdown
                <Link to="/portfolio/john">Portfolio | </Link> 
                <Link to="/code">Code Snippets | </Link>
                <Link to="/algorithms">Algorithm Challenges | </Link>
            <div className="landingJoke">
                <DevJoke />
            </div>
        </div>
    )
}

export default Landing
