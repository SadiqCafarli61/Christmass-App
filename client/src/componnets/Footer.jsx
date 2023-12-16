import React from 'react'
import footerimage from '../assets/footer.jpg'
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className='footer-section pt-12  pb-8 bg-red-500  d-flex  items-center justify-center flex-column '>
   <div className="last-section d-grid px-20   grid-cols-3 ">
  <div className="info ">
    <h2 className='text-black text-2xl font-semibold'>Book Event</h2>
    <p className='text-white font-semibold text-md'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, excepturi! Blanditiis laboriosam ullam ducimus itaque eaque nostrum iste dolores tenetur!</p>
    <h6 className='text-white font-bold pt-8 text-3xl'>Created by Sadiq Cafarli :)</h6>
  </div>
  <div className="info ">
    <div className="content">
         <h5 className='text-white text-center font-semibold pt-12'>Your Account</h5>
    </div>
    <div className="links  d-flex pt-8  items-center flex-column ">
        <a href="">About Us</a>
        <a href="">News Letter</a>
        <a href="">Contact Us</a>
    </div>
  </div>
  <div className="info ">
    <div className="content">
    <h5 className='text-white font-bold text-center pt-12 '>Informations</h5>
    <div className="links d-flex  items-center flex-column ">
        <div className="address d-flex  items-center">
        <CiLocationOn className='cursor-pointer text-2xl text-white' />
      <a href="">Baku, Azerbaijan</a>
        </div>
        <div className="address d-flex  items-center">
     <CiPhone className='cursor-pointer text-2xl text-white' />
      <a href="">(+994) 055-415-00-74</a>
        </div>
        <div className="address d-flex  items-center">
    <CgMail className='cursor-pointer text-2xl text-white' />
      <a href="">sadiqcafarli2020@gmail.com</a>
        </div>
     
    </div>
    </div>
  </div>
   </div>
    </footer>
  )
}

export default Footer