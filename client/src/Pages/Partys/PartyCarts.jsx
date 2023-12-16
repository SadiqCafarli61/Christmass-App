import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const PartyCarts = () => {

    const navigate = useNavigate()
const [data, setData] = useState([])

const [search, setSearch]  = useState("")
const [filter, setFilter] = useState([])

const [errors, setErrors] = useState("")

    useEffect(() => {
        axios.get('http://localhost:3001/parties')
        .then(res => {
          setData(res.data)
        })
        .catch(err =>console.log(err))
    }, [])

   

    const handleSearchChange = (value) => {
        
            const filteredData = data.filter(item =>item.name.toLowerCase().includes(value))
           if(value === ""){
            setFilter([])
           }
           if(value === data.name){

           }
           else{
            setFilter(filteredData)
           }
     
    }


    const handlePress = (e) => {
      
        if(e.key === "Enter"){
            if(filter.length !==0){
                navigate(`/party-prices/${filter[0].id}`)
            }
            else{
                setErrors("Please enter a valid party name")
            }
        }
    }

 
    
  return (
    <div className='party-cards d-flex items-center justify-center flex-column   pt-6 '>
         <div className="searching-party px-2    pt-8">
   <input 
   id='searchInput'

   placeholder='Search...'
 onKeyDown={handlePress}
   style={{width: "300px"}}
   className='  form-control shadow-none outline-none '
 onChange={e =>handleSearchChange(e.target.value)}
   type="search" />
   {errors && <div style={{color: "red"}}>{errors}</div>}
   {
    filter.map(data => (
        <>
        <div className="  d-flex  justify-between items-center mt-3 box" key={data.id}>
            <h5>{data.name}</h5>
            <Link className='text-decoration-none  text-white  ' to={`/party-prices/${data.id}`}>Apply</Link>
        </div>
        </>
    ))
}
</div>
    <main className="cards d-grid    grid-cols-3">

       
{
    data.map((party, index) => (
        <>
        <div className=" mt-4 mx-4 party-card cursor-pointer" key={index}>
            <div className="party__top">
                <img src={party.url} alt="" />
            </div>
            <div className=" text-center pt-3 party__body">
                <h5 className='font-bold text-black'>{party.name}</h5>
                <p>{party.content}</p>
                <button onClick={() =>navigate(`/party-prices/${party.id}`)} className='btn btn-outline-success '>Apply now!</button>
            </div>
        </div>
        </>
    ))
}

    </main>
    </div>
  )
}

export default PartyCarts