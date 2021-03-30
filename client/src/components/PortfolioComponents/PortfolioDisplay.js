import React, {useState} from 'react'
import LinksToDocs from './LinksToDocs';
import PortfolioAwards from './PortfolioAwards';
import PortfolioBanner from './PortfolioBanner';
import PortfolioBody from './PortfolioBody';

const PortfolioDisplay = props => {
    const { owner } = props;
    return (
        <div>
            <h1> HI, MY NAME IS JOHN </h1>
            <PortfolioBanner /> 
            <div className="row p-5">
                <div className="col-md-2">
                    <LinksToDocs />
                </div>
                <div className="col-md-8">
                    <PortfolioBody />
                </div>
                <div className="col-md-2">
                    <PortfolioAwards />
                </div>
            </div>
        </div>
    )
}

export default PortfolioDisplay
