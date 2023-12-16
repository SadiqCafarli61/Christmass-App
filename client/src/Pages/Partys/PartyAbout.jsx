import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Party.css'
import { Link, useParams } from 'react-router-dom'

const PartyAbout = () => {
    const [result, setResult] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/parties/${id}`)
        .then(res => {
            setResult(res.data)
        })
        .catch(err =>console.log(err))
    }, [])
    


  return (
    <div style={{height :"90vh"}} className='  pt-20 d-flex items-center justify-center flex-column  party-result'>
        <div className=" text-center content">
            <h2 className='  text-4xl font-bold'>Welcome to parties🎉</h2>
            <p className=' font-semibold text-3xl '>Here you can find all the information about your favorite political parties!</p>
        </div>
        <div className="about pt-16  d-grid grid-cols-2 gap-20 ">
            {
                result && (
                    <>
                  <div className="left-side ">
                    <div className="about__top">
                        <img src={result.url} alt="" />
                    </div>
                    <div className=" mt-3 text-center about__info">
                        <h5 className='text-2xl font-bold'>{result.name}</h5>
                        <p className='font-semibold'>{result.content}</p>
                    </div>
                  </div>
                  <div className=" text-center right-side">
                      <h4>About</h4>
                      <hr />
                      <ul className='mt-2'>
                      <li><span>Name : </span>{result.name}</li>
                      </ul>
                      <ul className='mt-2'>
                       
                        <li><span>Content: </span>{result.content}</li>
        
                      </ul>
                      <ul className='mt-2'>
                        <li><span>Price: </span>{result.price}</li>
                      </ul>
                      <ul className="mt-2">
                        <Link style={{width: "110px", height: "36px", margin: "0 auto"}} className=' bg-orange-600  text-decoration-none text-white text-xl rounded-lg d-flex  items-center justify-center  border-none  ' to=''>Apply</Link>
                      </ul>
                  </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default PartyAbout