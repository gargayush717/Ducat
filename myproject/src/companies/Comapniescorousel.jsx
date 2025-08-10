  import React,{useState,useEffect}from 'react'
  import "./Companiescorousel.css"

  function Comapniescorousel() {
      const[translateX,setTranslateX]=useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const handlerightclick=()=>{
    let nextvalue = translateX-205;
    if(nextvalue < -1640){
      
      nextvalue=0;
    } 
    setTranslateX(nextvalue);
  }
  const handelleftclick=()=>{
    let prevval = translateX+205;
    if(prevval > 0){
  prevval=0;
    }
    setTranslateX(prevval);
  }
  useEffect(() => {
      const timer = setTimeout(() => {
      let next = translateX-205;
        if(next < -1640){
          setIsResetting(true);      
           setTranslateX(0);
          setTimeout(()=>{
            setIsResetting(false); 
          },50)
        }else{
        setTranslateX(next);}
      }, 2000); 
      return ()=> clearTimeout(timer);

    
    }, [translateX]);
  const corouselstyle={
    transform: `translateX(${translateX}px)`,
  transition: isResetting ? 'none' : 'transform 0.5s ease-in-out',

  };
    return (
      <>
      <div className="maincorouseldiv">
        <button className='leftbtn' onClick={handelleftclick}><h1>&lt;</h1></button>
      <div className="corousel ">
        <div className="image-wrapper"
            style={corouselstyle}>
  <div className='image-div'><img src="ducat_compnies\1717060406072Aditya20Group.webp" alt="aditya birla group" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060440576Ibilt.webp" alt="ibill" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060458759Accenture.webp" alt="accenture" height={"150px"} width={"195px"} /></div>
  <div className='image-div'><img src="ducat_compnies\1717060469084Algoscale.webp" alt="agloscale" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060480490Bajaj.webp" alt="bajaj" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060491701Birlasoft.webp" alt="birlasoft" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060501852CSC.webp" alt="CSC" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="/ducat_compnies\1717060518401Cognizant-Logo.webp" alt="Cognizant" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060528527Hewitt.webp" alt="Hewitt" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060536963IBM.webp" alt="IBM" height={"150px"} width={"190px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060621133Steria.webp" alt="SopraSteria" height={"150px"} width={"195px"} /></div>
  <div className='image-div'><img src="ducat_compnies\1717060632915Jubilant.webp" alt="Jubilant" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060642611Infosys.webp" alt="infosys" height={"150px"} width={"195px"}/></div>
  <div className='image-div'><img src="ducat_compnies\1717060662910TATA20Services.webp" alt="TCS" height={"150px"} width={"195px"}/></div>
  </div>
  </div>
  <button className='rightbtn' onClick={handlerightclick}><h1>&gt;</h1></button>
      </div>
      </>
    )
  }

  export default Comapniescorousel