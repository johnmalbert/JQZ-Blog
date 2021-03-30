import React from 'react'
import DevJoke from '../components/DevJoke'
import TechNews from '../components/TechNews'
import TTT from '../components/TTT'

const Landing = () => {
    return (
        <div>
            <div className="landingJoke">
                <DevJoke />
            </div>
            <div className="landingContent">
                <div className="landingTrends">
                    <h5>Current Trending Development</h5>
                    <TechNews />
                </div>
                <div className="landingGames">
                    <p>Let's play a game</p>
                    <TTT />
                </div>
            </div>
        </div>
    )
}

export default Landing