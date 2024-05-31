import React, { useContext, useState } from 'react'
import './UserForm.css'
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { BasicDetailsForm, EducationDetailsForm, ExperienceDetailsForm, ProjectDetailsForm } from '../components/Forms'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BasicDetailsContext from '../context/BasicDetailsContext';
import EducationDetailsContext from '../context/EducationDetailsContext';
import ExperienceDetailsContext from '../context/ExperienceDetailsContext';
import ProjectDetailsContext from '../context/ProjectDetailsContext';
import UserBasicDetailService from '../service/UserBasicDetailService';
import UserEducationDetailsService from '../service/UserEducationDetailsService';
import UserExperienceService from '../service/UserExperienceService';
import UserProjectService from '../service/UserProjectService';
import { getLoggedInUser } from '../auth/AuthenticatioHandler';

const steps = ['Basic Details', 'Education Details', 'Experience Details', 'Project Done'];

function UserForm() {
    const { basicDetails } = useContext(BasicDetailsContext);
    const { educationData } = useContext(EducationDetailsContext);
    const { experienceData } = useContext(ExperienceDetailsContext);
    const { projectData } = useContext(ProjectDetailsContext);

    const [activeStep, setActiveStep] = React.useState(0);
    const navigate = useNavigate();


    const handleNext = () => {
        if (activeStep === steps.length - 1) {
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

    const saveUserData = () => {
        const user = getLoggedInUser();
        var userId = 0;
        if(user !== null){
            userId = user.id;
        }

        basicDetails.userId = userId;
        educationData.userId = userId;
        experienceData.userId = userId;
        projectData.userId = userId;


        UserBasicDetailService.saveBasicUserDetails(basicDetails).then((resp) => console.log(resp)).catch((e) => console.log("Error while saving Basic Detail: ", e));
        
        if(educationData.length > 0)
            UserEducationDetailsService.save(educationData).then((resp) => console.log(resp)).catch((e) => console.log("Error while saving Education Data: ", e));
        if(experienceData.length > 0)
            UserExperienceService.save(experienceData).then((resp) => console.log(resp)).catch((e) => console.log("Error while saving Experience Data: ", e));
        if(projectData.length > 0)
            UserProjectService.save(projectData).then((resp) => console.log(resp)).catch((e) => console.log("Error while saving Experience Data: ", e));

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