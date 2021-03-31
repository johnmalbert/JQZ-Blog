import React, {useState} from 'react'

const PortfolioDisplay = props => {
    const { project } = props;
    //portfolio components: award1, award2, award3, linkedIn, github, facebook, instagram, bio
    return (
        <div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
        </div>
    )
}

export default PortfolioDisplay
