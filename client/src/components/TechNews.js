import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TechNews = () => {
    const api_key = process.env.REACT_APP_FIRST_KEY;
    const [noData, setNoData] = useState(false);
    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get(`https://gnewsapi.net/api/search?q=tech&language=en&country=us&limit=3&api_token=${api_key}`)
            .then(response => {
                console.log(response);
                setArticle(response.data.articles)
                setNoData(true);
            })
            .catch(err => console.log("Error", err))
    },[])

    return (
        <div>
            {
                article ?
                <div>
                    {
                        article.map((article, i) =>
                            <div className="newsArticle" key={i}>
                                <img src={article.image_url} alt=""></img>
                                <a href={article.article_url}><h4>{article.title}</h4></a>
                                <p className="articleDate">{article.published_datetime}</p>
                                <p className="articleDescription">{article.description}</p>
                            </div>
                        )
                    }
                </div>
                : <div>
                    <h2>Sorry, no articles are available</h2>
                </div>
            }
        </div>
    )
}

export default TechNews
