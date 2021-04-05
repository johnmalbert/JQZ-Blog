import React, {useState} from 'react'
import { Link } from '@reach/router';
import { Paper } from '@material-ui/core';
import git from './Github.png';
import dateFormat from 'dateformat';


const ProjectDisplay = props => {
    const { project, index } = props;
    return (
        <div>
            <Paper className="projectElement" elevation={3} style={{backgroundColor: "#262f34", padding: "10px", margin: "10px"}}>
                <div className="row">
                    <div className="col-sm-1">
                        <a href={project[index].github}>
                            <img src={git} alt="Spotlight Project"/>
                        </a>
                        <p className="text-center">{dateFormat(project[index].createdAt, 'mm/dd/yyyy')}</p>
                    </div>
                    <div className="col-sm-9 p-3 ml-3">
                        <h5><a href={project[index].github} alt="">{project[index].title}</a> - <span class="projectspan"><Link style={{color: "#615049"}} to={`/portfolio/${project[index].ownerId}`}> Created By {project[index].owner}</Link></span></h5>
                        <p>Description: {project[index].desc} - Built in {project[index].languages}</p>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default ProjectDisplay
