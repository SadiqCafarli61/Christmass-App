import React, { useEffect, useRef, useState } from 'react'
import coupon from './coupon.jpg'
import anime from 'animejs'
import gift from './gift.png'

const CouponCode = () => {
    const [code, setCode] = useState("")
    const [result, setResult] = useState("")
    const giftEl = useRef()

    const handleSend = (e) => {
        e.preventDefault()
      if(code){
        setResult(`Your promo code is ${code}`)
        setTimeout(() => {
            giftEl.current.classList.add("active")
        }, 1000)
      
    
      setTimeout(() => {
       
      }, )
       
    } 
      else{
        setResult("")
        return
      }
    }
    useEffect(() => {
        const giftElement = document.createElement("img")
        giftElement.src=gift;
        giftElement.className =("gift")
        giftEl.current.appendChild(giftElement);
  
       
      
   
    }, [])
  return (
    <div className='coupon-code-section d-flex  items-center pt-12 pb-12 flex-column justify-center'>
        <div className=" text-center text-content">
               <h2 className='text-pink-700 text-4xl font-monospace '>Santa Klaus offers Coupon Code</h2>
        </div>
        <div className="coupon-code pt-12 row">
            <div className="left-side  col-12 col-md-6 col-lg-6">
                <div className="image w-[600px]">
                <img src={coupon} className='w-[100%] rounded-md shadow-md' alt="" />
                </div>
         
            </div>
            <div className="right-side  col-12 col-md-6 col-lg-6">
                <div className="content mx-8">
                    <h3 className='font-bold text-3xl text-gray-600'>Holiday Party</h3>
                    <p className='text-rose-600 text-xl'>Write Coupon code for Holiday party and earn gift</p>
                </div>
                <form onSubmit={handleSend}  className='mx-8'>
                    <input 
                    value={code}
                    onChange={(e) =>setCode(e.target.value)}
                    placeholder='Enter promo code'
                    className='formInput w-[300px] h-[35px] p-2 outline shadow-md border-1 border-black rounded-md  text-black font-semibold'
                    type="number" />
                    <br />
                    <button className=' mt-4 w-[120px] btn btn-outline-success '>Send</button>
                 {result && <div className=' text-gray-600'>{result}</div>}
                </form>
                <div ref={giftEl} className=' giftEl   mx-8 mt-3'>
                    <br />
                     <p className='text-gray-600 text-lg'>You earned</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CouponCode