import React from 'react'
import { motion } from 'framer-motion'
import { Col, Container, Row } from 'reactstrap'
import Card from '../Components/Common/Card'

const Home = () => {
  return (
    <div className='container-fluid'>
   <Row>
    <Col xs={12} md={9}>
         <Row>

         {
            Array(9).fill(9)?.map((card,index)=>{
              return (
                <motion.div className='col-xs- 12 col-sm-6 col-md-4 mt-3 '
                initial={{opacity : 0.4,scale : 0, y : 100}}
                animate={{opacity :1 , scale : 1, y : 0}}
                transition={{delay : index * 0.1,
                  type : "spring"
                 }}
                > 
                 <Card></Card>
              </motion.div>
              )
            })
          }
         </Row>
    

    </Col>
    <Col xs={12} md={3}>Right</Col>

   </Row>

    </div>
  )
}

export default Home