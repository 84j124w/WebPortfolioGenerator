import { useEffect, useState } from "react";
import ProjectDetailsContext from "./ProjectDetailsContext";
import UserProjectService from "../service/UserProjectService";
import { doLogOut } from "../auth/AuthenticatioHandler";


const ProjectDetailsState = (props) => {
    const [projectData, setProjectData] = useState([]);

    const addProject = () => {
        const newEntry = {id:0, userId:0,  title: '', description: '', technologies: '', workingStartedDate: Date, workingEndedDate: Date };
        setProjectData([...projectData, newEntry]);
    };

    const removeProject = (index) => {
        const updatedProjectData = projectData.filter((_, i) => i !== index);
        setProjectData(updatedProjectData);
    };

    const handleFieldChange = (index, field, value) => {
        const updatedProjectData = [...projectData];
        updatedProjectData[index][field] = value;
        setProjectData(updatedProjectData);
      };


      useEffect(()=>{
        UserProjectService.getAll().then((res) =>{
          if(res.data){
            setProjectData(res.data);
          }
        }).catch((e) => {
          console.log(e);
          if(e.status && e.status === 401){
            doLogOut();
          }
        });
      },[]);

    return (
        <ProjectDetailsContext.Provider value={{projectData, addProject, removeProject, handleFieldChange}}>
            {props.children}
        </ProjectDetailsContext.Provider>
    );
}

export default ProjectDetailsState;