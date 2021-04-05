import { Link } from '@reach/router';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import git from './Github.png';
import { Paper } from '@material-ui/core';

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
                <Paper elevation={5} style={{width: "75%", backgroundColor: "#262f34"}} className="projectLink">
                        <div className="row">
                            <div className="col-sm-3 ml-3">
                                <a href={project.github}>
                                    <img src={git} alt="Spotlight Project"/>
                                    <h5>Source Code</h5>
                                </a>
                            </div>
                            <Paper elevation={5} style={{backgroundColor: "#262f34"}} className="col-sm-8 text-left">
                                <h3 className="text-center">{project.title}</h3> 
                                <h5>{project.desc}</h5>
                                <h5>Owner: {project.owner}</h5>
                                <h5>Language: {project.languages}</h5>
                            </Paper>
                        </div>
                </Paper>: "Loading..."
            }
            </div>
        </div>
    )
}

export default RandomProject
