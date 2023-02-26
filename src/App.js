import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./DoctorComponents/Dashboard";
import Prescription from "./DoctorComponents/Prescription";
import Home from "./Components/Home";
import PateintLogin from "./PatientComponents/PateintLogin";
import PateintHomePage from "./PatientComponents/PatientHomePage";
import PatientRegistration from "./PatientComponents/PatientRegistration";
import DoctorLogin from "./DoctorComponents/DoctorLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/login" element={<DoctorLogin />} />
          <Route path="/pateint" element={<PateintHomePage />} />
          <Route path="/pateint/login" element={<PateintLogin />} />
          <Route
            path="/pateint/registration"
            element={<PatientRegistration />}
          />
          <Route path="/doctor" element={<Dashboard />} />
          <Route path="/doctor/prescription" element={<Prescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
