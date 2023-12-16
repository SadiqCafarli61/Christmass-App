import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ReservationResult = () => {
   
    const [data, setData] = useState(null)
    const {id} = useParams()
    const [rooms, setRooms] = useState([])
   
useEffect(() => {
const fetchRooms = async () => {
  try {
   const response = await axios.get(`http://localhost:3001/getreservations/${id}`)
   setData(response.data)
   console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
fetchRooms()

}, [])

useEffect(() => {
axios.get(`http://localhost:3001/rooms`)
.then(res => {
  setRooms(res.data)
})
.catch(error =>console.log(error))
})
  return (
    <div className='reservation-result d-flex  items-center justify-center bg-pink-100 flex-column  pt-28 pb-12' >
        <div className="about-reserve d-flex  items-center justify-center h-[100%]">
{
  data && (
    <>
     <div className="reservation-data d-grid grid-cols-2">
    <div className="left-side d-flex  items-center justify-center pb-44">
    <div className="cart">
  <div className="cart__data">
    <h5 className='text-gray-600 text-3xl'>Hello Dear {data.user}!</h5>
   
  </div>
  <div className="cart__room">
       <h2 className='text-gray-400 italic text-2xl'>Here select your room </h2>
       <p className=' text-5xl text-rose-500'>New Year Company</p>
  </div>
</div>
    </div>
    <div className="right-side ">
      <div className="rooms  d-grid grid-cols-2  pb-12 ">
     {  rooms.map((room, index) => (
            <>
              <div className="card w-[300px] hover:shadow-xl hover:scale-100 transition-all bg-transparent border-0 h-[350px] cursor-pointer shadow-md mt-4 mx-4" key={index}>
                <div className="card__top w-[300px]">
                  <img src={room.url} alt="" className='w-[100%]' />
                </div>
                <div className=" text-center pt-2card__body">
                  <h5 className='text-rose-600 text-xl'>{room.price}</h5>
                </div>
                <button style={{display: "block", margin: "10px auto"}} className='w-[120px] h-[36px]  text-white  items-center justify-center rounded-md bg-rose-500'>Select</button>
              </div>

            </>
          ))
        }
      </div>
        
       
    
    </div>

  </div>
    </>
  )
}
        </div>
    </div>
  )
}

export default ReservationResult