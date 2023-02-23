import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar_main from "./Navbar_main";
import Prescription from "./Prescription";
export default function Doctor(){
    return(  
    <div >
      {<Navbar_main/>}
    </div>
    )
}