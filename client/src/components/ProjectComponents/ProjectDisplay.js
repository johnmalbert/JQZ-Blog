import React, {useState} from 'react'

const ProjectDisplay = props => {
    const { project, index } = props;
    return (
        <div>
            <h4><a href={project[index].github}>{project[index].title}</a></h4>
            <p>{project[index].desc} - {project[index].languages}</p>
<<<<<<< HEAD
            <p>{project[index].desc}</p>
=======
>>>>>>> cd78e31 (Update ProjectDisplay.js)
        </div>
    )
}

export default ProjectDisplay
