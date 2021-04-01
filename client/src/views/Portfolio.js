import React, {useEffect, useState} from 'react'
import guy from '../guy.jpg';
import axios from 'axios';
import { Link } from '@reach/router';


const Portfolio = props => {
    const { id } = props;
    const [portfolios, setPortfolios] = useState([])
    {/* axios to get that portfolio data */}
    useEffect(() => {
        console.log(id);
        
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
                <h1 className="text-center text-secondary">View Portfolios</h1>
            {
                portfolios ?
                <div>
                    {
                        portfolios.map((portfolio, i) => 
                        <div className="portfolioLink" key={i}>
                            <Link to={`/portfolio/${portfolio._id}`}>
                            <img src={guy} alt="Portfolio Image"/>
                            <h4>{portfolio.name}</h4>
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
