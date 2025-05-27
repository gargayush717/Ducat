import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../public/carousel1.webp'
import carousel2 from '../../public/carousel2.webp'
import carousel3 from '../../public/carousel3.webp'
import carousel4 from '../../public/carousel4.webp'
import carousel5 from '../../public/carousel5.webp'
import './Corousel.css';

function UncontrolledExample() {
  return (
    <>
    <div className='corouselmaindiv'>
    <div className='corousel-container mt-5'>
    <div className='maindiv'>
    <Carousel  indicators={false}>
      <Carousel.Item>
    <div className='d-flex'>
        <div style={{width:"100vh",height:"80vh"}}>
          <h1  className='text-center' style={{marginTop:"30vh"}}>learn From the future: <br />Explore Our AI Powered <br />Courses</h1>
        </div>
        <div>
        <img src={carousel1} className="d-block float-end w-100 img" alt="first-slide" />
       </div>
       </div>
      </Carousel.Item>
      <Carousel.Item>
          <div className='d-flex'>
        <div style={{width:"100vh",height:"80vh"}}>
          <h1  className='text-center' style={{marginTop:"30vh"}}>Our Goal is to empower <br />Your career ambitios</h1>
        </div>
        <div>
         <img src={carousel2} className="d-block float-end w-100 img" alt="first-slide"/>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
         <div className='d-flex'>
        <div style={{width:"100vh",height:"80vh"}}>
          <h1  className='text-center' style={{marginTop:"30vh"}}>Your Success is our<br />mission, and we are <br />dedicated to helping you <br />reach your goals</h1>
        </div>
        <div>
         <img src={carousel3} className="d-block float-end w-100 img" alt="first-slide"/>
         </div>
         </div>
      </Carousel.Item>
         <Carousel.Item>
           <div className='d-flex'>
        <div style={{width:"100vh",height:"80vh"}}>
          <h1  className='text-center' style={{marginTop:"30vh"}}>Unloack Your Potential With<br />us, and watch your carrer <br />dreams come to life</h1>
        </div>
        <div>
         <img src={carousel4} className="d-block float-end w-100 img" alt="first-slide"/>
         </div>
         </div>
      </Carousel.Item>
         <Carousel.Item>
           <div className='d-flex'>
        <div style={{width:"100vh",height:"80vh"}}>
          <h1  className='text-center' style={{marginTop:"30vh"}}>Take the first step towards<br />a successful carrer with <br />our support and expertise</h1>
        </div>
        <div>
         <img src={carousel5} className="d-block Float-end w-100 img" alt="first-slide"/>
         </div>
         </div>
      </Carousel.Item>
    </Carousel>
 <div className="searchdiv">
  <input
    type="text"
    className="form-control searchbar "
    placeholder="Search Your Favourite Course Today"
    
  />
  <span className="input-group-text icon">
    <i className="bi bi-search"></i>
  </span>
 </div>

<div className="w-100 bg-primary d-flex bottomdiv align-items-center">
<div className="mx-auto d-flex">
  <div>
    <img src="/insurance-02.webp" alt="mind-image" />
  </div>
  <span className='span'>
    <span>Learn The </span><br /> <span>Essential Skills</span>
    
  </span>
  

</div>
<div className="mx-auto d-flex">
  <img src="/insurance-01.webp" alt="certificate-image" />
  <span className='span'>
    <span>Earn Certificates</span> <br /> <span>And Degrees</span>
    </span>
</div>
<div className="mx-auto d-flex" >
  <img src="/insurance-04.webp" alt="degree-image" />
  <span className='span'>
    <span>Get Ready for The</span> <br /> <span>Next Carrier</span>
    </span>
</div>
<div className="mx-auto d-flex">
  <img src="/insurance-03.webp" alt="user-image" />
  <span className='span'>
    <span>Master at</span> <br /> <span>Diffrent Areas</span>
    </span>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}

export default UncontrolledExample;