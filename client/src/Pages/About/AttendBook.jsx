import React from 'react'
import {Button, ButtonBase} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AttendBook = () => {

    const navigate = useNavigate()
  return (
    <main className=" bg-red-600 outline-none attend-section">
          <div className=" text-center text-about">
 <h2 className='text-white font-bold italic text-3xl'>Ready to attend our event?</h2>
 <h5 className='text-white font-bold italic text-2xl'>Book your ticket today</h5>
<Button className='mt-3' size='medium' variant='contained'color='success' >Book Now!</Button>
          </div>
    </main>
  )
}

export default AttendBook