import React from 'react'
// import guy from '../guy.jpg';

const PortfolioBody = props => {
    const { guy, bio } = props;
    return (
        <div>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="profile-picture" src={guy} alt=""/>
                    </div>
                    <div className="col-sm-4">
                        {bio}
                    </div>
                </div>

        </div>
    )
}

export default PortfolioBody
