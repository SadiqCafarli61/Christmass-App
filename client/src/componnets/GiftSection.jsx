import axios from 'axios'
import React, { useEffect, useDeferredValue, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const GiftSection = () => {

   

  const giftEl = useRef()


    const [category, setCategory] = useState("All")

  
    const [data, setData] = useState([])

    const filteredGifts = category === 'All' ?
    data : data.filter(item =>item.category === category)


    useEffect(() => {
        axios.get(`http://localhost:3001/getGifts`)
        .then(res => {
            setData(res.data)
        })
        .catch(err =>console.log(err))
    }, [])


    const handleFree = () => {
        setCategory("free")
    }

    const handlePaid = () => {
        setCategory("paid")
    }

   window.onload = function(){
    setCategory("free")
   }

  return (
    <div className='giftdata-section'>
       <div className="data-button d-flex ">
        <button  onClick={handleFree}>Free Gift</button>
        <button onClick={handlePaid}>With money</button>
       </div>
    <div className="gifts row">
{
    filteredGifts.map((item, index) => (
        <>
        <div ref={giftEl} className="box shadow-lg mx-4 mt-4 col-12 col-md-6 col-lg-4" key={index}>
            <div className="box__top">
                <img src={item.url} alt="" />
            </div>
            <div className="box__bottom text-center">
                <h5 className=' pt-3 text-black font-bold text-xl'>{item.name}</h5>
                <h6>{item.price}</h6>
                <Link style={{width: "110px"}} className='btn  btn-outline-success ' to={`/gifts/${item.id}`}>Buy</Link>
            </div>
        </div>
        </>
    ))
}
    </div>

       
   
    </div>
  )
}

export default GiftSection