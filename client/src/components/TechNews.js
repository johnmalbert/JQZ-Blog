import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Paper } from '@material-ui/core';
import dateFormat from 'dateformat';

const TechNews = () => {
    const api_key = process.env.REACT_APP_FIRST_KEY;
    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get(`https://gnewsapi.net/api/search?q=tech&language=en&country=us&limit=3&api_token=${api_key}`)
            .then(response => {
                console.log(response);
                setArticle(response.data.articles)
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
                            <Paper elevation={5} style={{backgroundColor: "#262f34"}} className="newsArticle" key={i}>
                                <a className="text-center" href={article.article_url}><h4>{article.title}</h4></a>
                                <img src={article.image_url} alt=""></img>
                                <p className="articleDate text-center">{dateFormat(article.published_datetime, "mmmm dS, yyyy")}</p>
                                <p className="articleDescription">{article.description}</p>
                                <button className="btn btn-primary w-100"><a href={article.article_url} className="articleDescription ml-1">Click to read more...</a></button>
                            </Paper>
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
