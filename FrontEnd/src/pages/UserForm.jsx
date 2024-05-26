import React, { useEffect, useState } from 'react'
import './UserForm.css'
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import {BasicDetailsForm, EducationDetailsForm, ExperienceDetailsForm, ProjectDetailsForm} from '../components/Forms'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import UserBasicDetailService from '../service/UserBasicDetailService';
import { usePortfolio } from '../utils/PortfolioContext';

const steps = ['Basic Details', 'Education Details', 'Experience Details', 'Project Done'];

function UserForm() {
    const [userBasicDetailsData, setUserBasicDetailsData] = useState([]);

    const { state } = usePortfolio();
    const { basicDetails, educationDetails, experienceDetails, projectDetails } = state;
    

    useEffect(()=>{
        UserBasicDetailService.getAllUserBasicDetails().then(response => {
            setUserBasicDetailsData(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the data!", error);
        });
            
    },[])

    const [activeStep, setActiveStep] = React.useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if(activeStep === steps.length-1){
            saveUserData();
            navigate('/template-list');
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderSteps = () => {
        switch (activeStep) {
            case 0: return <BasicDetailsForm />;
            case 1: return <EducationDetailsForm />;
            case 2: return <ExperienceDetailsForm />;
            case 3: return <ProjectDetailsForm />;
            default: return null;
        }
    }

    const saveUserData = () =>{
        console.log(basicDetails,educationDetails, experienceDetails, projectDetails);

        //services created to communicate with backend bt due to time limitatinos
        //i was unable to implement logic here
    }

    return (
        <>
        <Navbar />
        <div className="progress-container">
            <Box >
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            <div className="form-container">
                                {renderSteps(activeStep)} {/*form here*/}
                            </div>
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
            </Box>
        </div>
        </>
    )
}

export default UserForm