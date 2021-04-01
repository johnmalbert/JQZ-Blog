import React, {useState} from 'react'

const ProjectDisplay = props => {
    const { project, index } = props;
    return (
        <div>
            <h4><a href={project[index].github}>{project[index].title}</a></h4>
<<<<<<< HEAD
            <p>{project[index].desc} - {project[index].languages}</p>
=======
            <p>{project[index].desc}</p>
>>>>>>> ba48393 (Project update)
        </div>
    )
}

export default ProjectDisplay
