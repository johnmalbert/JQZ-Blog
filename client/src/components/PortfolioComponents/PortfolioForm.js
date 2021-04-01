import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

const PortfolioForm = () => {
    const [errors, setErrors] = useState([]);
    const [portfolio, setPortfolio] = useState({
        name: "",
        linkedIn: "",
        github: "",
        facebook: "",
        instagram: "",
        youtube: "",
        award1: "",
        award2: "",
        award3: "", 
        bio: ""
    })
    const changeHandler = e => {
        setPortfolio({
            ...portfolio,
            [e.target.name]: e.target.value
        });
    }
    const submitHandler= e => {
        e.preventDefault();
        // create the portfolio
        axios.post("http://localhost:8000/api/portfolios/", portfolio)
            .then(response => {
                console.log(response.data);
                if(response.data.message==="error"){
                    const errorResponse = response.data.errors;
                    const errorArr = [];
                    console.log(errorResponse);
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                }else{
                    navigate("/portfolio/"+response.data.results._id)
                }
            })
            .catch(err => console.log("Error creating portfolio model", err));
        // redirect upon successful creation
    }
    return (
        <div>
            <div className="container text-center">
                <h1 className="text-secondary p-2">Start Building Your Portfolio!</h1>
                <div className="container bg-secondary p-5 border-radius">
                {/*this should be only available to users, but hey, haven't figured out the login yet... */}
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input className="form-control" type="text" name="name" placeholder="Enter your fullname*" value={portfolio.name} onChange={e => changeHandler(e)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="linkedIn" placeholder="Copy a link to your LinkedIn" value={portfolio.linkedIn} onChange={e => changeHandler(e)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="github" placeholder="Copy a link to your github" value={portfolio.github} onChange={e => changeHandler(e)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="facebook" placeholder="Copy a link to your Facebook (Optional)" value={portfolio.facebook} onChange={e => changeHandler(e)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="instagram" placeholder="Copy a link to your Instagram (Optional)" value={portfolio.instagram} onChange={e => changeHandler(e)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="youtube" placeholder="Copy a link to your Youtube (Optional)" value={portfolio.youtube} onChange={e => changeHandler(e)}/>
                    </div>
                    <div className="row">
                        <div className="col sm-4">
                            <div className="form-group">
                                <input className="form-control" type="text" name="award1" placeholder="Award, Degree, Certification, etc." value={portfolio.award1} onChange={e => changeHandler(e)}/>
                            </div>
                        </div>
                        <div className="col sm-4">
                            <div className="form-group">
                                <input className="form-control" type="text" name="award2" placeholder="Award, Degree, Certification, etc." value={portfolio.award2} onChange={e => changeHandler(e)}/>
                            </div>
                        </div>
                        <div className="col sm-4">
                            <div className="form-group">
                                <input className="form-control" type="text" name="award3" placeholder="Award, Degree, Certification, etc." value={portfolio.award3} onChange={e => changeHandler(e)}/>
                            </div>  
                        </div>
                    </div>
                    <p className="text-left text-white">Enter your Bio, (name, location, current position, experience, schooling, anything you may want to share with the world)</p>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Bio</span>
                        </div>
                        <textarea class="form-control" rows="6" aria-label="Bio" name="bio" value={portfolio.bio} onChange={e => changeHandler(e)}></textarea>
                    </div>
                    {/* map the errors */}
                    {
                        errors ? 
                        errors.map((err, index) => (
                            <p style={{ color: "red" }} key={index}>
                            {err}
                            </p>
                        ))
                        : ""
                    }
                    <button className="btn btn-primary m-2">Submit Portfolio Info</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default PortfolioForm
