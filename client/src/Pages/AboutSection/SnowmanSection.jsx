import React from 'react'
import { FaSnowman } from "react-icons/fa";
import {Button} from '@mui/material'
import snowmanpng from './snowman.png'

const SnowmanSection = () => {
  return (
    <div className='snowman-section pb-20 pt-28 d-flex  items-center justify-center bg-slate-100 flex-column'>
 <div className="snowman d-grid  grid-cols-2">
    <div className="left-side">
  <div className="icons d-flex  items-center">
<FaSnowman className='text-red-600 text-3xl cursor-pointer' />
<span className='text-red-600 text-2xl px-2'>Harry Make Wishes</span>
  </div>
  <p className='text-gray-400 pt-4 italic font-semibold text-2xl'>Snowman is waiting for  you</p>
  <Button variant='contained' size='medium' color='secondary'>Read More</Button>
    </div>
    <div className="right-side ">
        <div className="image w-[330px]">
        <img src={snowmanpng} className='w-[100%]' alt="" />
        </div>
          
    </div>
 </div>
    </div>
  )
}

export default SnowmanSection