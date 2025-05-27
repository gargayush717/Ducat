import React from 'react'
import './Enquiry.css'
import {useState} from 'react'

function Enquiry() {
const [close,setclose] = useState(false);
const onclose = ()=>{
setclose(true)

}


  return (
    <>
    {close?null:(
    <div style={{ backgroundColor: 'skyBlue'}} >
    <div className='closebtn'>  
        <button type="button" className="btn-close" aria-label="Close" onClick={onclose}></button>
      </div>
    <div className='w-100 enquirydiv d-flex align-items-center pr-5'>
   <input type="text" placeholder='Fullname' className='mx-auto'/>
   <input type="text" placeholder='Email-Address' className='mx-auto'/>
   <input type="text" placeholder='Phone Number' className='mx-auto'/>
   <select name="" id="" className='mx-auto dslt'>
   <option value="">Select a Course</option>
   <option value="">Select a Course</option>
   <option value="">Select a Course</option>
   <option value="">Select a Course</option>
   <option value="">Select a Course</option>
   </select>
   
   <select name="" id="" className='mx-auto dslt'>
   <option value="">Select a Branch</option>
   <option value="">Select a Branch</option>
   <option value="">Select a Branch</option>
   <option value="">Select a Branch</option>
   <option value="">Select a Branch</option>
   </select>
  
   <button type='submit' className='mx-auto'>Submit</button>
    </div>
    </div>
    )}
    </>
  )
}

export default Enquiry