import React, { useState } from 'react'

const NewYearGifts = () => {

    const gifts = [
        {
            id: 1,
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701413885/gift1_huizkh.jpg"
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701413884/gift3_yzzpgm.jpg"
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701413885/gift4_o3fzjb.jpg"
        },
        {
            id: 4,
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701413884/gift5_p5qsmd.jpg"
        },
        {
            id: 5,
            url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1701413884/gift2_lhdwtl.webp"
        }
    ]


  return (
    <div className='gifts-section'>
   <div className="gifts row">
{
    gifts.map((gift, index) => (
        <>
        <div className="  box" key={index}>
            <img src={gift.url} alt="" />
        </div>
        </>
    ))
}
   </div>
    </div>
  )
}

export default NewYearGifts