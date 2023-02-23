import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar_main from './DoctorComponents/Navbar_main';
import Dashboard from './DoctorComponents/Dashboard';
import Prescription from './DoctorComponents/Prescription';
import Login from './DoctorComponents/Login';
import Sidebar from './DoctorComponents/Sidebar';
import Home from './Components/Home';
import PateintLogin from './PatientComponents/PateintLogin';
import Registration from './PatientComponents/Registration';

function App() {
  return (
    <div >
      <Navbar_main/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/doctor/login" element={<Login />}/>
        <Route path="/pateint/login" element={<PateintLogin />}/>
        <Route path="/pateint/registration" element={<Registration />}/>
        <Route path="/doctor" element={<Dashboard />}/>
        <Route path="/doctor/prescription" element={<Prescription />} />
      </Routes>
    </BrowserRouter>
        
    </div>
  );
}

export default App;
