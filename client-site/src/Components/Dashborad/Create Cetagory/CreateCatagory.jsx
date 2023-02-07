import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const CreateCatagory = () => {
  let catagoryValue = useRef()

  const handleSubmit = ()=>{
    console.log(catagoryValue.current.value);
  }
  return (
    <motion.div animate={{opacity : 1 , scale : 1, x : 0, y : 0}} transition={{type : "spring", stiffness : 60}} initial={{scale : 20,opacity : 0}}>

     <div>
    <h4 className='mt-4 createPostHeading mb-4'>Create Cetagory</h4>
    <div style={{width : "50%"}} >
        <input type="text" style={{width : "100%"}} name="cetagory" ref={catagoryValue} className='form-control'/>
        <button className='btn btn-success my-4' onSubmit={handleSubmit}>Create Cetagory</button>
        </div>
     </div>
    </motion.div>
  )
}

export default CreateCatagory