import React, { useState } from 'react'
import ReactImg from "../../assets/8.webp"
import "./style.css"
import {AiOutlineComment} from "react-icons/ai"
import  {BsCalendar3} from "react-icons/bs"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Card = () => {

  const [fvrt,setFvrt] = useState(false)
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
    <div className='card-footer d-flex justify-content-between align-items-center '>
      <div className='d-flex justify-content-between align-items-center' onClick={()=>setFvrt(!fvrt)}>
        <div style={{fontSize : "20px"}} className='mb-2 '> 
        {fvrt ? (<AiFillHeart className='heartFill'></AiFillHeart>) : (<AiOutlineHeart style={{cursor : "pointer"}}></AiOutlineHeart>)} 
        </div>
        <small className='mx-1'><b>2 </b></small>

      </div>
      <div className='d-flex justify-content-between align-items-center'>
      <AiOutlineComment></AiOutlineComment>
      <small className='mx-2'><b>10 comment</b></small>
      </div>
     <div className='d-flex justify-content-between align-items-center'>
      <BsCalendar3></BsCalendar3> <small className='mx-2'><b>{new Date().toLocaleDateString()}</b></small>
     </div>
    </div>
    

    </div>
  )
}

export default Card