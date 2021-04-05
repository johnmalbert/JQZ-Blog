import React, {useEffect, useState} from 'react'
import guy from '../guy.jpg';
import axios from 'axios';
import { Link } from '@reach/router';
import {
    Paper,
    Card
} from '@material-ui/core';
const styles = {
    paper: {
        width: "60rem", padding: "1rem", margin: "auto", backgroundColor: " #262f34"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

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
        <Paper elevation={3} style={styles.paper}>
                <h3 className="text-center text-secondary">View Portfolios</h3>
            {
                portfolios ?
                <div>
                    {
                        portfolios.map((portfolio, i) => 
                        <div className="portfolioLink" key={i}>
                            <Link style={{color: "#f1d3bc"}} to={`/portfolio/${portfolio._id}`} >
                            <img src={guy} alt="Portfolio"/>
                            <h5 className="p-3">{portfolio.name}</h5>
                            </Link>
                        </div>
                        )
                    }
                </div> 
                    : "Loading the list of portfolios..."
                }
                <div className="container text-center"><button className="btn btn-secondary m-5"><Link style={{color: "#f1d3bc"}} to="/portfolio/new" > Add a portfolio!</Link></button></div>
            </Paper>
        </div>
    )
}

export default Portfolio
