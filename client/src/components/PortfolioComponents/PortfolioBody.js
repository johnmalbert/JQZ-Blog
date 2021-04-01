import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import guy from '../guy.jpg';
import { Link } from '@reach/router';
const PortfolioBody = props => {
    const { guy, bio, id, portfolio } = props;
    const [projects, setProjects] = useState([])
    // get the projects owned by this user
    useEffect(() => {
        axios.get("http://localhost:8000/api/projects")
            .then(response => {
                let projectsByOwner = [];
                let allProjects = response.data.results;
                for(let i = 0; i < allProjects.length; i++){
                    console.log(allProjects[i]);
                    console.log(allProjects[i].ownerId);
                    if(allProjects[i].ownerId === id){
                        projectsByOwner.push(allProjects[i]);
                    }
                }
                setProjects(projectsByOwner);
                console.log(projects);
            })
            .catch(err => console.log("Error getting projects", err))
    },[])
    return (
        <div>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="profile-picture" src={guy} alt=""/>
                    </div>
                    <div className="col-sm-4">
                        <div className="border p-5">
                            {bio}
                        </div>
                        <div className="col text-center">
                            <h3>My Technical Projects:</h3>
                            <button className="btn btn-primary"><Link portfolio={portfolio} style={{color: 'white'}} to={`/projects/new/${id}`}> Add a Project</Link></button>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default PortfolioBody
