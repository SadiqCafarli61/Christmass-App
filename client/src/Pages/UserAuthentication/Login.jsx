import React, { useState } from 'react'
import './Authentication.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error,setError] = useState("")

    const navigate = useNavigate()

const handleLogin = async (e) => {
    e.preventDefault()
    window.localStorage.setItem("loginInfo", true)
    try {
        const resp = await axios.post(`http://localhost:3001/login`, {email, password})
        if(resp.data === "success"){
            
          navigate('/')
          window.location.reload()
          
        }
        else{
            setError("Invalid email or password ")
        }
        
    } catch (error) {
        console.log(error, "error in login")
    }
}

  return (
    <div className=' pt-20 d-flex  justify-center flex-column  items-center login-section'>
<div className="login roudned-lg shadow-lg">
    <form onSubmit={handleLogin}>
        <h5 className='font-bold text-xl'>Login</h5>
        <div className="mb-3">
            <label htmlFor="Email">Email</label>
            <input 
            required
            className=' shadow-none form-control'
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            type="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input 
            className='form-control shadow-none '
            required
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            type="password" />
        </div>

        <button  type='submit' className='d-flex items-center justify-center m-auto  w-36 btn btn-outline-success '>Login</button>
        {error && <div className='text-red-600'>{error}</div>}
    </form>
</div>
    </div>
  )
}

export default Login