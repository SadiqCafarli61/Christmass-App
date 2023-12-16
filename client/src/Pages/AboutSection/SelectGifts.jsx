import React, { useState } from 'react'
import helloGif from './hello.gif'
const SelectGifts = () => {
    const [selected, setSelected] = useState("")
    const [gift, setGift] = useState("")

    const gifts = [
        {
            id: 1,
            name: "T-Shirt",
            price: "$20",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702580550/tshirt_icety5.png"
        },
        {
            id: 2,
            name: "Phone Case",
            price: "$15",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702580550/phone-case_n3wrkf.png"
        },
        {
            id: 3,
            name: "Wine Bottle",
            price: "$30",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702580550/wine_bjtn6v.png"
        },
        {
            id: 4,
            name: "Book",
            price: "$10",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702580550/book_ege0z7.png"
        },
        {
            id: 5,
            name: "Cola",
            price: "$5",
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1702580550/bottle_jnljas.png"
        }
    ]

  

    const handleshow = () => {

    }
  return (
  <main className=" pt-12 pb-12 bg-pink-100 d-flex  items-center justify-center flex-column  select-gifts">
         <div className=" text-center kontainer">
            <h5 className='text-gray-600 text-3xl'>Select Your Gifts!</h5>
         </div>
         <div className="gift-container d-grid pt-12  grid-cols-2  gap-28">
            <div className="left-side">

                <div className="image w-[400px] cursor-pointer rounded-lg">
                    <img className=' w-[100%] bg-transparent' src={helloGif} alt="" />
                </div>
              <form onSubmit={handleshow} >
                <div className="mb-3 mt-3 mx-8">
                   <select value={selected}  onChange={(e) =>setSelected(e.target.value)} 

                   className='w-[300px] rounded-md outline-none  border-1 border-white text-black h-[36px]' name="" id="">
                  
                   {
                    gifts.map((gft) => (
                        <>
                         <option key={gft.id} value={gft.name}>{gft.name}</option>
                        </>
                    ) )
                   }
                   </select>
                </div>
              </form>
              </div>
              <div className="right-side">
                      <div className="content">
                        <h2 className='text-gray-600 mx-4 italic pb-2 text-3xl'>Gifts</h2>
                      </div>
                      {
                         gifts.filter((gift) =>gift.name === selected)
                        .map((item) => (
                            <>
                            <div key={gift.id} style={{border: "none"}} className="card w-[300px] border-none cursor-pointer p-2 shadow-xl ">
                                <div className=" d-flex  items-center justify-center cart__top w-[300px] rounded-md">
                                    <div className="image w-[150px]">
                                    <img  src={item.url} className='w-[100%]' alt="" />
                                    </div>
                                 
                                </div>
                                <div className=" text-center cart__body">
                                    <h5 className='text-gray-600 text-xl'>{item.name}</h5>
                                    <p className='text-pink-700 text-lg italic pt-2'>{item.price}</p>
                                </div>
                                <button className=' d-flex mx-24  items-center justify-center w-[100px] border-white border-1 text-white font-bold h-[40px] hover:bg-rose-700  bg-rose-600 rounded-md cursor-pointer'>Buy</button>
                            </div>
                            </>
                        ))
                      }
              </div>
         </div>
  </main>
  )
}

export default SelectGifts