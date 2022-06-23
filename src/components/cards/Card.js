import React from 'react'
import './Card.css'


const Card = ({data}) => {
  
    const handleMouseHover = e =>{
        e.target.style.filter = "grayscale(100%)"
        e.target.parentNode.nextSibling.style.display = "inline"
  
        e.target.parentNode.nextSibling.style.transition="transform 2s ease-in-out"

      }
      const handleMouseNoHover = e =>{
        e.target.style.filter = "grayscale(0%)"
        e.target.parentNode.nextSibling.style.display = "none"


      }
  
  return (
    <div className='container'>
    {data.map((item) => {
        const {id, title, desc,image} = item;

        return(
            <div key='id' className='card' style={{ backgroundColor: 'black' }}  >
            <div className='titles'>
                 <h1>{title.toUpperCase()}</h1>
            </div>
               <div  className='imagediv'>
                <img onMouseOver={handleMouseHover} onMouseLeave={handleMouseNoHover} src={image} alt=""  />
                               
               </div>
               <div className='showtext' >
                {desc}
               </div>

          
                {/* <p>{id}</p> */}
                {/* <h2>{desc}</h2>    */}
                
            </div>
  )
     }) }
            slm</div>
        );

    };
    
export default Card;