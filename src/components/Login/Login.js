//----------Import Dependencies-----------
import React,{useState, useEffect} from 'react'
import { Container, TextField, Button } from '@mui/material'
import { getTokenURL } from '../../constants'
import { useDispatch } from 'react-redux'
import {logIn} from '../../store/auth'
import { NavLink, useHistory } from "react-router-dom";

import './Login.css'

export default function LoginForm(props) {

    const userType = props.location.type

    const dispatch = useDispatch()
    const history = useHistory()


    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const getToken = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": email,
        "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch(getTokenURL, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.access){
                localStorage.setItem('accessToken' , result.access)
                localStorage.setItem('userType' , result.user_type)
                dispatch(logIn({accessToken: result.access, userType: result.user_type}))
                history.push('/')
            }
        })
        .catch(error => console.log('error', error));        
    }

    

    useEffect(()=>{
        console.log(email, password)
    },[email,password])

    return (
        <Container>
            <h1 className="centerText" style={{textTransform: 'capitalize'}}>{props.location.type} Login</h1>
            <div className="loginFormParent">
                <div className="centerDiv loginFormFields">
                    <TextField
                     onChange={(e)=>{setEmail(e.target.value)}}
                     id="outlined-basic" label="Email ID" variant="outlined" fullWidth/>
                </div>
                <div className="centerDiv loginFormFields">
                    <TextField
                    onChange={(e)=>{setPassword(e.target.value)}}
                    id="outlined-basic" label="Password" variant="outlined" fullWidth/>
                </div>
                <div className="centerDiv loginButton">
                    <Button variant="contained" className="loginButton" onClick={()=>{getToken()}}>
                        Login
                    </Button>
                </div>
                <NavLink to={{pathname: '/register', type: props.location.type}}>
                    <div className="centerText" style={{marginTop:"5px", color: "darkblue"}}>
                        Don't have an account? Register
                    </div>
                </NavLink>
            </div>
        </Container>
    )
}
