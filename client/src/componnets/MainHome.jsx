import React, { useEffect, useRef, useState } from 'react'
import santaKlaus from '../assets/santa.jpg'
import riding from '../assets/riding.png'

const MainHome = () => {
    const mainEl = useRef()

    const recentlyDate = new Date()
    const newYearDate = new Date('2024-01-01')
   const qalanVaxt  = newYearDate  - recentlyDate
    const [qalanYerliVaxt, setQalanYerliVaxt] = useState(qalanVaxt)

    useEffect(() => {
      const interval = setInterval(() => {
        const yenihesablananvaxt = newYearDate - new Date()
        setQalanYerliVaxt(yenihesablananvaxt)
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }, [newYearDate])

    const formatTime = (time) => {
      const days = Math.floor(time/ (1000 *60 * 60 *24))
      const hours = Math.floor((time % (1000 * 60 * 60 *24) / (1000 * 60 * 60)))
      const minutes = Math.floor((time % (1000 * 60 *60)) / (1000  * 60))
      const seconds = Math.floor((time % (1000 * 60)) / 1000)
      return `${days} day: ${hours} hours ${minutes} minute ${seconds} second `
    }

 

  
  return (
    <div ref={mainEl} className='main-section '>
         <div className="snow"></div>
         <div className="snow2"></div>
         
        
       
 <main className="content row ">
   
      <div className="left-side col-12 col-md-6 col-lg-6  mt-16">
        <h2 className='text-white font-bold text-center text-4xl '>Winter is coming</h2>
        <h5 className='text-white font-semibold text-center text-3xl'>Are You ready for new Adventures?</h5>
<div className="date text-center">
<p className=' text-cyan-50 font-bold text-3xl'>Time is going</p> <span className=' text-white font-semibold'>{formatTime(qalanYerliVaxt)}</span>
</div>
        
       
        <button className=' mt-4 button'>Get Gift</button>
      </div>
      <div className="right-side col-12  col-md-4 col-lg-6 ">
        <h5 className='text-black text-4xl '>Hello 😊</h5>
<img src={santaKlaus} alt="" />
      </div>
 </main>
    </div>
  )
}

export default MainHome