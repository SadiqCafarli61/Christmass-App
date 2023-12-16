import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';
const StoreData = () => {

    const [active, setActive]  = useState(false)
    const [data, setData] = useState([])
    const [category, setCategory] = useState('All')
    const [searchFilters, setSearchFilters] = useState([])

    const [search,setSearch] = useState("")


    const filtereddGift = category === "All" ? data :
    data.filter(gift =>gift.category === category)
   

    window.onload = function(){
        setCategory("free")
    }



    useEffect(() => {
        const fetchGiftData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/getGiftData`)
               setData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchGiftData()
    }, [])



    const buttonsEl = useRef()

    const handleActive = () => {
setActive(!active)
    }

    window.addEventListener("DOMContentLoaded", () => {
        setActive(active)
    })
    const handleSearch = (value) => {
        const filteredData = data.filter(item =>item.name.toLowerCase().includes(value))
       if(value === ""){
        setSearchFilters([])
       }
       else{
        setSearchFilters(filteredData)
       }
    }
    const dispatch = useDispatch()


       
  return (
    <main className='pt-8 d-flex  flex-column   main-store'>
<div className="main d-flex  ">
<div className="left-side">
    
       <div className="content ">
        <h6 style={{paddingTop: "5px"}} className='   text-black cursor-pointer '>Filter</h6>
       </div>
       <hr />
       <div className=" pt-4 categories ">
       <div className="search-navbar mb-12">
        <input
 placeholder='Search'
     onChange={e =>handleSearch(e.target.value)}
          className=' px-3  outline-0 form-control shadow-none'
        type="search" />
    </div>
 {
    searchFilters.map((item, index) => (
        <>
        <div className="    box-card " key={index}>
<div className=" mt-4 image">
    <img style={{width: "60px", height: "60px", cursor: "pointer"}} src={item.url} alt="" />
</div>
<div className="content  mt-4 mx-4">
    <p>{item.name}</p>
</div>
        </div>
        </>
    ))
 }

        <div className="heading d-flex text-center    justify-center items-center">
     
            <p className='text-lg font-bold  text-gray-700   italic text-center  uppercase'  >Categories</p>
             <IoIosArrowDown onClick={handleActive} className='cursor-pointer mb-3 mx-2 text-2xl font-bold text-black'   />
        </div>
        <div ref={buttonsEl} style={{display: active ? "flex": "none"}} className=" buttons  flex-column ">
            <button onClick={() =>setCategory("free")}>Free</button>
            <button onClick={() =>setCategory("Christmas Tree")}>Christmas Tree <span className='text-red-500'>(Paid)</span></button>
            <button onClick={() =>setCategory("Hat")}>Hats <span className='text-red-500'>(Paid)</span></button>
            <button onClick={() =>setCategory("Hat")}>Socks <span className='text-red-500'>(Paid)</span></button>
        </div>
       </div>
</div>
<div className="right-side">
     <div className="sorted d-flex mb-6  items-center justify-center">
        <IoFilter className=' text-xl mx-10   cursor-pointer' /><span className=' text-center text-black italic '>Filter by sorted</span>
      </div>
      <hr />
    <div className="gifts d-grid  grid-cols-3">
       
        {
            filtereddGift.map((gift, index) => (
                <>
                <div className=" cursor-pointer outline-none mt-6  mx-4  card" key={index}>
                    <div className="card__top">
                        <img src={gift.url} alt="" />
                    </div>
                    <div className="card__bottom pb-3 text-center ">
                        <h5 className='font-bold pt-2'>{gift.name}</h5>
                        <h6 className='text-black italic pt-2'>{gift.price}</h6>
                        <p className='text-rose-600 text-2xl'>{gift.content}</p>
                        <p className='text-rose-800 font-bold text-xl italic'>{gift.category}</p>
                        <button onClick={() =>dispatch(addToCart(gift))} className='btn btn-outline-success '>Add to Cart</button>
                
                    </div>
                </div>
                </>
            ))
        }
    </div>
</div>
</div>
    </main>
  )
}

export default StoreData