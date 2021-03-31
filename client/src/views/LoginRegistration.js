import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import DevJoke from '../components/DevJoke';

const LoginRegistration = () => {
    const [slider, setSlider] = useState(2);

    const changeSlider = () => {
        if(slider === 1){
            setSlider(2);
        }else{
            setSlider(1);
        }
    }
    // get a dev joke


    return (
        <div className ="text-center">
            {
                slider === 2 ? 
                <LoginForm /> :
                <RegisterForm />
            }
            <p>
                <span>Login </span>
                <input id="slider" type="range" name="slider" min="1" max="2" value={slider} onChange={changeSlider}/>
                <span> Register</span>
            </p>

            <DevJoke />
        </div>
    )
}

export default LoginRegistration
