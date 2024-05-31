import { useEffect, useState } from "react";
import EducationDetailsContext from "./EducationDetailsContext";
import UserEducationDetailsService from '../service/UserEducationDetailsService'
import { doLogOut } from "../auth/AuthenticatioHandler";


const EducationDetailsState = (props) =>{
    const [educationData, setEducationData] = useState([]);

    const addEducation = () => {
        const newEntry = { id: 0, userId:0, course: '', university: '', courseStartedDate: Date, courseEndedDate: Date, isPresent: 0 };
        setEducationData([...educationData, newEntry]);
    };

    const removeEducation = (index) => {
        const updatedEducationData = educationData.filter((_, i) => i !== index);
        setEducationData(updatedEducationData);
    };

    const handleFieldChange = (index, field, value) => {
        const updatedEducationData = [...educationData];
        updatedEducationData[index][field] = value;
        if(field == "isPresent"){
            value = value ? 1: 0;
            if(value){
                updatedEducationData[index]['courseEndedDate'] = '';
            }
        }
        setEducationData(updatedEducationData);
    };

    useEffect(() =>{
        UserEducationDetailsService.getAll().then((resp) => {
            if(resp.data){
                console.log(resp.data);
                setEducationData(resp.data);
            }
        }).catch((error) => {
            if(error.status && error.status === 401){
                doLogOut();
            }
        });
    
    }, []);



    return(
        <EducationDetailsContext.Provider value={{educationData, addEducation, removeEducation, handleFieldChange}}>
            {props.children}
        </EducationDetailsContext.Provider>
    );

}

export default EducationDetailsState;