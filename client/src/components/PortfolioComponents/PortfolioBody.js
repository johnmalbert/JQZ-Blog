import React from 'react'
// import guy from '../guy.jpg';

const PortfolioBody = props => {
    const { guy } = props;
    return (
        <div>
                <div className="row">
                    <div className="col sm-4">
                        <img className="profile-picture" src={guy} alt=""/>
                    </div>
                    <div className="col sm-8">
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus, optio cupiditate eos harum vitae fugit sapiente perspiciatis dolorem voluptas iure nesciunt quis maiores accusantium, distinctio aperiam porro vel veniam. </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque et recusandae pariatur, voluptatem facere adipisci consectetur aliquid aut ea ipsam corporis explicabo, a cupiditate repellendus? Amet minus odit quo distinctio cupiditate sint accusamus, ratione ad eos. Blanditiis, officiis praesentium? Odit adipisci obcaecati omnis ipsum, aliquid voluptatum voluptates doloremque quam, nam pariatur vel excepturi! Harum officiis quia sequi dolorem, dolor corrupti laboriosam doloribus quo saepe rem, veritatis, nesciunt qui! Labore numquam quod ad impedit ut tenetur excepturi repellendus?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti sit tenetur, quis ea earum ducimus ab, tempora recusandae accusamus, at similique ipsum sed vero reprehenderit quidem rerum saepe molestias debitis vel voluptas et. Modi dolores ipsum tenetur amet, itaque porro maiores alias sequi. Reiciendis blanditiis, natus nulla beatae eveniet veritatis adipisci quidem unde in doloremque.</p>
                    </div>
                </div>

        </div>
    )
}

export default PortfolioBody
