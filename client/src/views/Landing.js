import React from 'react'
import DevJoke from '../components/DevJoke'
import TechNews from '../components/TechNews'
import { Link } from '@reach/router'
import RandomProject from '../components/ProjectComponents/RandomProject'
import Portfolio from './Portfolio'
import SumGame from '../SumGame.png'

const Landing = () => {
    return (
        <div>
            <div className="landingMainContent">
                <div className="landingTrends">
                    <h2>Tech News:</h2>
                    <TechNews />
                </div>
                <div className="landingContent">
                    <h2 className="border-bottom mb-5">Development:</h2>
                    <h3 className="text-center text-secondary">Featured Projects: </h3>

                    {/* A portfolio, a few project links, an algo */}
                    <RandomProject />
                    <br/>
                    <RandomProject />
                    <div className="container text-center mt-5">
                        <Portfolio />
                    </div>
                </div>
                <div className="landingFun text-center">
                    <div className="landingJoke">
                        <DevJoke />
                    </div>
                    <div className="landingAlgo">
                        <h2>Solve an Algorithm:</h2>
                        <button className="btn btn-primary mt-3"><Link style={{color: "#f1d3bc"}}  to="/algorithms">Algo of the day!</Link></button>
                    </div>
                    <div className="landingGames">
                        <h2>Play a Game:</h2>
                        <Link to="/ttt"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png" alt=""/></Link>
                        <Link to="/sumgame"><img src={SumGame} alt="Sum Game"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing