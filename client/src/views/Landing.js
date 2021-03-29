import { Link } from '@reach/router'
import React from 'react'

const Landing = () => {
    return (
        <div>
            <h1>Landing Page!</h1>
            <h3>Navigation Links:</h3>
            <div>
                Will be a dropdown
                <Link to="/portfolio">Portfolio | </Link> 
                <Link to="/code">Code Snippets | </Link>
                <Link to="/algorithms">Algorithm Challenges | </Link>
            </div>
            <div>
                Will be in the top right
                <Link to="/login">Login/Register</Link>
            </div>
            <div style={{height: '400px', width: '75%', margin: 'auto', border: '1px solid black'}}>
                <h1>Current trending development</h1>
            </div>
            <div>Links to the games here...</div>
        </div>
    )
}

export default Landing
