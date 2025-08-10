import React from 'react'
import "./Companies.css"
import Comapniescorousel from './Comapniescorousel'


function Companies() {
  return (
    <>
    <div className='companymaindiv' >
    <h4 className='titlehead'>OUR LEARNERS WORK AT</h4>
    <h5 className='Desc1'>Ducat Learners work at some of the leading and innovative organisations of </h5><h5 className="Desc2">today, solving core business problems</h5>
    <Comapniescorousel/>
    </div>
    
    </>
  )
}

export default Companies