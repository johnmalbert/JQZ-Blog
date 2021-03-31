import React, {useState} from 'react'

const ProjectDisplay = props => {
    const { project } = props;
    return (
        <div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <image className="profile-picture" src={project.thumbnail} alt=""/>
        </div>
    )
}

export default ProjectDisplay
