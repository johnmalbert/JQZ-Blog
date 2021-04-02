import React from 'react'
import DevJoke from '../components/DevJoke'
import TechNews from '../components/TechNews'
import { Link } from '@reach/router'
import RandomProject from '../components/ProjectComponents/RandomProject'
import Portfolio from './Portfolio'

const Landing = () => {
    return (
        <div>
            <div className="landingMainContent">
                <div className="landingTrends">
                    <h2>Tech News:</h2>
                    <TechNews />
                </div>
                <div className="landingContent">
                    <h2>Development:</h2>
                    {/* A portfolio, a few project links, an algo */}
                    <RandomProject />
                    <RandomProject />
                    <h3>Portfolio to Highlight</h3>
                    <Portfolio />
                    <h3>Project 1</h3>
                    <h3>Project 2</h3>
                </div>
                <div className="landingFun">
                    <div className="landingJoke">
                        <DevJoke />
                    </div>
                    <div className="landingAlgo">
                        <h2>Solve an Algorithm:</h2>
                        <Link to="/algorithms">Algo of the day!</Link>
                    </div>
                    <div className="landingGames">
                        <h2>Play a Game:</h2>
                        <Link to="/ttt"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" alt=""/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing