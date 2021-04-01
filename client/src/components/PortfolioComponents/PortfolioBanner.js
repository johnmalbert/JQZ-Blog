import React from 'react'
import { Link } from '@reach/router';
const PortfolioBanner = () => {
    return (
        <div>
            <div className="col-sm-12 text-center justify-space-between mt-4 pt-2 border">
                <ul>
                    <li className="portfolio-banner"><Link to="/#">Cover Letter</Link></li>
                    <li className="portfolio-banner"><Link to="/#">Resume</Link></li>
                    <li className="portfolio-banner"><Link to="/#">Projects</Link></li>
                    <li className="portfolio-banner"><Link to="/#">Documents</Link></li>
                    <li className="portfolio-banner"><Link to="/#">Certifications</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default PortfolioBanner
