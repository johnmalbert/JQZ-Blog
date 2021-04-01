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
>>>>>>> 0e28ba89c53da1f636879932841830bb78151792
        </div>
    )
}

export default ProjectDisplay
