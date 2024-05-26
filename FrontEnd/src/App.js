import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserForm from './pages/UserForm';
import { PortfolioProvider } from './utils/PortfolioContext';
import TemplateList from './pages/TemplateList';
import EditTemplate from './pages/EditTemplate';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {


  return (
    <BrowserRouter>
    <PortfolioProvider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path='/user-form' element={<UserForm />} />
        <Route path='/template-list' element={<TemplateList />} />
        <Route path='/edit-template' element={<EditTemplate />} />
      </Routes>
      </PortfolioProvider>
    </BrowserRouter>
  );
}

export default App;
