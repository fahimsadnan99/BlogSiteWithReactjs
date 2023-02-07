import React, { useState } from 'react'
import Card from '../../Common/Card'
import { motion } from 'framer-motion'
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';

const AllPost = () => {
  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 100;
  return (
    <div className='row my-4'>
        
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
  
             
     
     <div className='my-5'>
     <Pagination
      {...bootstrap5PaginationPreset}
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
    </div>
     </div>
  
  )
}

export default AllPost