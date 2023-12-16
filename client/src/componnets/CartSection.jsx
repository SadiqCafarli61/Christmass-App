import React from 'react'
import cartPng from '../assets/cart.jpg'
import Slider from 'react-slick'
import cart1 from './cart/cart1.jpg'
import cart2 from './cart/cart2.jpg'
import cart3 from './cart/cart3.jpg'
import { Link } from 'react-router-dom'
const CartSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <main>
        <div className="content text-center">
            <h2 className=' font-semibold text-3xl italic'>New year is coming</h2>
        </div>
        <div className=" cart-page pt-16 d-grid  grid-cols-2 gap-16 ">
  <div className="left-side ">
  <Slider {...settings}>
          <div className='slider'>
           <img className='' src={cart1} alt="" />
          </div>
          
          <div className='slider'>
           <img src={cart2} alt="" />
          </div>
          <div className='slider'>
       <img src={cart3} alt="" />
          </div>
        </Slider>
  </div>
  <div className="right-side">
    <img src={cartPng} alt="" />
    <Link className=' mt-2 mx-7  btn btn-outline-secondary ' to='/'>Explore now</Link>
  </div>
        </div>
    </main>
  )
}

export default CartSection