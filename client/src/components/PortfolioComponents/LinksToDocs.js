import React from 'react';
import { Paper } from '@material-ui/core';
const LinksToDocs = props => {
    const { linkedIn, facebook, github, instagram, youtube } = props;
    return (
        <div>
            <Paper className="portfolioLinks" elevation={3} style={{backgroundColor: "#262f34", padding: "10px", margin: "10px"}}>
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
            </Paper>
        </div>
    )
}

export default LinksToDocs
