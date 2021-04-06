import React from 'react';
import { Paper } from '@material-ui/core';

const PortfolioAwards = props => {
    const { award1, award2, award3, award4 } = props;
    return (
        <div>
            <Paper className="portfolioLinks" elevation={3} style={{backgroundColor: "#262f34", padding: "10px", margin: "10px"}}>
            <h5 className="text-center border-bottom p-3">Awards</h5>
                <ol>
                    {
                        award1 ? 
                        <li className="portfolio-award">{award1}</li> : ""
                    }
                    {
                        award2 ? 
                        <li className="portfolio-award">{award2}</li> : ""
                    }
                    {
                        award3 ? 
                        <li className="portfolio-award">{award3}</li> : ""
                    }
                    {
                        award4 ? 
                        <li className="portfolio-award">{award3}</li> : ""
                    }
                </ol>
            </Paper>
        </div>
    )
}

export default PortfolioAwards
