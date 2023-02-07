import React from 'react'
import Img2 from "../../assets/img2.webp"

import "./style.css"

const Slider = () => {
  return (
    <div className='caroselWrapper'>
            <img src={Img2} alt='heroImg'  className='img-fluid'/>
    </div>
  )
}

export default Slider