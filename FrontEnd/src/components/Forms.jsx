import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material"
import './Forms.css'
import { DateField } from "@mui/x-date-pickers"
import { useState } from "react"
import { usePortfolio } from "../utils/PortfolioContext";

export const BasicDetailsForm = () => {

    const {dispatch} = usePortfolio();

    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      mobile: '',
      softSkills: '',
      technicalSkills: '',
      address: '',
      tagLine: '',
      summary: '',
    });
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
      dispatch({type: 'SET_BASIC_DETAILS', payload: {...formData, [id]: value}});
    };

    
  
    return (
      <FormGroup>
         <FormControl sx={{ m: 1, width: 500 }}>
          <TextField
            className="input-field"
            id="fullName"
            label="Full Name"
            variant="outlined"
            value={formData.fullName}
            onChange={handleChange}
          />
          </FormControl>
           <FormControl sx={{ m: 1, width: 500 }}>
          <TextField
            className="input-field"
            id="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
          </FormControl>
           <FormControl sx={{ m: 1, width: 500 }}>
          <TextField
            className="input-field"
            id="mobile"
            label="Mobile"
            variant="outlined"
            value={formData.mobile}
            onChange={handleChange}
          />
          </FormControl>
           <FormControl sx={{ m: 1, width: 500 }}>
          <TextField
            className="input-field"
            id="softSkills"
            label="Soft Skills"
            multiline
            placeholder="Soft Skills,"
            maxRows={4}
            variant="outlined"
            value={formData.softSkills}
            onChange={handleChange}
          />
          </FormControl>
           <FormControl sx={{ m: 1, width: 500 }}>
          <TextField
            className="input-field"
            id="technicalSkills"
            label="Technical Skills"
            multiline
            placeholder="Technical Skills,"
            maxRows={4}
            variant="outlined"
            value={formData.technicalSkills}
            onChange={handleChange}
          />
          </FormControl>
           <FormControl sx={{ m: 1, width: 500 }}>
          <TextField
            className="input-field"
            id="address"
            label="Address"
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
          />
          </FormControl>
           <FormControl sx={{ m: 1, width: 500 }}>
          <TextField
            className="input-field"
            id="tagLine"
            label="Your Tag Line"
            variant="outlined"
            value={formData.tagLine}
            onChange={handleChange}
          />
          </FormControl>
           <FormControl sx={{ m: 1, width: 500 }}>
          <TextField
            className="input-field"
            id="summary"
            label="Summary"
            variant="outlined"
            value={formData.summary}
            onChange={handleChange}
          />
        </FormControl>
      </FormGroup>
    );
  };

  export const EducationDetailsForm = () => {
    const {  dispatch } = usePortfolio();
    const [formData, setFormData] = useState([]);
  
    const handleFieldChange = (index, field, value) => {
      const updatedFormData = [...formData];
      updatedFormData[index][field] = value;
      setFormData(updatedFormData);
      dispatch({ type: 'SET_EDUCATION_DETAILS', payload: updatedFormData });
    };
  
    const addEducation = () => {
      const newEntry = { course: '', university: '', startedDate: '', endedDate: '', present: false };
      setFormData([...formData, newEntry]);
    };
  
    const removeEducation = (index) => {
      const updatedFormData = formData.filter((_, i) => i !== index);
      setFormData(updatedFormData);
      dispatch({ type: 'SET_EDUCATION_DETAILS', payload: updatedFormData });
    };
  
    const courses = ['BCA', 'MCA', 'BE', 'ME', 'B.Tech', 'M.Tech'];
  
    return (
      <>
        {formData.map((entry, index) => (
          <FormGroup key={index}>
            <FormControl sx={{ m: 1, width: 500 }}>
              <InputLabel id={`select-course-label-${index}`}>Select Course</InputLabel>
              <Select
                labelId={`select-course-label-${index}`}
                id={`select-course-${index}`}
                value={entry.course}
                onChange={(e) => handleFieldChange(index, 'course', e.target.value)}
                input={<OutlinedInput label="Select Course" />}
                className="input-field"
              >
                {courses.map((course) => (
                  <MenuItem key={course} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`university-${index}`}
                label="University"
                variant="outlined"
                value={entry.university}
                onChange={(e) => handleFieldChange(index, 'university', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`course-started-${index}`}
                label="Course Started"
                variant="outlined"
                value={entry.startedDate}
                onChange={(e) => handleFieldChange(index, 'startedDate', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            {!entry.present && (
              <FormControl sx={{ m: 1, width: 500 }}>
                <TextField
                  id={`course-ended-${index}`}
                  label="Course Ended"
                  variant="outlined"
                  value={entry.endedDate}
                  onChange={(e) => handleFieldChange(index, 'endedDate', e.target.value)}
                  className="input-field"
                />
              </FormControl>
            )}
  
            <FormControl sx={{ m: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={entry.present}
                    onChange={() => handleFieldChange(index, 'present', !entry.present)}
                  />
                }
                label="Present here"
              />
            </FormControl>
  
            <Button sx={{ m: 1, width: 200 }} variant="outlined" color="secondary" onClick={() => removeEducation(index)}>
              Remove
            </Button>
          </FormGroup>
        ))}
  
        <Button sx={{ m: 1, width: 200 }} variant="contained" color="primary" onClick={addEducation}>
          Add Education
        </Button>
      </>
    );
  };

  export const ExperienceDetailsForm = () => {
    const { dispatch } = usePortfolio();
    const [formData, setFormData] = useState([]);
  
    const handleFieldChange = (index, field, value) => {
      const updatedFormData = [...formData];
      updatedFormData[index][field] = value;
      setFormData(updatedFormData);
      dispatch({ type: 'SET_EXPERIENCE_DETAILS', payload: updatedFormData });
    };
  
    const addExperience = () => {
      const newEntry = { companyName: '', workingStartedDate: '', workingEndedDate: '', present: false };
      setFormData([...formData, newEntry]);
    };
  
    const removeExperience = (index) => {
      const updatedFormData = formData.filter((_, i) => i !== index);
      setFormData(updatedFormData);
      dispatch({ type: 'SET_EXPERIENCE_DETAILS', payload: updatedFormData });
    };
  
    return (
      <>
        {formData.map((entry, index) => (
          <FormGroup key={index}>
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`company-name-${index}`}
                label="Company"
                variant="outlined"
                value={entry.companyName}
                onChange={(e) => handleFieldChange(index, 'companyName', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`working-started-date-${index}`}
                label="Working Started"
                variant="outlined"
                value={entry.workingStartedDate}
                onChange={(e) => handleFieldChange(index, 'workingStartedDate', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            {!entry.present && (
              <FormControl sx={{ m: 1, width: 500 }}>
                <TextField
                  id={`working-ended-date-${index}`}
                  label="Working Ended"
                  variant="outlined"
                  value={entry.workingEndedDate}
                  onChange={(e) => handleFieldChange(index, 'workingEndedDate', e.target.value)}
                  className="input-field"
                />
              </FormControl>
            )}
  
            <FormControl sx={{ m: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={entry.present}
                    onChange={() => handleFieldChange(index, 'present', !entry.present)}
                  />
                }
                label="Present here"
              />
            </FormControl>
  
            <Button sx={{ m: 1, width: 200 }} variant="outlined" color="secondary" onClick={() => removeExperience(index)}>
              Remove
            </Button>
          </FormGroup>
        ))}
  
        <Button sx={{ m: 1, width: 200 }} variant="contained" color="primary" onClick={addExperience}>
          Add Experience
        </Button>
      </>
    );
  };

  export const ProjectDetailsForm = () => {
    const { state, dispatch } = usePortfolio();
    const [formData, setFormData] = useState([]);
  
    const handleFieldChange = (index, field, value) => {
      const updatedFormData = [...formData];
      updatedFormData[index][field] = value;
      setFormData(updatedFormData);
      dispatch({ type: 'SET_PROJECT_DETAILS', payload: updatedFormData });
    };
  
    const addProject = () => {
      const newEntry = { title: '', description: '', link: '', technologies: '', startedWorkingDate: '', completionDate: '' };
      setFormData([...formData, newEntry]);
    };
  
    const removeProject = (index) => {
      const updatedFormData = formData.filter((_, i) => i !== index);
      setFormData(updatedFormData);
      dispatch({ type: 'SET_PROJECT_DETAILS', payload: updatedFormData });
    };
  
    return (
      <>
        {formData.map((entry, index) => (
          <FormGroup key={index}>
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`title-${index}`}
                label="Project Title"
                variant="outlined"
                value={entry.title}
                onChange={(e) => handleFieldChange(index, 'title', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`description-${index}`}
                label="Project Description"
                variant="outlined"
                multiline
                rows={4}
                value={entry.description}
                onChange={(e) => handleFieldChange(index, 'description', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`link-${index}`}
                label="Project Link"
                variant="outlined"
                value={entry.link}
                onChange={(e) => handleFieldChange(index, 'link', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`technologies-${index}`}
                label="Technologies Used"
                variant="outlined"
                value={entry.technologies}
                onChange={(e) => handleFieldChange(index, 'technologies', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`started-working-date-${index}`}
                label="Started Working Date"
                variant="outlined"
                value={entry.startedWorkingDate}
                onChange={(e) => handleFieldChange(index, 'startedWorkingDate', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`completion-date-${index}`}
                label="Completion Date"
                variant="outlined"
                value={entry.completionDate}
                onChange={(e) => handleFieldChange(index, 'completionDate', e.target.value)}
                className="input-field"
              />
            </FormControl>
  
            <Button sx={{ m: 1, width: 200 }} variant="outlined" color="secondary" onClick={() => removeProject(index)}>
              Remove
            </Button>
          </FormGroup>
        ))}
  
        <Button sx={{ m: 1, width: 200 }} variant="contained" color="primary" onClick={addProject}>
          Add Project
        </Button>
      </>
    );
  };
