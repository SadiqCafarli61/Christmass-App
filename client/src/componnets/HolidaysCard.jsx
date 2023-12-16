import React, { useEffect, useRef, useState } from 'react'
import datas from './db.json'
import {Link} from 'react-router-dom'
const HolidaysCard = () => {

    const [data, setData] = useState([])


  return (
    <div className='card-section bg-green-200'>
          <h2 className='  text-white text-center text-3xl font-bold'>Places that You can travel in Winter</h2>
          <div className="datas d-grid  grid-cols-3">
            {
                datas.map(data => {
                    return(
                        <>
                        <div className=" info-data fill-neutral-500   " key={data.id}>
                            <div className=" overflow-hidden top mx-4 mt-4 ">
                                <img src={data.url} alt="" />
                            </div>
                            <div className="content">
                                <h5 className='text-white font-semibold text-2xl text-center'>{data.name}</h5>
                                  <Link className='btn btn-info  '  to='/about'>Read more</Link>
                            </div>
                        </div>

                      
                        </>
                    )
                })
            }
             
          </div>
    </div>
  )
}

export default HolidaysCard