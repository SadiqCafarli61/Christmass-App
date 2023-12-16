import React from 'react'
import santaklaus from '../AboutSection/about.jpg'
import { useNavigate } from 'react-router-dom'
const AboutHome = () => {

const navigate = useNavigate()
  return (
    <div className=' d-flex  bg-no-repeat  bg-fixed bg-cover  items-center justify-center flex-column   about-section'>
<main className=' main d-flex'>
    <div className="left-side ">
    <h3 className='   text-white font-semibold '>Merry Christmas</h3>
          <h5 className='text-white text-4xl font-bold'>Gorgeous Collection</h5>
          <button onClick={() =>navigate('/book')} className='btn btn-outline-warning mt-3 d-block  w-[112px] '>Book!</button>
    </div>
  
</main>
    </div>
  )
}

export default AboutHome