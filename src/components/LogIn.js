import React, { Component } from 'react';
import '../style/common.css';
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/auth";


function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    // const referer = props.location.state.referer || '/';

    function postLogin() {
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/user/login',
            data: {
                email: userName,
                password: password,

            }
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }
    if (isLoggedIn) {
        return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
        <form>
            <div className="card">
                <div className="cardHeader">WELCOME</div>
                <div className="inputGroup">

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="sophie@example.com"
                        value={userName}
                        onChange={e => {
                            setUserName(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*()]).{8,}'
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button type="submit" value="Submit" onClick={postLogin}>Sign In</button>
                </div>
            </div>
        </form>
    )
}


export default Login;