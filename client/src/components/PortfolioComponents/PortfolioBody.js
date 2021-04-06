import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProjectDisplay from '../ProjectComponents/ProjectDisplay';
import {Paper} from '@material-ui/core';

// import guy from '../guy.jpg';
import { Link } from '@reach/router';
const PortfolioBody = props => {
    const { guy, bio, id, portfolio } = props;
    const [projects, setProjects] = useState([])
    // get the projects owned by this user
    useEffect(() => {
        axios.get("http://localhost:8000/api/projectsOwned/"+id)
        .then(response => {
            setProjects(response.data.results);
            console.log(projects)
        })
        .catch(err => console.log("Can't find that project", err))
},[props])
    return (
        <div>
                <div className="row">
                    <div className="col-sm-4">
                        <img className="profile-picture" src={guy} alt=""/>
                    </div>
                    <div className="col-sm-8">
                        <Paper elevation={3} style={{backgroundColor: "#f1d3bc", padding: "20px", margin: "10px"}}>
                            <h6 className="bio">{bio}</h6>
                        </Paper>
                    </div>
                </div>
                <div className="col text-center">
                        {projects ?
                            <Paper elevation={5} style={{backgroundColor: "#262f34", padding: "10px", margin: "10px"}} >
                            <h3 className="technicalProjects">My Technical Projects:</h3>
                        {projects.map((task, i) => (
                                <Paper  elevation={3} style={{backgroundColor: "#f1d3bc", padding: "10px", margin: "10px"}}> 
                                    <ProjectDisplay project={projects} index={i}/>
                                </Paper>
                            ))}
                        </Paper>
                        : ""
                    }
                    <button className="btn btn-primary"><Link portfolio={portfolio} style={{color: 'white'}} to={`/projects/new/${id}`}> Add a Project</Link></button>
                </div>

        </div>
    )
}

export default PortfolioBody
