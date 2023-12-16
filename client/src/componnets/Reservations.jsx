import React, { useEffect, useState } from 'react'
import reservationsanta from '../assets/reservationsanta.png'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Reservations = () => {
const navigate = useNavigate()
    
const [data, setData] = useState([])
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [gift, setGift] = useState("")

    const [room, setRoom] = useState("")
    const [rooms, setRooms] = useState([])



    

  const handleReserve  = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/reservations`, {user, email, phoneNumber, room})
    .then(res => {
        console.log(res.data)
        navigate(`/reservations/${res.data._id}`)
        
    })
    .catch(error =>console.log(error))
  }
    useEffect(() => {
        const fetchRooms = async () => {
           try {
            const response = await axios.get(`http://localhost:3001/rooms`)
            if(response){
                setRooms(response.data)
                console.log(response.data)
            }
            else{
                throw new Error("Rooms could not find")
            }
            
           } catch (error) {
            console.log(error)
           }
        }
        fetchRooms()
    }, [])
  return (
    <div className=' d-flex  items-center justify-center flex-column pt-12 pb-12 bg-pink-50 reservation-section'>
    <div className="reservation d-grid  grid-cols-2 pt-12">
        <div className="left-side ">
             <h2 className='text-pink-600 px-8  text-3xl'>Reserve Your table Now!</h2>
             <div className="image w-[400px] pt-8">
                <img src={reservationsanta} className='w-[100%]' alt="table"/>
             </div>
        </div>
        <div className="right-side w-[400px] mx-12">
            <form onSubmit={handleReserve} action="">
                <div className="mb-3">
                    <label className='text-gray-500 text-2xl' htmlFor="">Name:</label>
                    <br />
                <input
                   value={user}
                   placeholder='Enter your name'
                   onChange={(e) =>setUser(e.target.value)}
                   required
                   className='w-[300px] h-[38px] bg-transparent border-1 border-gray-500 px-2 rounded-md shadow-md  text-black font-bold'
                   type="text" />
                </div>
                <div className="mb-3">
                    <label className='text-gray-500 text-2xl' htmlFor="">Email:</label>
                    <br />
                    <input
                     className='w-[300px] h-[38px] bg-transparent border-1 border-gray-500 px-2 rounded-md shadow-md  text-black font-bold'
                     required
                     placeholder='Enter your email'
                     value={email}
                     onChange={(e) =>setEmail(e.target.value)}
                    type="email" />
                </div>
                <div className="mb-3">
                    <label className='text-gray-500 text-2xl' htmlFor="">Phone number:</label>
                    <br />
                    <input 
                    value={phoneNumber}
                    placeholder='Enter your phone number'
                    onChange={(e) =>setPhoneNumber(e.target.value)}
                    className='w-[300px] h-[38px] bg-transparent border-1 border-gray-500 px-2 rounded-md shadow-md  text-black font-bold'
                    required
                    type="number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Select Room</label>
                    <br />
                    <select 
                  

                     className='w-[300px] h-[38px] bg-transparent border-1 border-gray-500 px-2 rounded-md shadow-md  text-black font-bold'
                    value={room} onChange={(e) =>setRoom(e.target.value)} name="room" id="room">
                        
                       {
rooms.map(item => (
    <>
 
    <option value={item.number} key={item.id}>{item.number}</option>
    </>
))
                       }
                    </select>
                </div>
                <Link to="/reservations/:id">
  <button
    onClick={handleReserve}
    disabled={!user}
    className='w-[110px] btn btn-outline-warning'
  >
    Reserve
  </button>
</Link>
              
                 
            </form>
        </div>
    </div>
    </div>
  )
}

export default Reservations