import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Components/Dashborad/style.css"
import AllPost from '../Components/Dashborad/AllPost/AllPost'
import CreateCatagory from '../Components/Dashborad/Create Cetagory/CreateCatagory'
import CreatePost from '../Components/Dashborad/Create Post/CreatePost'
import { motion } from "framer-motion"

let leftMenu = ["All Post","Create Category", "Create Post"]
const Dashboard = () => {
  let [menuName,setMenuName] = useState("All Post")
  return (
    <div className='container-fluid '>
       <Row className='dashboard'>
           <Col xs={12} md={3}  style={{position : "static",height : "100%"}}>


            <ul className='leftListUl'>
              {
                leftMenu?.map(item =>{
                  return (<motion.li whileTap={{scale : 0.9}} whileHover={{scale
                   : 1.1}} key={item} className="leftSideList" onClick={()=> setMenuName(item)}>{item}</motion.li>)
                })
              }
            </ul>
           </Col>
           <Col xs={12} md={8} className='offset-md-1'  >

                 {menuName =='All Post' && (<AllPost></AllPost>)}
                 {menuName =='Create Category' && (<CreateCatagory></CreateCatagory>)}
                 {menuName =='Create Post' && (<CreatePost></CreatePost>)}
           </Col>
       </Row>



    </div>
  )
}

export default Dashboard