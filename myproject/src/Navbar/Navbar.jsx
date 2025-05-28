import React from 'react'
import './Navbar.css'
import ducatlogo from '../../public/ducatlogo.webp'
import Badge from '../../public/BAdge.webp'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
   
    <div className='mainnavbar w-100' >
    <nav className="navbar navbar-expand-xl ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={ducatlogo} alt="ducatlogo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/' >Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-auto-close="outside" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul className="dropdown-menu">
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" data-bs-toggle="dropdown" href="#">Diploma Courses + Integrated AI</a>
                  <ul className="dropdown-menu">
                    <li><Link to='/courses/diploma_in_cloud_computing_and_cyber_security' className="dropdown-item" >DIPLOMA IN CLOUD COMPUTING & CYBER SECURITY</Link></li>
                    <li><Link to='/courses/diploma_in_computer_networking,_cloud_computing_&_ai' className="dropdown-item">DIPLOMA IN COMPUTER NETWORKING, CLOUD COMPUTING & AI</Link></li>
                    <li><a href="#" className="dropdown-item">DIPLOMA IN FULL STACK WEB DEVELOPMENT</a></li>
                    <li><a href="#" className="dropdown-item">DIPLOMA IN DATA SCIENCE + AI</a></li>
                    <li><a href="#" className="dropdown-item">DIPLOMA IN MOTION GRAPHICS AND ANIMATION</a></li>
                  </ul>
              </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" data-bs-toggle="dropdown" href="#">School of AI</a>
              <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">MEAN STACK + GEN AI</a></li>
                    <li><a href="#" className="dropdown-item">ADVANCED EXCEL + GEN AI</a></li>
                    <li><a href="#" className="dropdown-item">WEB DEVELOPMENT + GEN AI</a></li>
                    <li><a href="#" className="dropdown-item">MOTION GRAPHIC PRO + GEN AI</a></li>
                    <li><a href="#" className="dropdown-item">MERN STACK + GEN AI</a></li>
                    <li><a href="#" className="dropdown-item">CYBER SECURITY + GEN AI</a></li>
                    <li><a href="#" className="dropdown-item">DOT NET FULL STACK + GEN AI</a></li>
                    <li><a href="#" className="dropdown-item">JAVA FULL STACK DEVELOPER + GEN AI</a></li>
                    <li><a href="#" className="dropdown-item">DIGITAL MARKETING + GEN AI</a></li>
                  </ul>
            </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" data-bs-toggle="dropdown" href="#">.NET</a>
              <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">.NET 4 MONTHS</a></li>
              <li><a href="#" className="dropdown-item">.NET CORE</a></li>
              </ul>
              </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" data-bs-toggle="dropdown" href="#">Python</a>
              <ul className="dropdown-menu">
               <li><a href="#" className="dropdown-item">PYTHON FULL STACK DEVELOPER COURSE</a></li>
               <li><a href="#" className="dropdown-item">AI USING PYTHON</a></li>
               <li><a href="#" className="dropdown-item">DATA ANALYTICS FOR PROFESSIONAL</a></li>
               <li><a href="#" className="dropdown-item">DATA SCIENCE PROFESSIONAL TRANING</a></li>
               <li><a href="#" className="dropdown-item">DATA ANALYTICS USING PYTHON</a></li>
              </ul>
            </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" data-bs-toggle="dropdown" href="#">Java</a>
              <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">JAVA EXPERT</a></li>
               <li><a href="#" className="dropdown-item">JAVA FULL STACK WITH DSA</a></li>
               <li><a href="#" className="dropdown-item">PRINGBOOT AND MICROSERVICES SECURITY WITH HIBERNATE & JPA</a></li>
               <li><a href="#" className="dropdown-item">DATA STRUCTURE AND ALGORITHMS USING JAVA</a></li>
              </ul>
            </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" data-bs-toggle="dropdown" href="#">Software Testing</a>
              <ul className="dropdown-menu">
                 <li><a href="#" className="dropdown-item">MANUAL TESTING</a></li>
                 <li><a href="#" className="dropdown-item">MANUAL + SELENIUM</a></li>
                 <li><a href="#" className="dropdown-item">JAVA WITH SELENIUM</a></li>
                 <li><a href="#" className="dropdown-item">PYTHON WITH SELENIUM</a></li>
                 <li><a href="#" className="dropdown-item">FULL STACK QA</a></li>
              </ul>
            </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" data-bs-toggle="dropdown" href="#">Web Designing Full stack Development</a>
              <ul className="dropdown-menu">
                 <li><a href="#" className="dropdown-item">MERN STACK</a></li>
                 <li><a href="#" className="dropdown-item">UI & UX</a></li>
                 <li><a href="#" className="dropdown-item">ANGULAR JS COURSE</a></li>
                 <li><a href="#" className="dropdown-item">REACT JS</a></li>
                 <li><a href="#" className="dropdown-item">PHP EXPERTS</a></li>
                 <li><a href="#" className="dropdown-item">WEB DESIGNING</a></li>
                 <li><a href="#" className="dropdown-item">PHP FULL STACK</a></li>
              </ul>
              </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">Programming Languages</a>
                <ul className='dropdown-menu'>
                <li><a href="#" className="dropdown-item">C WITH DATA STRUCTURE AND ALGORITHM</a></li>
                 <li><a href="#" className="dropdown-item">OBJECT ORIENTED DATA STRUCTURE AND ALGORITHM</a></li>
                 <li><a href="#" className="dropdown-item">DATA STRUCTURE</a></li>
                </ul>
            </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">Cloud Computing</a>
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">DEVOPS</a></li>
                <li><a href="#" className="dropdown-item">AWS TRAINING</a></li>
                <li><a href="#" className="dropdown-item">CLOUD COMPUTING</a></li>
                <li><a href="#" className="dropdown-item">DEVOPS MASTER COURSE</a></li>
                <li><a href="#" className="dropdown-item">AZ 900 FUNDAMENTAL</a></li>
                <li><a href="#" className="dropdown-item">MICROSOFT AZURE 203 (DATA FACTORY)</a></li>
                <li><a href="#" className="dropdown-item">AZ 104 AZURE ADMINISTRATOR</a></li>
              </ul>
              </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">Salesforce</a>
              <ul className="dropdown-menu">
               <li><a href="#" className="dropdown-item">SALESFORCE DEVELOPMENT</a></li>
                <li><a href="#" className="dropdown-item">SALESFORCE ADMIN</a></li>
              </ul>
            </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">CAD Traning</a>
              <ul className="dropdown-menu cad-submenu">
                <li><a href="#" className="dropdown-item">REVIT ARCHITECTURE</a></li>
                <li><a href="#" className="dropdown-item">DIPLOMA IN INTERIOR DESIGNING AT DUCAT INDIA</a></li>
                <li><a href="#" className="dropdown-item">CATIA</a></li>
                <li><a href="#" className="dropdown-item">PRO-E</a></li>
                <li><a href="#" className="dropdown-item">VRAY</a></li>
                <li><a href="#" className="dropdown-item">MEP</a></li>
                <li><a href="#" className="dropdown-item">STAD PRO</a></li>
                <li><a href="#" className="dropdown-item">3D STUDIO MAX</a></li>
                <li><a href="#" className="dropdown-item">UNIGRAPHICS</a></li>
                <li><a href="#" className="dropdown-item">ANSYS</a></li>
              </ul>
            </li>
            <li className="dropend">
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">Mobile Application Development</a>
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">ANDROID</a></li>
                <li><a href="#" className="dropdown-item">CORE JAVA WITH ANDROID AND COTLIN</a></li>
                <li><a href="#" className="dropdown-item">CORE JAVA WITH ANDROID AND FLUTTER</a></li>
                <li><a href="#" className="dropdown-item">FLUTTER</a></li>
              </ul>
            </li>
            <li className='dropend up-submenu'>
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">Network and Security</a>
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">CCNA</a></li>
                <li><a href="#" className="dropdown-item">CCNP CORE</a></li>
                <li><a href="#" className="dropdown-item">CCNP ADVANCE</a></li>
                <li><a href="#" className="dropdown-item">ETHICAL HACKINH WITH AI</a></li>
                <li><a href="#" className="dropdown-item">DIPLOMA IN COMPUTER NETWORKING & CYBER SECURITY (12 MONTHS)</a></li>
                <li><a href="#" className="dropdown-item">MCSA</a></li>
                <li><a href="#" className="dropdown-item">LINUX TRAINING</a></li>
              </ul>
            </li>
            <li className="dropend up-submenu">
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">Digital Marketing</a>
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">ADVANCE DIGITAL MARKETING</a></li>
              </ul>
            </li>
            <li className="dropend up-submeu">
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">MIS-Advanced Excel - BI Tools</a>
              <ul className="dropdown-menu">
               <li><a href="#" className="dropdown-item">MIS TRAINING COURSE</a></li>
              <li><a href="#" className="dropdown-item">POWER BI</a></li>
              </ul>
            </li>
            <li className="dropend up-submenu">
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">ERP</a>
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">ERP PP TRAINING IN NOIDA</a></li>
                 <li><a href="#" className="dropdown-item">ERP S4 HANA FICO</a></li>
                <li><a href="#" className="dropdown-item">ERP S4 HANA MM</a></li>
                <li><a href="#" className="dropdown-item">ERP S4 HANA SD</a></li>                
              </ul>
            </li>
            <li className='dropend'>
              <a className="dropdown-item dropdown-toggle has-submenu" href="#">Industrial Traning</a>
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">6 MONTHS INDUSTRIAL TRAINING</a></li>  
              </ul>
            </li>
            <li className="dropend up-submenu">
            <a className="dropdown-item dropdown-toggle has-submenu" href="#">Others</a>
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">SQL + PL/SQL</a></li>
              <li><a href="#" className="dropdown-item">DATA ENGINEER</a></li>
              <li><a href="#" className="dropdown-item">BUSINESS ANALYTICS</a></li>
              <li><a href="#" className="dropdown-item">SCRUM MASTER</a></li>
              <li><a href="#" className="dropdown-item">CORE JAVA + HANDOOP</a></li>
              <li><a href="#" className="dropdown-item">MICROSOFT SQL SERVER</a></li>
              <li><a href="#" className="dropdown-item">HR GENERALIST</a></li>
              <li><a href="#" className="dropdown-item">COGNOS 10 BI</a></li>
              <li><a href="#" className="dropdown-item">SAS</a></li>
              <li><a href="#" className="dropdown-item">SAS BI</a></li>
              <li><a href="#" className="dropdown-item">BLOCKCHAIN</a></li>
              <li><a href="#" className="dropdown-item">IOT</a></li>
              <li><a href="#" className="dropdown-item">IOT WITH ARDUINO</a></li>
              <li><a href="#" className="dropdown-item">RHCVA</a></li>
              <li><a href="#" className="dropdown-item">PMP TRAINING</a></li>
            </ul>
          </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/placement'>Placement</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/corporate_traning'>Corporate Traning</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to='/online_registration'>Online Registration</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to='/certificate'>certificate</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to='/carrer_guidance'> <img src={Badge} alt="Badge" />Carrer Guidance</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">ContactUS</a></li>
            <li><a className="dropdown-item" href="#">AboutUS</a></li>
            <li><a className="dropdown-item" href="#">Placements</a></li>
            <li><a className="dropdown-item" href="#">Blogs</a></li>
            <li><a className="dropdown-item" href="#">Tutorials</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  
    </>
  )
}

export default Navbar