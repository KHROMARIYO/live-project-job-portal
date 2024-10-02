import { HashRouter, Routes, Route, Link } from "react-router-dom";

import ManageProfile from "./myprofile";
import Education from "./education";
import Skill from "./skill";
import Experience from "./experience";
import Job from"./job";


const InboxModule = () =>{
    return(
        <HashRouter>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand"> <i className="fa fa-users fa-lg text-warning"></i> EasyToHire </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto">
                        
                        <li className="nav-item me-4">
                            <Link className="nav-link active" to="/"><i className="fa fa-suitcase"></i> Jobs </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active" to="/basic"><i className="fa fa-user"></i> My Basic </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active" to="/education"><i className="fa fa-graduation-cap"></i> Education </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active" to="/skill"><i className="fa fa-edit"></i> Skills </Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link active" to="/experience"><i className="fa fa-atom"></i> Experience </Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link text-warning" onClick={logout}>
                                Welcome - { localStorage.getItem("fullname") } - Logout <i className="fa fa-power-off"></i>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav> 
            <Routes>
                <Route exact path="/" element={ <Job/> }/>       
                <Route exact path="/basic" element={ <ManageProfile/> }/>
                <Route exact path="/education" element={ <Education/> }/>
                <Route exact path="/skill" element={ <Skill/> }/>
                <Route exact path="/experience" element={ <Experience/> }/>
                

            </Routes>
        </HashRouter>
    )
}

export default InboxModule;


const logout = () =>{
    localStorage.clear();
    window.location.reload();
}