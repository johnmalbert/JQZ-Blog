import { navigate } from '@reach/router';
import axios from 'axios';
import React, {useState} from 'react'

const NewProject = props => {
    const { id } = props; //id should be the user who is creating the project
    const [project, setProject] = useState({})
    const [errors, setErrors] = useState([]);
    const changeHandler = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/projects", project)
            .then(response => {
                console.log(response.data);
                if(response.data.message ==="error"){
                    const errorResponse = response.data.errors;
                    const errorArr = [];
                    for(const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr)
                }else{
                    navigate("/projects")
                }
            })
            .catch(err => console.log("errors creating project", err))
    }
    return (
        <div>
            <div className="container p-5 text-center">
                <h3 className="text-center text-secondary border-bottom mb-3 p-3">Upload a project to your portfolio</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="title" placeholder="Enter the Project Title*" value={project.title} onChange={e => changeHandler(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="languages" placeholder="Enter the Programming Languages used" value={project.languages} onChange={e => changeHandler(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="desc" placeholder="Enter a brief project descriptions" value={project.desc} onChange={e => changeHandler(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="github" placeholder="Paste the link to the github repository" value={project.github} onChange={e => changeHandler(e)}/>
                    </div>
                {errors
                ? errors.map((err, index) => (
                    <p style={{ color: "red" }} key={index}>
                    {err}
                    </p>
                ))
                : ""}
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewProject
