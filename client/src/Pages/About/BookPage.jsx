import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import hat from './Christmas/hat.jpg'
import anime from 'animejs'

const BookPage = () => {

const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [ticket, setTicket] = useState("")
const [christmasParty, setChristmasparty] = useState("")
const [holidayConcert, setHolidayConcert] = useState("")

const [errors, setErrors] = useState("")



const handleSend = (e) => {
    e.preventDefault()
    if(username === "" || email === "" || phone === ""){
      return setErrors('Please fill out all fields')
  }
  setErrors("")
  axios.post(`http://localhost:3001/send-ticket`, {username, email, phone, ticket, christmasParty, holidayConcert})
  .then(res => {
      console.log( res,'success')
  })
  .catch(err =>console.log(err))

    }


  return (
  <main className=" d-flex items-center  justify-center flex-column bg-fixed  bg-cover bg-center book-section">
    <div className="main d-grid grid-cols-2">

  
   <div className="left-side ">
  <main className="booking  rounded-lg bg-red-600">
    <form onSubmit={handleSend} className='d-flex  items-center' >
        
      <div className="mb-3">
      <h5 className='text-center text-white font-bold text-3xl italic'>Book Your Tickets</h5>
        <input 
        value={username}
         className=' outline-none form-control shadow-none'
         onChange={(e) =>setUsername(e.target.value)}
          placeholder='Enter Your Username'
        type="text" />
      </div>

      <div className="mb-3">
        <input 
        value={email}
        placeholder='Enter Your Email'
        onChange={(e) =>setEmail(e.target.value)}
        className='form-control shadow-none '
        type="email" 
        name="email" 
        id="email" />
      </div>
      <div className="mb-3">
        <input 
         value={phone}
         onChange={(e) =>setPhone(e.target.value)}
         className='form-control shadow-none'
         placeholder='Enter Your Phone'
        type="tel" />
      </div>
      <div className="mb-3">
      <label className='text-center d-flex  pb-2  justify-center items-center text-white font-bold text-xl' htmlFor="">Select Event</label>
    
        <select className='form-control shadow-none  ' name="event" id="event">
          
            <option className='form-control shadow-none' value="" disabled selected hidden>Choose an option</option>
            <option 
            value={christmasParty}
            className='form-control shadow-none'>Christmas Party</option>
            <option 
            onChange={(e) =>setHolidayConcert(e.target.value)}
            value={holidayConcert}
            className='form-control shadow-none'>Holiday Concert</option>
        </select>
      </div>
      <div className="mb-3">
        <input 
        value={ticket}
        placeholder='Select number of ticket'
        onChange={(e) =>setTicket(e.target.value)}
        className='  form-control shadow-none'
        type="number" name="ticket" id="ticket" />
      </div>
      <button type='submit' className='btn   bg-red-700 border text-white transition-all  w-36  focus:bg-red-500 '>Book</button>
      {errors && <div style={{color: "#fff", paddingTop: "10px"}}>{errors}</div>}
    </form>
  </main>
   </div>
   <div className="right-side pt-16  px-20 ">
  <div className="content position-relative ">
      <img src={hat} alt="" /> <h2 className='  text-white   font-extrabold text-5xl'>Christmas Event for the Whole Family</h2>
  </div>
 
   </div>
   </div>
  </main>
  )
}

export default BookPage