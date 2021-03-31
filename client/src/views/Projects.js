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
    const [title, setTitle] = useState(""); 
    const [languages, setLanguages] = useState("");
    const [desc, setDesc] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    
    {/* axios to get that portfolio data */}
    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
            .then(response => {
                console.log(response.data);
                setProject(response.data.results[3]);
            })
            .catch(err => console.log("Can't find that project", err))
    },[])
        const onSubmitHandler = e => {
            //prevent default behavior of the submit
            e.preventDefault();
            //make a post request to create a new person
            axios.post('http://localhost:8000/api/projects', {
                title,
                languages,
                desc,
                thumbnail
            })
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
        }


    return (
        <div>
            <ProjectDisplay project={project}/>


        <form style={{marginLeft:2+'em'}} onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Languages</label><br/>
                <input type="text" onChange={(e)=>setLanguages(e.target.value)} value={languages}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <p>
                <label>Thumbnail</label><br/>
                <input type="file" onChange={(e)=>setThumbnail(e.target.value)} value={thumbnail} />
            </p>
            <input type="submit"/>
        </form>
        </div>
    )
}

export default Projects
