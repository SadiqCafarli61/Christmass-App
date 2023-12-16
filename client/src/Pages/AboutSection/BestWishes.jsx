import React, { useRef } from 'react'
import santaklaus from './santaklaus.png'
import { FaSnowman } from "react-icons/fa";
import {Button} from '@mui/material'

const BestWishes = () => {

  const userNumber = useRef()


  return (
    <div className=' d-flex flex-column pb-20  justify-center items-center pt-12 best-wishes-section'>
<div className="content">
    <h5 className='text-red-700 font-semibold text-4xl'>Best Wishes</h5>
</div>
<div className="wishes pt-20 d-grid grid-cols-2">
  <div className="left-side  ">
    <div className="image w-[330px]">
    <img src={santaklaus} className='w-[100%] cursor-pointer' alt="" />
    </div>
  
  </div>
  <div className="right-side w-[400px] ">
    <div className="text d-flex  items-center">
    <FaSnowman className='cursor-pointer text-red-600 text-3xl' />
 <span className='text-red-600 text-2xl px-2'>Harry Make Wishes</span>
 
  </div>
  <p className='text-gray-400 pt-4 italic font-semibold text-2xl'>This New Year will be more exciting</p>
  <Button variant='contained' size='medium' color='secondary'>Read More</Button>
  
    </div>
 
</div>
    </div>
  )
}

export default BestWishes