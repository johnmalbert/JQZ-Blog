import React, {useEffect, useState} from 'react'
import ProjectDisplay from '../components/ProjectComponents/ProjectDisplay'
import axios from 'axios';


const Projects = props => {
    const [project, setProject] = useState({
        title: "",
        description: "",
        languages: "",
        thumbnail: ""
    });
    {/* axios to get that portfolio data */}
    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/6063d7577122aca6a04e20f9')
            .then(response => {
                console.log(response.data);
                setProject(response.data.results);
            })
            .catch(err => console.log("Can't find that project", err))
    },[])


    return (
        <div>
            <ProjectDisplay project={project}/>

        </div>
    )
}

export default Projects
