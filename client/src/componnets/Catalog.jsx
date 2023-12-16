import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CiShoppingCart } from "react-icons/ci";
import {Link} from 'react-router-dom'

const Catalog = () => {
const [value, seTValue] = useState("")
const [result, setResult] = useState("")
  
    const[ data,setData] = useState([])
    useEffect(() => {
        const fetchCatalogList  = async () => {
            try {
               const response = await axios.get(`http://localhost:3001/getList`)
                   setData(response.data)
                   console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCatalogList()
    }, [])

    data.sort((a, b) => {
        return a.name - b.name
    })
   


  return (
    <div className=' mt-12 pb-12 d-flex  border-none items-center flex-column  justify-center bg-cover bg-center bg-fixed catalog-section'>
    <div className=" text-center content">
        <h5 className='text-white text-4xl font-bold uppercase'>Christmas Sale and discount week <br /> up to 50% off on all products</h5>
    </div>
  <div className="lists d-grid pb-12  pt-20 grid-cols-3">
    {
        data.map(item => (
            <>
            <div style={{border: "none"}} className="card p-2 mx-4 mt-4 w-[300px]  cursor-pointer  shadow-yellow-50 shadow-md bg-transparent">
                <div className="card__top w-[300px] d-flex  items-center justify-center">
                <div className="image w-[120px] ">
                    <img src={item.url} alt="" className='' />
                </div>
                </div>
                <div className=" text-center pt-2 card__body">
                     <h5 className='text-white font-bold text-lg'>{item.name}</h5>
                </div>
                <div className="shop text-center ">
                    <button style={{margin: "0 auto"}} className='d-flex w-[120px] bg-green-500  transition-all hover:bg-green-700 rounded-md h-[35px] items-center justify-center'>
                        <Link  className='   text-decoration-none  text-white'>Shop Now</Link>
                        <CiShoppingCart className='cursor-pointer text-2xl  text-white ' />
                    </button>
                </div>
            </div>
            </>
        ))
    }
  </div>
  
    
    </div>
  )
}

export default Catalog