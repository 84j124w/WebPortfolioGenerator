import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import './EditTemplate.css';
import { Button } from '@mui/material';


function EditTemplate() {
    const { state } = useLocation();
    const templateIndex = state?.templateIndex ?? 0;

    const editorRef = useRef(null);

    const templs = [`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>

        <style> 

        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
    }
    
    header {
        background: #333;
        color: #fff;
        padding: 1rem 0;
        text-align: center;
    }
    
    nav ul {
        list-style: none;
    }
    
    nav ul li {
        display: inline;
        margin: 0 10px;
    }
    
    nav ul li a {
        color: #fff;
        text-decoration: none;
    }
    
    header h1 {
        margin: 10px 0;
    }
    
    section {
        padding: 2rem 0;
        text-align: center;
    }
    
    #about {
        background: #f4f4f4;
    }
    
    #projects {
        background: #fff;
    }
    
    .project {
        margin: 1rem 0;
    }
    
    #contact {
        background: #f4f4f4;
    }
    
    footer {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 1rem 0;
       
        bottom: 0;
    }
    
        </style>

    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <h1>John Doe</h1>
            <p>Web Developer</p>
        </header>
    
        <section id="about">
            <h2>About Me</h2>
            <p>Hello! I'm John, a web developer with a passion for creating beautiful and functional websites.</p>
        </section>
    
        <section id="projects">
            <h2>Projects</h2>
            <div class="project">
                <h3>Project 1</h3>
                <p>Description of project 1.</p>
            </div>
            <div class="project">
                <h3>Project 2</h3>
                <p>Description of project 2.</p>
            </div>
        </section>
    
        <section id="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:john@example.com">john@example.com</a></p>
        </section>
    
        <footer>
            <p>&copy; 2024 John Doe</p>
        </footer>
    </body>
    </html>
    `];

    const [htmlContent, setHtmlContent] = useState(templs[templateIndex]);
    const navigate = useNavigate();


    const handleInput = () => {
        if (editorRef.current) {
            const updatedContent = editorRef.current.innerHTML;
            const parser = new DOMParser();
            const doc = parser.parseFromString(templs[templateIndex], 'text/html');
            doc.body.innerHTML = updatedContent;
            setHtmlContent(doc.documentElement.outerHTML);
        }
    };

    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value);
    };

    const downlodBtnClicked = () => {
        // Create a Blob object with the HTML content
        const blob = new Blob([htmlContent], { type: 'text/html' });

        // Create a temporary URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a temporary <a> element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'portfolio.html'; // Specify the filename for the downloaded file

        // Append the <a> element to the document body and trigger a click event
        document.body.appendChild(a);
        a.click();

        // Remove the temporary <a> element and URL object
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    const gotoTemplateListClicked = () => {
        navigate('/template-list');
    }

    return (
        <>
            <Navbar />

            {/* <EditTemplateSidebar /> */}

            <div className="go-back">
                <Button sx={{m:1}} onClick={gotoTemplateListClicked} className='Template List' variant='contained' color='success' >Back</Button>
            </div>

            <div className='editor-container'>
                <div className="btn-editro-container">

                    <div className="toolbar">
                        <button onClick={() => execCommand('bold')}><b>B</b></button>
                        <button onClick={() => execCommand('italic')}><i>I</i></button>
                        <button onClick={() => execCommand('underline')}><u>U</u></button>
                        <button onClick={() => execCommand('undo')}>Undo</button>
                        <button onClick={() => execCommand('redo')}>Redo</button>
                        <button onClick={() => execCommand('formatBlock', 'H1')}>H1</button>
                        <button onClick={() => execCommand('formatBlock', 'H2')}>H2</button>
                        <button onClick={() => execCommand('insertOrderedList')}>OL</button>
                        <button onClick={() => execCommand('insertUnorderedList')}>UL</button>
                        <button onClick={() => execCommand('insertImage', prompt('Enter image URL'))}>Image</button>
                        <button onClick={() => execCommand('foreColor', prompt('Enter text color'))}>Color</button>
                        <button onClick={() => execCommand('fontName', prompt('Enter font name'))}>Font</button>
                    </div>
                    <Button onClick={downlodBtnClicked} className='download-btn' variant='contained' color='info' >Downlod Source Code</Button>
                </div>


                <div
                    className="editor"
                    contentEditable
                    ref={editorRef}
                    onInput={handleInput}
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                ></div>
            </div>
        </>
    )
}

export default EditTemplate