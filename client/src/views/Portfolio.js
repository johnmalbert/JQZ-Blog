import React, {useEffect, useState} from 'react'
import PortfolioBody from '../components/PortfolioComponents/PortfolioBody';
import PortfolioDisplay from '../components/PortfolioComponents/PortfolioDisplay'
import guy from '../guy.jpg';
import axios from 'axios';


const Portfolio = props => {
    const [portfolio, setPortfolio] = useState({
        linkedIn: "",
        github: "",
        facebook: "",
        instagram: "",
        linkedIn: "",
        award1: "",
        award2: "",
        award3: "",
        bio: ""
    });
    {/* axios to get that portfolio data */}
    useEffect(() => {
        axios.get('http://localhost:8000/api/portfolios/6063d7577122aca6a04e20f9')
            .then(response => {
                console.log(response.data);
                setPortfolio(response.data.results);
            })
            .catch(err => console.log("Can't find that portfolio", err))
    },[])


    return (
        <div>
            <PortfolioDisplay guy={guy} portfolio={portfolio}/>
            {/* 
            Owner Name

            
            */}
        </div>
    )
}

export default Portfolio
