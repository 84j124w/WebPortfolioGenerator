import { Box, Button, FormControl, FormGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserService from '../service/UserService';
import './Login.css'
import { doLogin } from '../auth/AuthenticatioHandler';

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const loginHandler = () =>{
        if(formData.username === '' || formData.password === ''){
            alert("Username, password is required!!!")
        }
        else{
            UserService.loginUser(formData).then(response => {
                doLogin(response.data);
                console.log(response);
                navigate("/user/home");
            })
            .catch(error => {
                console.error("There was an error while registering!", error);
                if(error.response.status == 401){
                    alert("Invalid Username or Password!")
                }
            });
        }
        
    }
  return (
    <div className='login-form'>
            <Box>
                <FormGroup> 
                    <FormControl sx={{ m: 1 }}>
                        <TextField
                            autoComplete='off'
                            className="input-field"
                            id="username"
                            label="Username"
                            variant="outlined"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1 }}>
                        <TextField
                            type='password'
                            autoComplete='off'
                            className="input-field"
                            id="password"
                            label="Password"
                            variant="outlined"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1 }} >
                        <div className="btns-container">
                             <Button onClick={loginHandler} variant='contained' color='secondary'> Login </Button>
                             <Link to={"/register"}>Register Now</Link>
                        </div>
                    </FormControl>

                </FormGroup>
            </Box>
        </div>
  )
}

export default Login