import React, { useRef, useEffect } from 'react'
import anime from 'animejs'

const SeasonsNavbar = () => {

    const mainEl = useRef()
    useEffect(() => {
        for(let i = 0; i<2; i++){
            const blocks = document.createElement("div")
            blocks.classList.add("block")
         
        }
        function animateBlocks(){

        }
    }, [])
  return (
    <div ref={mainEl} className='d-flex pt-12 items-center flex-column bg-no-repeat bg-cover  justify-center main-home'>
        <h4 className='text-4xl text-center font-bold text-white uppercase'>Seasons of Grettings</h4>
        <p className='text-center text-3xl pt-6 text-red-600 font-bold'>Explore best places for New Year</p>
    </div>
  )
}

export default SeasonsNavbar