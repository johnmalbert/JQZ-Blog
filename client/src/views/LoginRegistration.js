import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const LoginRegistration = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState([])
    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    const loginChangeHandler = (e) => {
        setLoginUser({
            ...loginUser,
            [e.target.name] : e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        axios.post('http://localhost:8000/api/users', user)
            .then(response => {
                console.log(response);
                if(response.data.message === "error"){
                    const errorResponse = response.data.errors;
                    const errorArr = [];
                    console.log(errorResponse);
                    for (const key of Object.keys(errorResponse)){
                        errorArr.push(errorResponse[key].message);
                    }
                    setErrors(errorArr);
                }else{
                    setUser({
                        username:"",
                        email:"",
                        password:"",
                        confirmPassword: ""
                    });
                    setErrors("");
                    navigate("/");
                }
            })
            .catch(err => console.log("Errors with post", err))
    }
    const loginSubmitHandler = (e) => {
        e.preventDefault();
        console.log("login attempt");
        axios.post("http://localhost:8000/api/users/login", loginUser)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log("Error with login", err))
    }
    return (
        <div>
            <h1>Login and Reg page</h1>
            <h1>Login Form</h1>
            <form onSubmit={submitHandler}>
                <p>Username: </p>
                <input type="text" name="username" onChange={e => changeHandler(e)}/>
                <p>Email:</p>
                <input type="email" name="email" onChange={e => changeHandler(e)}/>
                <p>Password:</p>
                <input type="password" name="password" onChange={e => changeHandler(e)}/>
                <p>Confirm: </p>
                <input type="password" name="confirmPassword" onChange={e => changeHandler(e)}/>
                
                
                <button type="submit">Register</button>
            </form>
            {
                errors ? 
                errors.map((err, index) => <p style={{color: 'red'}} key={index}>{err}</p>)
                : ""
            }
            <form onSubmit={loginSubmitHandler}>
                <p>Email:</p>
                <input type="email" name="email" onChange={e => loginChangeHandler(e)}/>
                <p>Password:</p>
                <input type="password" name="password" onChange={e => loginChangeHandler(e)}/>
                <button type="submit">Register</button>
            </form>
            <button>Click to show the registration form (or use a toggle switch)</button>

            <h5>Users can post comments, code snippets, and more!</h5>
        </div>
    )
}

export default LoginRegistration
