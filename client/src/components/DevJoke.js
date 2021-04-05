import React, { useState, useEffect } from 'react'
import axios from 'axios'
import open from '../open.png'
import close from '../close.png'
import {Card} from '@material-ui/core';

const DevJoke = () => {
    const [loaded, setLoaded] = useState(false);
    const [joke, setJoke] = useState({
        setup: "Loading...",
        delivery: "",
        joke: "Loading..."
    });

    useEffect(() => {
        axios.get("https://v2.jokeapi.dev/joke/Programming")
            .then(response => {
                console.log(response.data);
                setJoke(response.data)
                setLoaded(true);
                
            })
            .catch(err => console.log("Error", err))
    },[])
    return (
        <div>
            <Card elevation={5} style={{backgroundColor: "#262f34"}}>
            {
                loaded ? 
                <div>
                    {
                        joke.setup ? 
                        <div className="joke">
                        <p className="text-left"><img src={open} className="quotes" alt="'"/> {joke.setup}</p>
                        <p className="text-right">{joke.delivery} <img src={close} className="quotes" alt="'"/></p> 
                    </div>:
                    <div className="joke">
                        <img src={open} className="quotes" alt="'"/>
                            {joke.joke}
                        <img src={close} className="quotes" alt="'"/>
                    </div>
                    }
                </div>
                :
                "Loading a Dev Joke..."
            }
            </Card>
        </div>
    )
}

export default DevJoke
