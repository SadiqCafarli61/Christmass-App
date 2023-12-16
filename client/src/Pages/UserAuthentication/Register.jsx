import React, { useRef, useState } from 'react'
import santaklauspng from '../UserAuthentication/santaklaus.png'
import './Authentication.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const usernameEl = useRef()
    const [email, setEmail] = useState("")
    const [file, setFile] = useState()
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault();

      if(username === "" || email === "" || password === ""){
        setErrMsg("Please fill all fields")
      }
      if(password !== rePassword){
       setErrMsg("please match the password")
      }
      if(username.length <4 || username.length == 4){
        setErrMsg("Username must be 4 character at least")
        usernameEl.current.classList.add("is-invalid")
      }

        else{
            const formData = new FormData
            formData.append('username', username)
            formData.append('file', file)
            formData.append('email', email)
            formData.append('password', password)
            usernameEl.current.classList.remove("is-invalid")
    
           axios.post(`http://localhost:3001/register`, formData)
           .then(response => {
            console.log(response);
            
           window.location.href = '/login'
            
           })
           .catch(err =>console.log(err))
           
        }
    }
      
    
  return (
    <div className='pt-12 d-flex  flex-column  items-center justify-center register-section'>
        <div className="register d-flex ">
            <img width={70} height={70} src={santaklauspng} alt="" />
          <div className="d-flex items-center justify-center flex-column   bg-cover bg-left  left-side">
     <h2 className='text-white font-bold italic text-4xl'>Welcome to the page</h2>
          </div>
          <div className=" mx-8 right-side">
 <form onSubmit={handleRegister}>
    <div className="mb-3">
        <label className='text-white pb-2 font-semibold' htmlFor="Username">Username</label>
        <input
        ref={usernameEl}
        value={username}
        placeholder='Username'
        onChange={(e) =>setUsername(e.target.value)}
        className=' rounded-md form-control'
        type="text" />
    </div>
    <div className="mb-3">
        <label className='text-white pb-2 font-semibold' htmlFor="Email">Email</label>
        <input 
        className='form-control '
        value={email}
        onChange={(e) =>setEmail(e.target.value)}
        placeholder='Email'
        type="email" />
    </div>
    <div className="mb-3">
        <label className='text-white pb-2 font-semibold' htmlFor="file">Upload profile photo</label>
        <input 
        className='form-control'
        onChange={(e) =>setFile(e.target.files[0])}
           name='file'
           id='file'
        type="file" />
    </div>
    <div className="mb-3">
        <label className='text-white pb-2 font-semibold '  htmlFor="password">Create Password</label>
        <input 
        className= 'form-control'
        value={password}
      
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)}
        type="password" />
    </div>
<div className="mb-3">
    <label className='text-white pb-2 font-semibold ' htmlFor="repassword">Re-password</label>
    <input 
    className='form-control'
    value={rePassword}
    placeholder='Re-password'
    onChange={(e) =>setRePassword(e.target.value)}
    type="password" />
</div>
<button type='submit' className='btn btn-outline-light '>Register</button>
{errMsg && <div className='text-red-600'>{errMsg}</div>}
 </form>
<span className='text-white'>Already have an account?</span>
<Link className='px-2 text-white italic' to='/login'>Login</Link>
          </div>
        </div>
    </div>
  )
}

export default Register