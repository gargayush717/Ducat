import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Placement from './Placements/Placement'
import Corporate_traning from './corporate_Traning/Corporate_traning'
import Online_registration from './Online_registration/Online_registration';
import Certificate from './Certificate/Certificate';
import Carrer_guidance from './Carrer_guidance/Carrer_guidance';
import Modal from './Modal/Modal';
import Layout from './Layout/Layout'
import Diploma_in_cloud_computing_and_cyber_secuity from './diploma-cloud-cyber-security/Diploma_in_cloud_computing_and_cyber_secuity';
import Diploma_in_cloud_computing_cloud_computing_Ai from './diploma-cloud-ai/Diploma_in_cloud_computing_cloud_computing_Ai';
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Modal/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Placement' element={<Placement/>}/>
      <Route path='/corporate_traning' element={<Corporate_traning/>}/>
      <Route path='/online_registration' element={<Online_registration/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
      <Route path='/Carrer_guidance' element={<Carrer_guidance/>} />
      <Route path='/courses' element={<Layout/>}>
      <Route path='diploma_in_cloud_computing_and_cyber_security' element={<Diploma_in_cloud_computing_and_cyber_secuity/>}/>
      <Route path='diploma_in_computer_networking,_cloud_computing_&_ai' element={<Diploma_in_cloud_computing_cloud_computing_Ai/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
