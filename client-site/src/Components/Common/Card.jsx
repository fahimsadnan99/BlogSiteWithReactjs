import React from 'react'
import ReactImg from "../../assets/8.webp"
import "./style.css"
import {AiOutlineComment} from "react-icons/ai"
import  {BsCalendar3} from "react-icons/bs"

const Card = () => {
  let dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  return (
    <div className='card cardWrapper'>
    <div className='cardImg'>
         <img src={ReactImg} alt='img' className='img-fluid'/>
    </div>
    <div className='card-body CardbodyWrapper'>
    <h6 className='hedline'>
      {dummyText.slice(0,60).concat("...")}</h6>
    </div>
    <div className='card-footer d-flex justify-content-between align-items-center'>
      <div className='d-flex justify-content-between align-items-center'>
      <AiOutlineComment></AiOutlineComment>
      <small className='mx-2'>10 comment</small>
      </div>
     <div className='d-flex justify-content-between align-items-center'>
      <BsCalendar3></BsCalendar3> <small className='mx-2'>{new Date().toLocaleDateString()}</small>
     </div>
    </div>
    

    </div>
  )
}

export default Card