import React from 'react'
import club1 from './NightClubs/club.jpg'
import club2 from './NightClubs/club2.jpg'

const NigthClube = () => {
  return (
  <main className='pt-16 pb-16 d-flex  items-center justify-center flex-column  '>
    <div className="content">
        <h2 className='italic'>Ou night clubs are active!</h2>
    </div>

    <div className="clubes d-grid  grid-cols-2 pt-12">
        <div className="club ">
            <img src={club1} alt="" />
        </div>
        <div className="club mx-4">
            <img src={club2} alt="" />
        </div>
    </div>
  </main>
  )
}

export default NigthClube