import React from "react";
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div className="m-2 text-center container " >
        <Button variant="outline-success" href="/doctor/login" className="m-2">Doctor Login</Button>
        <Button variant="outline-warning" href="/pateint/registration" className="m-2">Pateint Registration</Button>
        <Button variant="outline-info" href="/pateint/login" className="m-2">Pateint Login</Button>
        </div>
        );
    
}
export default Home;