import React, {useState} from 'react'

const ProjectDisplay = props => {
    const { project } = props;
    return (
        <div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
        </div>
    )
}

export default ProjectDisplay
