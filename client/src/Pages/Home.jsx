import React from 'react'
import MainHome from '../componnets/MainHome'
import HolidaysCard from '../componnets/HolidaysCard'
import NewYearGifts from '../componnets/NewYearGifts'
import GiftSection from '../componnets/GiftSection'
import CartSection from '../componnets/CartSection'
import ShareGift from '../componnets/ShareGift'
import Snowman from '../componnets/Snowman'
import Catalog from '../componnets/Catalog'
import Reservations from '../componnets/Reservations'


const Home = () => {
  return (
    <div>
        <MainHome />
        <NewYearGifts />
        <HolidaysCard />
        <GiftSection />
        <CartSection />
        <ShareGift />
        <Snowman />
        <Catalog />
        <Reservations />
      
    </div>
  )
}

export default Home