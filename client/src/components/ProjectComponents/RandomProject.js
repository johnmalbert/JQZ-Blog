import { Link } from '@reach/router';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

const RandomProject = props => {
    const [project, setProject] = useState();
    const [allProjects, setAllProjects] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/projects")
            .then(response => {
                let total = (response.data.results.length);
                let rand = Math.floor(Math.random() * total);
                console.log(rand);
                setProject(response.data.results[rand]);
                console.log(project);
            })
            .catch(err => console.log("error fetching projects", err))
    }, [])
    return (
        <div>
            <div className="container text-center">

            {
                project ? 
                <div style={{width: "75%"}} className="projectLink">
                    <a href={project.github} style={{color: "#f34a4a"}}>
                        <h3>Featured Project: </h3><h3>{project.title}</h3> 
                        <h5>{project.desc}</h5>
                        <h5>Owner: {project.owner}</h5>
                        <h5>{project.languages}</h5>
                    </a>
                </div>: "Loading..."
            }
            </div>
        </div>
    )
}

export default RandomProject
