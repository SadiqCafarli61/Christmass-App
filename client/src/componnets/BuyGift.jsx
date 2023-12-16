import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const BuyGift = () => {

    const {id} = useParams()
    const [gift, setGift] = useState(null)
   
 useEffect(() => {
  axios.get(`http://localhost:3001/getGifts/${id}`)
  .then(res => {
    setGift(res.data)
  })
  .catch(err =>console.log(err))
 }, [])


 const todayDate = new Date()
 const newYearDate = new Date('2024-01-01')

 const remainingTime = newYearDate - todayDate

 const [localTime, setLocalTime] = useState(remainingTime)

 useEffect(() => {
  const interval = setInterval(() => {
    const newCalculatedTime = newYearDate - new Date()
    setLocalTime(newCalculatedTime)
  }, 1000)

  return () => {
    clearInterval(interval)
  }
 }, [newYearDate])

 const formatTime = (time) => {
  const day =  Math.floor(time/(1000*60*60*24))
  const hour = Math.floor((time %(100*60*60*24)/(100*60*60)))
  const minute = Math.floor((time%(1000*60*60))/(1000*60))
  const second = Math.floor((time %(1000*60))/1000)
  return `${day} day: ${hour} hour: ${minute} minute: ${second} second:`
 }

  return (
    <div  className='buying-section d-flex flex-column   items-center justify-center '>
<div className="content">
    <h2>Gifts </h2>
    <hr />
</div>
<div className=" pt-16 gifts-result d-grid grid-cols-2">
    {
        gift && (
            <>
            <div className="gift-info">
              <div className="top">
                <img src={gift.url} alt="" />
              </div>
              <div className="body text-center">
                <h5 className=' pt-4 text-2xl italic font-bold'>{gift.name}</h5>
                <p className='text-xl font-bold text-pink-400'>{gift.price}</p>
              </div>
            </div>
            <div className="  px-12 right-side ">
              <div className="context-text text-center">
                <h2 className='text-4xl font-bold italic'>Hurry Up!</h2>
                <h5 className='text-3xl  text-black italic'>Time is going</h5>
                <p>{formatTime(localTime)}</p>
              </div>
            </div>
            </>
        )
    }
</div>
    </div>
  )
}

export default BuyGift