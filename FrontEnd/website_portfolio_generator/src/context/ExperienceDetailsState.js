import { useEffect, useState } from "react";
import ExperienceDetailsContext from "./ExperienceDetailsContext";
import UserExperienceService from "../service/UserExperienceService";
import { doLogOut } from "../auth/AuthenticatioHandler";

const ExperienceDetailsState = (props) => {
  const [experienceData, setExperienceData] = useState([]);

  const addExperience = () => {
    const newEntry = { id: 0, userId: 0, companyName: '', workingStartedDate: Date, workingEndedDate: Date, isCurrentlyWorking: 0 };
    setExperienceData([...experienceData, newEntry]);
  };

  const removeExperience = (index) => {
    const updatedExperienceData = experienceData.filter((_, i) => i !== index);
    setExperienceData(updatedExperienceData);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedExperienceData = [...experienceData];
    if(field == "isCurrentlyWorking"){
      value = value ? 1: 0;
      if(value){
        updatedExperienceData[index]['workingEndedDate'] = '';
      }
    }
    updatedExperienceData[index][field] = value;
    
    setExperienceData(updatedExperienceData);
  };

  useEffect(() => {
    UserExperienceService.getAll().then((res) => {
      if (res.data) {
        setExperienceData(res.data);
      }
    }).catch((e) => {
      console.log(e);
      if (e.status && e.status === 401) {
        doLogOut();
      }
    });
  }, []);

  return (
    <ExperienceDetailsContext.Provider value={{ experienceData, addExperience, removeExperience, handleFieldChange }}>
      {props.children}
    </ExperienceDetailsContext.Provider>
  );

}

export default ExperienceDetailsState;