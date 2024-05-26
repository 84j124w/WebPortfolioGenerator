import { Box, Button, FormControl, FormGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import "./Register.css"
import UserService from '../service/UserService';
import { Link } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const checkPassword = (e) => {
        const cnPs = e.target.value;
        setConfirmPassword(cnPs);

        if (cnPs !== formData.password) {
            setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        if (id === 'password') {
            setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
        }
        //dispatch({ type: 'SET_BASIC_DETAILS', payload: { ...formData, [id]: value } });
    };


    const registerHandler = () =>{
        UserService.registerUser(formData).then(response => {
            setUser(response.data);
            console.log(response.data);
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
                            className="input-field"
                            id="fullName"
                            label="Full Name"
                            variant="outlined"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1 }}>
                        <TextField
                            
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
                            className="input-field"
                            type='password'
                            id="password"
                            label="Password"
                            variant="outlined"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1 }}>
                        <TextField
                            className="input-field"
                            type='password'
                            id="confirm-password"
                            label="Confirm Password"
                            variant="outlined"
                            value={confirmPassword}
                            onChange={(e) => checkPassword(e)}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1 }} >
                        <div className="btns-container">
                        <Button variant='contained' onClick={registerHandler} color='info'> Register </Button>
                            <Link to={"/login"}>  Login Now </Link>
                        </div>
                    </FormControl>

                </FormGroup>
            </Box>
        </div>
    )
}

export default Register