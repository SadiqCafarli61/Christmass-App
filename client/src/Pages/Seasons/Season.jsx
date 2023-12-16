import React from 'react'
import './Season.css'
import SeasonsNavbar from './SeasonsNavbar'
import SeasonsCountry from './SeasonsCountry'
import ExploreSeasons from './ExploreSeasons'

const Season = () => {
  return (
    <div>
        <SeasonsNavbar />
        <SeasonsCountry />
        <ExploreSeasons />
    </div>
  )
}

export default Season