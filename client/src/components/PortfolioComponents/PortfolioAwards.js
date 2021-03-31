import React from 'react'

const PortfolioAwards = props => {
    const { award1, award2, award3, award4 } = props;
    return (
        <div>
            <div className="border">
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
            </div>
        </div>
    )
}

export default PortfolioAwards
