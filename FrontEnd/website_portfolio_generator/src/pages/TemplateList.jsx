import { Box, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useContext, useState } from 'react'
import './TemplateList.css'
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import ProjectDetailsContext from '../context/ProjectDetailsContext';
import BasicDetailsContext from '../context/BasicDetailsContext';

function TemplateList() {
  const { basicDetails } = useContext(BasicDetailsContext);
  const { projectDetails } = useContext(ProjectDetailsContext);
  const navigate = useNavigate();

  const temps = [`
    <div class="portfolio">
    <header>
      <h1>${basicDetails.fullName}'s Portfolio</h1>
      <p>${basicDetails.tagLine}</p>
      <style>
        /* CSS Code */
        .portfolio {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        
        header {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .projects {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .project {
          background-color: #fff;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
        
        .project h2 {
          margin-bottom: 5px;
        }
        
        .project p {
          margin-bottom: 10px;
        }
        
        .project a {
          display: block;
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          text-align: center;
          text-decoration: none;
          border-radius: 3px;
        }
        
        footer {
          text-align: center;
          margin-top: 20px;
        }
      </style>
    </header>
    ${projectDetails && projectDetails.title && <section class="projects">
      ${projectDetails.map((project, index) => `
            <div key=${index} class="project">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `).join('')}
    </section>}
    
    
    <footer>
      <p>Contact: ${basicDetails.email}</p>
    </footer>
  </div>
 `];

  const [templates, setTemplates] = useState(temps);
  const templs = ['Mockito Web', 'JUNIT Web', 'Integration Web'];

  const [previewOpen, setPreviewOpen] = useState(false);
  const [templateIndex, setTemplateIndex] = useState(0);

  const handlePreviewOpen = (index) => {
    setTemplateIndex(index);
    setPreviewOpen(true);
  }

  const handlePreviewClose = () => {
    setPreviewOpen(false)
  }

  const selectHandler = (index) => {

    setTemplateIndex(index);
    navigate('/edit-template', { state: { templateIndex: index } })
  }

  return (
    <>
      <Navbar />
      <Link to={"/user-form"} > <Button sx={{ m: 1, width: 200 }} variant="outlined" color='secondary' >Back</Button></Link>
      <h1 className='select-title'>Select Templates</h1>
      <div class="template-container">
        {templs.map((temp, index) => {
          return (
            <Box
              key={index}
              // height={200}
              width={200}
              my={4}
              // display="flex"
              // alignItems="end"
              // justifyContent="center"
              gap={4}
              p={2}
              sx={{ border: '2px solid grey' }}
            >
              <div className='box-body'>
                {temp}
              </div>
              <div className='box-footer-btns'>
                <Button sx={{ m: 1, width: 100 }} variant='outlined' color='success' onClick={() => handlePreviewOpen(index)}>Preview </Button>
                <Button sx={{ m: 1, width: 100 }} variant='outlined' color='info' onClick={() => selectHandler(index)}>Select </Button>
              </div>
            </Box>
          )
        })}

        <Dialog fullScreen open={previewOpen}>
          <Button sx={{ m: 1, width: 50 }} variant="contained" color='info' onClick={handlePreviewClose}>
            Close
          </Button>
          <DialogTitle>{templs[templateIndex]}</DialogTitle>
          <DialogContent>
            <div dangerouslySetInnerHTML={{ __html: templates[templateIndex] }}>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default TemplateList