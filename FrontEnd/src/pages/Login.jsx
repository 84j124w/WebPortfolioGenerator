import { Box, Button, FormControl, FormGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserService from '../service/UserService';

function Login() {
    const [user, setUser] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        //dispatch({ type: 'SET_BASIC_DETAILS', payload: { ...formData, [id]: value } });
    };

    const loginHandler = () =>{
        UserService.loginUser(formData).then(response => {
            setUser(response.data);
            console.log(response.data);
            navigate("/home");
        })
        .catch(error => {
            console.error("There was an error while registering!", error);
        });
    }
  return (
    <div className='register-form'>
            <Box>
                <FormGroup> 
                    <FormControl sx={{ m: 1 }}>
                        <TextField
                            autoComplete='off'
                            className="input-field"
                            id="email"
                            label="Email"
                            variant="outlined"
                            value={formData.email}
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