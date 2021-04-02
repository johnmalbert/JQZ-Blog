import React, {useEffect, useState} from 'react'
import guy from '../guy.jpg';
import axios from 'axios';
import { Link } from '@reach/router';


const Portfolio = props => {
    const [portfolios, setPortfolios] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/portfolios/')
            .then(response => {
                console.log(response.data);
                setPortfolios(response.data.results);
            })
            .catch(err => console.log("Can't find that portfolio", err))
    },[])


    return (
        <div>
            <div className="container">
                <h3 className="text-center text-secondary">View Portfolios</h3>
            {
                portfolios ?
                <div>
                    {
                        portfolios.map((portfolio, i) => 
                        <div className="portfolioLink" key={i}>
                            <Link style={{color: "#f1d3bc"}} to={`/portfolio/${portfolio._id}`}>
                            <img src={guy} alt="Portfolio"/>
                            <h5 className="p-3">{portfolio.name}</h5>
                            </Link>
                        </div>
                        )
                    }
                </div> 
                    : "Loading the list of portfolios..."
                }
            </div>
        </div>
    )
}

export default Portfolio
