import React from 'react'
// import guy from '../guy.jpg';
import { Link } from '@reach/router';
const PortfolioBody = props => {
    const { guy, bio, id } = props;
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
                            <button className="btn btn-primary"><Link style={{color: 'white'}} to={`/projects/new/${id}`}> Add a Project</Link></button>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default PortfolioBody
