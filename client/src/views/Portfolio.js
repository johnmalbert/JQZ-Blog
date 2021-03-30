import React from 'react'
import PortfolioBody from '../components/PortfolioComponents/PortfolioBody';
import PortfolioDisplay from '../components/PortfolioComponents/PortfolioDisplay'
import guy from '../guy.jpg';


const Portfolio = props => {
    return (
        <div>
            {/* axios to get that portfolio data */}
            <PortfolioDisplay guy={guy} />
            {/* 
            Owner Name

            
            */}
        </div>
    )
}

export default Portfolio
