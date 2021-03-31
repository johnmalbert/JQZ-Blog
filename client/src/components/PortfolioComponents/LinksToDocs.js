import React from 'react'

const LinksToDocs = props => {
    const { linkedIn, facebook, github, instagram, youtube } = props;
    return (
        <div>
            <div className="border">
            <h5 className="text-center p-3 border-bottom">My Links</h5>
                <ul>
                    {
                        linkedIn ? 
                        <li className="portfolio-nav"><a href={linkedIn}>LinkedIn</a></li> : ""
                    }
                    {
                        github ?
                        <li className="portfolio-nav"><a href={github}>Github</a></li> : ""
                    }
                    {
                        instagram ? 
                        <li className="portfolio-nav"><a href={instagram}>Instagram</a></li> : ""
                    }
                    {
                        facebook ?
                        <li className="portfolio-nav"><a href={facebook}>Facebook</a></li> : ""
                    }
                    {
                        youtube ? 
                        <li className="portfolio-nav"><a href={youtube}>Youtube</a></li> : ""
                    }
                </ul>
            </div>
        </div>
    )
}

export default LinksToDocs
