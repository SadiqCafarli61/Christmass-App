import React, { useEffect, useRef, useState } from 'react'
import './Profile.css'
import axios from 'axios'

const ProfileRightSide = () => {

    const emailEl = useRef()
    const [infos, setInfos] = useState({})
const [file, setFile] = useState(null)
const [errorEmail, setErrorEamil] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [editName, setEditName] = useState(false)
    const [newName, setNewName] = useState('')
    const [biography, setBiography] = useState("")
    const [phone, setPhone] = useState("")
    const [newEmail, setNewEmail] = useState('')
    useEffect(() => {
axios.get(`http://localhost:3001/profile`)
.then(res => {
    setInfos(res.data)
    setFile(res.data.file)
setBiography(res.data.biography)
setPhone(res.data.phone)
    setIsEditing(false)
})
.catch(error =>console.log(error))
    }, [])

    const handleEdit = (e) => {
setEditName(true)
setIsEditing(true)
setNewName(infos.newName)
setNewEmail(infos.newEmail)

    }

    const handleSave = (e) => {
        e.preventDefault()
        const emailCode = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(!emailCode.test(newEmail.trim())){
            setErrorEamil("Please enter a valid email")
            emailEl.current.classList.add("is-invalid")
        }
        else{
            emailEl.current.classList.remove("is-invalid")
            setErrorEamil("")
            axios.put(`http://localhost:3001/profile/edit`, {
                username: newName,
                email: newEmail,
                biography: biography,
                phone: phone
            })
            .then(res => {
                setInfos({...infos, username: newName, email: newEmail, biography: biography, phone: phone })
                window.location.reload()
            })
            .catch(error =>console.log(error))
        }

    }
  return (
    <div className='     d-flex  justify-center items-center rounded-lg flex-column  profile-about'>
       <div className="text text-center ">
        <h5 className='text-rose-400 text-xl italic'>Information</h5>
       </div>
       {
        editName ?  (
            <>
             <form onSubmit={handleSave} className='mt-12 d-flex  flex-column ' >
                
                <div className="mb-3">
                    <label className='font-bold text-gray-600' htmlFor="">Enter a new Username</label>
                    <br />
                    <input 
                    required
                    className='form-control  '
                    onChange={(e) =>setNewName(e.target.value)}
                    value={newName}
                    type="text" />
                </div>
                <div className="mb-3">
                    <label className='font-bold text-gray-600' htmlFor="">Change Your email</label>
                    <input 
                    ref={emailEl}
                    required
                    value={newEmail}
                    onChange={(e) =>setNewEmail(e.target.value)}
                    className='form-control'
                    type="email" />
                    {errorEmail &&  <div className='text-red-600'>{errorEmail}</div>}
                </div>
                <div className="mb-3">
                    <label className='font-bold text-gray-600' htmlFor="">Add a phone number</label>
                    <input 
                    className='form-control'
                    required
                    onChange={(e) =>setPhone(e.target.value)}
                    type="number" value={phone} />
                </div>
                <textarea 
                className='form-control'
                value={biography}
                onChange={(e) =>setBiography(e.target.value)}
                name="biography" id="" cols="30" rows="10"></textarea>
                <button className=' mt-2 btn btn-outline-success w-32 mb-2 '>Update</button>
             </form>
            </>
        ) : (
            <>
               <div className=" d-flex  items-center justify-center  mt-4 mb-3">
              
                       <h5 className='text-gray-600 font-semibold'>Username: {infos.username}</h5>
                    </div>
                    <div className=" items-center justify-center d-flex  mb-3 mt-4">
                   <h5 className='text-gray-600 font-semibold'>Email: {infos.email}</h5>
                    </div>
                    <div className=" d-flex  items-center justify-center  mt-4 mb-3">
              
                      <h5 className='text-gray-600 font-semibold'>Phone: {infos.phone}</h5>
            
           </div>
                   
                  <button 
                  onClick={handleEdit}
                  className='btn  btn-outline-info  mt-4 mb-2 '>Edit Profile</button>
                   
            </>
        )
       }
    </div>
  )
}

export default ProfileRightSide