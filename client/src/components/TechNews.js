import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import axios from 'axios'

const TechNews = () => {
    const [loaded, setLoaded] = useState(false);
    const [article, setArticle] = useState({
        title: "",
        description: "",
        image_url: "",
        url: ""
    });

    useEffect(() => {
        axios.get("https://api.thenewsapi.com/v1/news/all?api_token=qqWeINXml9MHzLJnVjuO7pQQsQ48zMqddlJZZigs&search=forex + (usd | gbp) -cad&language=en&categories=tech")
            .then(response => {
                console.log(response.data);
                setArticle(response.data)
                setLoaded(true);
            })
            .catch(err => console.log("Error", err))
    },[])

    return (
        <div>
            <div className="container">
            {
                loaded ?
                <div>
                    {
                        <div className="newsArticle">
                            <img src={article.data.[0].image_url} alt=""></img>
                            <h4>{article.data.[0].title}</h4>
                            <p>{article.data.[0].description}</p>
                            <p><Link to={article.data.[0].url}>{article.data.[0].url}</Link></p>
                            <img src={article.data.[1].image_url} alt=""></img>
                            <h4>{article.data.[1].title}</h4>
                            <p>{article.data.[1].description}</p>
                            <p><Link to={article.data.[1].url}>{article.data.[1].url}</Link></p>
                            <img src={article.data.[3].image_url} alt=""></img>
                            <h4>{article.data.[3].title}</h4>
                            <p>{article.data.[3].description}</p>
                            <p><Link to={article.data.[3].url}>{article.data.[3].url}</Link></p>
                        </div>
                    }
                </div>
                :
                ""
            }
            </div>
        </div>
    )
}

export default TechNews
