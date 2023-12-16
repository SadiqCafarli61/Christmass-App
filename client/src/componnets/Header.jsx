import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../App';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { CgProfile } from "react-icons/cg";
  import { MdOutlineLocalGroceryStore } from "react-icons/md";
import santahat from '../assets/santahat.png'
import { IoSettingsOutline } from "react-icons/io5";
import nightPng from '../assets/night.png'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const Header = ({theme, setTheme}) => {
  const  user= useContext(userContext)
  const navigate = useNavigate()
    const headerEl = useRef()
    const [add, setAdd] = useState(false)

const dispatch = useDispatch()
const [profile ,setprofile] = useState([])
const [file, setFile] = useState(null)

const [active, setActive] = useState(false)
const [color ,setColor] = useState(false)

const addCart = useSelector((state) =>state.cart.cart)



const toggleDarkmode = () => {
  theme == "light" ?  setTheme("dark") :setTheme("light")
}


  

    const handleLogout = (e) => {
      e.preventDefault();
      window.localStorage.removeItem("loginInfo")
      axios.get(`http://localhost:3001/logout`)
      .then(users => {
        navigate("/")
        window.location.reload()
      })
      .catch(err =>console.log(err))
    }

    useEffect(() => {
axios.get('http://localhost:3001/profile')
.then(res =>{
setprofile(res.data)
setFile(res.data.file)
})
    }, [])

    const handleActive = () => {
      setActive(!active)
      overlayMenu.current.classList.toggle("active")
    }

    const overlayMenu  = useRef()
    
  return (
    <>
   <div className="overlay transition-all   bg-black  fixed w-[0%]  " ref={overlayMenu}>
  
    <div className="overlay-menu d-flex  items-center justify-center flex-column ">

    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
<Link to='/book'>Book</Link>
<Link to='/parties'>Parties</Link>
<Link to='/seasons'>Seasons</Link>
<Link to='/store'>Store</Link>
<Link>Contact</Link>
<Link className='post' to='/posts'>Posts</Link>

{
  user.username ? (
    <>
    <div className="post pt-12">
   <Link className='px-2 ' to='/createPost'>Create Post</Link>       
    </div>
 
    </>
  ) : (
    <></>
  )
}
    </div>
   </div>
  <header ref={headerEl} className=' bg-slate-900'>
    <div className=" d-flex items-center logo">
       <img style={{width: "50px"}} src={santahat} alt="" /> <h4 className='text-white font-bold'>Snow<span className='font-bold text-rose-700'>Man</span></h4>
       
    </div>
  <button onClick={handleActive} className='overlayButton text-white font-bold text-xl cursor-pointer'>
   {
    active ? <IoMdClose /> : <FaBars />
   }
  </button>
    <div className="d-flex items-center links">
<Link  to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/book'>Book</Link>
<Link to='/parties'>Parties</Link>
<Link to='/seasons'>Seasons</Link>
<Link to='/store'>Store</Link>
<Link>Contact</Link>
<Link className='post' to='/posts'>Posts</Link>
{
  user.username ? (
    <>

    
  <PostAddIcon className='text-3xl postIcon text-white  font-bold cursor-pointer' /> <Link className='px-2' to='/createPost'>Create Post</Link>  
</>  
  ) : (
    <></>
  )
}


<MdOutlineLocalGroceryStore onClick={() =>navigate("/cart")} className='text-white text-3xl cursor-pointer' />
<span className='text-white px-1 text-2xl'>{addCart.length}</span>
    </div>
    <button onClick={toggleDarkmode}>
      {
        theme == "dark" ? <MdOutlineWbSunny className='text-2xl text-white cursor-pointer' /> :
        <FaRegMoon className='text-white text-2xl cursor-pointer' />
      }

   </button>
    <div className=" icons">

      <IoSettingsOutline className=' text-white cursor-pointer text-2xl' />
      <div className=" items-center content">
      {

 user.username  ?  (
    <> 

    <CgProfile onClick={() =>navigate('/profile')} className=' text-white text-2xl cursor-pointer' />
      <Link to='/profile'>Profile</Link>
      <button onClick={handleLogout} className='btn btn-info  w-6/12'>Logout</button>
    </>
  ) :
    
      <Link to='/register'>Register</Link>
    
  
}
   

      </div>
    </div>

  </header>
  </>
  )
}

export default Header