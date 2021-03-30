import React from 'react'
import DevJoke from '../components/DevJoke'
import { Link } from '@reach/router';

const Landing = () => {
    return (
        <div>
            <div className="landingJoke">
                <DevJoke />
            </div>
        </div>
    )
}

export default Landing
