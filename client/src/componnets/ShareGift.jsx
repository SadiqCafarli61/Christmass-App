import React from 'react'
import  gifts from './ShareGifts.json'

const ShareGift = () => {

    const handleShare = (gift) => {
        const message = `Check out this gift: ${gift.name} - Price: ${gift.price}`;
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }
  return (
    <div className='d-flex pt-12  items-center flex-column  justify-center share-gift-section'>
  <div className=" text-center content">
    <h2 >Share A Gift</h2>
  </div>
  <div className="gifts d-grid  grid-cols-3 gap-3">
{
    gifts.map(gift => (
        <>
        <div className=" w-[100%] mt-12 carts">

       
          <div className="card cursor-pointer shadow-pink-300 w-[250px] overflow-hidden">
            <div className="card__top w-[120px] shadow-md">
                <img src={gift.url} className='w-[100%]' alt="" />
            </div>
            <div className="card__body">
                <h5 className='text-xl italic'>{gift.name}</h5>
                <p className='text-gray-600 text-center text-lg'>{gift.price}</p>
            </div>
            <button onClick={handleShare} className='btn btn-outline-success '>Share with Your friends</button>
          </div>
        
          </div>
        </>
    ))
}
  </div>
    </div>
  )
}

export default ShareGift