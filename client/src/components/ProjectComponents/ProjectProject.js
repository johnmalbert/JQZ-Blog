import React, {useState} from 'react'
import { Link } from '@reach/router';

const ProjectDisplay = props => {
    const { project, index } = props;
    return (
        <div>
                <h4><a href={project[index].github} alt="">{project[index].title}</a><span class="projectspan"><Link to={`/portfolio/${project[index].ownerId}`}> - {project[index].owner}</Link></span></h4>
            <p>{project[index].desc} - {project[index].languages}
            </p>
        </div>
    )
}

export default ProjectDisplay
