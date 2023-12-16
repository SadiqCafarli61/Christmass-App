import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../App'
import './Profile.css'
import axios from 'axios'
import ProfileRightSide from './ProfileRightSide'

const ProfileSidebar = () => {
    const user = useContext(userContext)

    const [profile, setProfile] = useState({})

    const [biography, setBiography] = useState("")
    const [file ,setFile] = useState(null)

useEffect(() => {
axios.get(`http://localhost:3001/profile`)
.then(res => {

  setProfile(res.data)
})
.catch(error =>console.log(error))
}, [])




   
  return (
    <div className='  bg-cover bg-fixed bg-center d-flex  mt-20  flex-column pt-28  profile-section'>
 
  <div className="pages mx-8  mb-3 d-grid  grid-cols-2">
    <div className=" text-center d-flex  items-center justify-center h-[auto] flex-column w-[600px]  border-1 border-pink-100 left-side">
    <h2 className=' pb-4'>Profile</h2>
    {
      user.username ? (
        <>
        {
          profile && (
          <>
          <div className="  d-flex   items-center justify-center profile-pic">
          <img className=' shadow-md' src={`http://localhost:3001/Public/${profile.file}`} alt="" />
          </div>
          <div className=" mt-8 mb-4 info">
                  <h5 className=' text-purple-600'>{profile.username}</h5>
          </div>
          <div className="mb-3">
                <h5 className='text-gray-600 italic'>Biography</h5>
                <hr />

                <div className='biography mt-6  border-sky-100 rounded-lg'>
                  <h6 className='text-gray-500 font-bold text-xl'>{profile.biography}</h6>
                </div>
             </div>

          </>
          )
        }
        </>
      ) : (
        <>
        </>
      )
    }

    </div>
    <div className="right-side">
<ProfileRightSide />
    </div>
  </div>
    </div>
  )
}

export default ProfileSidebar