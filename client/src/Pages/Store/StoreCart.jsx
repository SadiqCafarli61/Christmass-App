import React from 'react'
import './Store.css'
import { useSelector } from 'react-redux'

const StoreCart = () => {
const myCarts = useSelector(state =>state.cart.cart)
  return (


    <div className=' d-flex pb-12  pt-36 flex-column  h- cart-section'>
<main className="heading">
    <h2 className=' text-5xl  font-semibold text-black'>Cart</h2>
</main>

<div className="cart-products bg-white rounded-md  shadow-lg   ">
  <div className="head-section d-flex  justify-around  ">
  <div className="head">
    <h5 className='text-2xl text-gray-600'>Gift</h5>
  </div>
  <div className="head">
    <h5 className='text-2xl text-gray-600'>Price</h5>
  </div>
  <div className="head">
    <h5 className='text-2xl text-gray-600'>Category</h5>
  </div>
  </div>
  <div className="product-section d-flex  flex-column  justify-around">
    {
      myCarts.map(item => {
        return(
          <>
          <div className="products mt-4 p-2 d-flex border-1 rounded-md   justify-around">

          
            <div className="product-head">
              <img src={item.url} alt="" />
            </div>
            <div className="product-head">
            <h6 className='text-gray-700 text-xl'>{item.price}</h6>
            </div>
            <div className="product-head">
            <h5 className='text-gray-500'>{item.name}</h5>
            </div>
            </div>
          </>
        )
      })
    }
  </div>
</div>
    </div>
  )
}

export default StoreCart