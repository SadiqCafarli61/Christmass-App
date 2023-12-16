import React, { useEffect, useState } from 'react'
import axios from 'axios'
const SeasonsCountry = () => {

  const [data, setData] = useState([])
  useEffect(() =>{
const fetchSeasonData = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/seasondata`)
    setData(response.data)
  } catch (error) {
    console.log(error)
  }
}
fetchSeasonData()
  }, [])





  return (
    <div className=' pt-6 d-flex  justify-center flex-column  items-center season-section'>
    <div className="content text-center" >
        <h2 className='font-bold italic'>Popular Places in the World To Celebrate New year</h2>
    </div>
    <div className="d-grid  mt-8 grid-cols-3 season-data">
{
  data.sort((a, b) =>a.name.localeCompare(b.name))
  .map((item, index) => (
    <>
    <div className=" bg-black rounded-lg cursor-pointer mt-8 mx-6 cart" key={index}>
<div className="cart__top">
  <img src={item.url} alt="" />
</div>
<div className="cart__body text-center font-bold text-white text-2xl pt-2">
<h5>{item.name}</h5>
</div>
    </div>
    </>
  ))
}
    </div>
    </div>
  )
}

export default SeasonsCountry