import React from 'react'
import {useEffect,useState} from 'react'
import modalbackground from '../../public/modal_background.webp'
import profile from '../../public/popup-avatar.webp'
import './Modal.css';

const Modal = () => {
const [show, setshow] = useState(false)
const[selectedcourse,setselectedcourse] = useState('');

useEffect(()=>{
const timer = setTimeout(()=>{
  setshow(true);
},2000);
return() => clearTimeout(timer); 
},[])

  return (
    show && (<div className="modal show d-block " tabIndex="-1">
  <div className="modal-dialog mx-auto w-100">
    <div className="modal-content mx-auto">
      <div>  
        <button type="button" className="btn-close" aria-label="Close" onClick={() => setshow(false)}></button>
      </div>
      <div className="modal-body">
        <div className="moddiv">
          <h2><span className="master">Master</span> IT Skills 
          <br /> 
          <span className="midtext">for a Brighter</span> 
          <br />
          <span className="Future">Future!</span> </h2>
        </div>
        <div className="moddiv2">
          <div className="main">
          <div className="profile">
           
          </div>
          <div className="form">
            <form action="">
              <input type="text" className='formitem' placeholder='Full Name' />
              <input type="text" className='formitem' placeholder='Email Address' />
              <input type="text" className='formitem' placeholder='Phone Number' />
              <select name="Select a course" className='formitem  lightgrey-text' >
                   
                <option value="">Select a course</option>
                <option value="Geneative AI">Generative AI</option>
                <option value="Flutter">Flutter</option>
                <option value="Cloud">Cloud</option>
                <option value="Solid Works">Solid Work</option>
                <option value="business analytics">Business analytics</option>
                
              </select>
              <input type="text" className='formitem' placeholder='Select a Branch'/>
              <input className='submit' type="submit" />
            </form>
            
          </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
    )
  );
};

export default Modal