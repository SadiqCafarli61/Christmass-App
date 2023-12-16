import React from 'react'
import AboutHome from './AboutHome'
import './about.css'
import BestWishes from './BestWishes'
import SnowmanSection from './SnowmanSection'
import ChristmasTree from './ChristmasTree'
import CouponCode from './CouponCode'
import SelectGifts from './SelectGifts'

const About = () => {
  return (
    <div>
        <AboutHome />
        <BestWishes />
        <SnowmanSection />
        <ChristmasTree />
        <CouponCode />
        <SelectGifts />
    </div>
  )
}

export default About