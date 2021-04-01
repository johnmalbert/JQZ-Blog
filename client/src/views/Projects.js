import React, {useEffect, useState} from 'react'
import ProjectProject from '../components/ProjectComponents/ProjectProject'
import axios from 'axios';

const Projects = props => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
            .then(response => {
                setProject(response.data.results);
            })
            .catch(err => console.log("Can't find that project", err))
    },[])


    return (

        <div>
    <div className="container">
        <h3 className="text-center">Projects</h3>
        <div className="row">
            <div className="col-sm-12 border p-2">
            {project.map((task, i) => (
                <div>
                    <ProjectProject project={project} index={i}/>
                    {console.log(project[i])}
                </div>
                ))}
            </div>
        </div>
    </div>
</div>
                )


}

export default Projects
