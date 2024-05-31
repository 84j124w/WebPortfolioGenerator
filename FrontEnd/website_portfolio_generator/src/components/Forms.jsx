import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material"
import './Forms.css'
import { useContext } from "react"
import BasicDetailsContext from "../context/BasicDetailsContext";
import EducationDetailsContext from "../context/EducationDetailsContext";
import ExperienceDetailsContext from "../context/ExperienceDetailsContext";
import ProjectDetailsContext from "../context/ProjectDetailsContext";

export const BasicDetailsForm = () => {

  const { basicDetails, handleChange } = useContext(BasicDetailsContext);

  return (
    <FormGroup>
      <input type="hidden" value={basicDetails.id} />
      <FormControl sx={{ m: 1, width: 500 }}>
        <TextField
          className="input-field"
          id="name"
          label="Full Name"
          variant="outlined"
          value={basicDetails.name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: 500 }}>
        <TextField
          className="input-field"
          id="email"
          label="Email"
          variant="outlined"
          value={basicDetails.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: 500 }}>
        <TextField
          className="input-field"
          id="mobile"
          label="Mobile"
          variant="outlined"
          value={basicDetails.mobile}
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
          value={basicDetails.softSkills}
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
          value={basicDetails.technicalSkills}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: 500 }}>
        <TextField
          className="input-field"
          id="address"
          label="Address"
          variant="outlined"
          value={basicDetails.address}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: 500 }}>
        <TextField
          className="input-field"
          id="tagLine"
          label="Your Tag Line"
          variant="outlined"
          value={basicDetails.tagLine}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: 500 }}>
        <TextField
          className="input-field"
          id="summary"
          label="Summary"
          variant="outlined"
          value={basicDetails.summary}
          onChange={handleChange}
        />
      </FormControl>
    </FormGroup>
  );
};

export const EducationDetailsForm = () => {
  const { educationData, addEducation, removeEducation, handleFieldChange } = useContext(EducationDetailsContext);
  const courses = ['BCA', 'MCA', 'BE', 'ME', 'B.Tech', 'M.Tech'];

  return (
    <>
      {educationData.map((entry, index) => (
        <FormGroup key={index}>
          <input type="hidden" id="id" value={entry.id} />
          <input type="hidden" id="user_id" value={entry.userId} />
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
              value={entry.courseStartedDate}
              type="date"
              onChange={(e) => handleFieldChange(index, 'courseStartedDate', e.target.value)}
              className="input-field"
            />
          </FormControl>

          {!entry.isPresent && (
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`course-ended-${index}`}
                label="Course Ended"
                variant="outlined"
                type="date"
                value={entry.courseEndedDate}
                onChange={(e) => handleFieldChange(index, 'courseEndedDate', e.target.value)}
                className="input-field"
              />
            </FormControl>
          )}

          <FormControl sx={{ m: 1, width: 150 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={entry.isPresent}
                  onChange={() => handleFieldChange(index, 'isPresent', !entry.isPresent)}
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
  const { experienceData, addExperience, removeExperience, handleFieldChange } = useContext(ExperienceDetailsContext);

  return (
    <>
      {experienceData.map((entry, index) => (
        <FormGroup key={index}>
          <input type="hidden" id="id" value={entry.id} />
          <input type="hidden" id="user_id" value={entry.userId} />
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
              type="date"
              value={entry.workingStartedDate}
              onChange={(e) => handleFieldChange(index, 'workingStartedDate', e.target.value)}
              className="input-field"
            />
          </FormControl>

          {!entry.isCurrentlyWorking && (
            <FormControl sx={{ m: 1, width: 500 }}>
              <TextField
                id={`working-ended-date-${index}`}
                label="Working Ended"
                variant="outlined"
                type="date"
                value={entry.workingEndedDate}
                onChange={(e) => handleFieldChange(index, 'workingEndedDate', e.target.value)}
                className="input-field"
              />
            </FormControl>
          )}

          <FormControl sx={{ m: 1, width: 150 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={entry.isCurrentlyWorking}
                  onChange={() => handleFieldChange(index, 'isCurrentlyWorking', !entry.isCurrentlyWorking)}
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
  const { projectData, addProject, removeProject, handleFieldChange } = useContext(ProjectDetailsContext);
  return (
    <>
      {projectData.map((entry, index) => (
        <FormGroup key={index}>
          <input type="hidden" id="id" value={entry.id} />
          <input type="hidden" id="user_id" value={entry.userId} />
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
              id={`working-started-date-${index}`}
              label="Started Working Date"
              variant="outlined"
              type="date"
              value={entry.workingStartedDate}
              onChange={(e) => handleFieldChange(index, 'workingStartedDate', e.target.value)}
              className="input-field"
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: 500 }}>
            <TextField
              id={`working-ended-date-${index}`}
              label="Completion Date"
              variant="outlined"
              type="date"
              value={entry.workingEndedDate}
              onChange={(e) => handleFieldChange(index, 'workingEndedDate', e.target.value)}
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
