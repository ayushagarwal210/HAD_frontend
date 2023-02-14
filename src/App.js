import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_main from './DoctorComponents/Navbar_main';
import Dashboard from './DoctorComponents/Dashboard';
import Prescription from './DoctorComponents/Prescription';
import Login from './DoctorComponents/Login';
import Sidebar from './DoctorComponents/Sidebar';

function App() {
  return (
    <>
    <Navbar_main/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/prescription" element={<Prescription />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
