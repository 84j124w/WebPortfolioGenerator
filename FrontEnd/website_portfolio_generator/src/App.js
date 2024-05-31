import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserForm from './pages/UserForm';
import TemplateList from './pages/TemplateList';
import EditTemplate from './pages/EditTemplate';
import Login from './pages/Login';
import Register from './pages/Register';
import BasicDetailsState from './context/BasicDetailsState';
import EducationDetailsState from './context/EducationDetailsState';
import ExperienceDetailsState from './context/ExperienceDetailsState';
import ProjectDetailsState from './context/ProjectDetailsState';
import PrivateRoute from './components/PrivateRoute';

function App() {


  return (
    <ProjectDetailsState>
      <ExperienceDetailsState>
        <EducationDetailsState>
          <BasicDetailsState>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />} />
                <Route path='/user' element={<PrivateRoute />}>
                  <Route path="home" element={<Home />}></Route>
                  <Route path='user-form' element={<UserForm />} />
                  <Route path='template-list' element={<TemplateList />} />
                  <Route path='edit-template' element={<EditTemplate />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </BasicDetailsState>
        </EducationDetailsState>
      </ExperienceDetailsState>
    </ProjectDetailsState>
  );
}

export default App;
