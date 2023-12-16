import React from 'react'
import santaklaus from './Christmas/santaklaus.jpg'
import { IoLocationOutline } from "react-icons/io5";

const BookEvent = () => {
  return (
    <div className='pt-8 pb-8 d-flex  justify-center items-center event-section'>
        <div className="event  row">
            <div className="left-side col-12 col-md-6 col-lg-4">
            <h3 className='text-red-700 text-4xl'>About Our Event </h3>
                    <div className="content pt-6 d-flex ">
                         <IoLocationOutline className='cursor-pointer text-3xl text-green-800' />
                         <span className='text-green-800 font-bold text-2xl'>Location: New york</span>
                    </div>
                    <div className="content pt-6 d-flex ">
                         <IoLocationOutline className='cursor-pointer text-3xl italic text-green-800' />
                         <span className='text-green-800 font-bold text-2xl italic'>Date: 01.01.2024</span>
                    </div>
            </div>
            <div className="  mx-6 right-side col-12 col-md-6 col-lg-6">
             <img src={santaklaus} alt="" />
            </div>
        </div>

    </div>
  )
}

export default BookEvent