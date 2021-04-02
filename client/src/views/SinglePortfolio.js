import React, { useEffect, useState } from 'react'
import guy from '../guy.jpg';
import axios from 'axios';
import PortfolioDisplay from '../components/PortfolioComponents/PortfolioDisplay';

const SinglePortfolio = props => {
    const { id } = props;
    const [portfolio, setPortfolio] = useState({
        linkedIn: "",
        github: "",
        facebook: "",
        instagram: "",
        award1: "",
        award2: "",
        award3: "",
        bio: ""
    })
    useEffect(() => {
        axios.get('http://localhost:8000/api/portfolios/' + id)
            .then(response => {
                console.log(response.data);
                setPortfolio(response.data.results);
            })
            .catch(err => console.log("Can't find that portfolio", err))
    },[])
    return (
        <div>
            <PortfolioDisplay guy={guy} portfolio={portfolio}/>
        </div>
    )
}

export default SinglePortfolio
