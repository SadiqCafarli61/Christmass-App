import React, { useEffect, useState } from 'react'
import { IoFilter } from "react-icons/io5";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ChristmasTree = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTrees = async () => {
try {
    const response  = await axios.get(`http://localhost:3001/getTrees`)
    setData(response.data)
} catch (error) {
    console.log(error)
}
        }
        fetchTrees()
    }, [])

    const [data, setData] = useState([])
    const [search ,setSearch] = useState("")

   
const handlePrees = (e) => {
if(e.key === "Enter"){

}
}


  return (
    <div className='christmas-section d-flex pt-24  items-center flex-column  justify-center'>
        <div className="content text-center">
            <h2 className='text-gray-600 text-4xl'>You can see Christmas trees</h2>
        </div>
       
      <div className="searching pt-8">
        <input 
        onChange={(e) =>setSearch(e.target.value)}
   value={search}
        onKeyDown={handlePrees}
placeholder='Search...'
        className='input w-[300px] h-[42px] font-semibold bg-pink-100 rounded-md border-red-100 p-2 outline-none text-black'
        type="search" />
      </div>
    <div className="result-trees mt-12  w-[900px]  p-5 d-grid bg-slate-100  grid-cols-3">
        {
            data.map((tree,index) => (
                <>
                <div className="cart mt-3 w-[200px] " key={index}>

<div className="cart__top w-[200px]">
    <img src={tree.url} className='w-[100%] h-[200px] ' alt="" />
</div>
<div className=" text-center cart__bottom pt-2">
    <h5 className='text-gray-600 text-xl'>{tree.name}</h5>
    <Link to={`/trees-result/${tree.id}`} className='btn btn-outline-success  '>Read More</Link>
</div>
                </div>
                </>
            ))
        }
    </div>

    </div>
  )
}

export default ChristmasTree