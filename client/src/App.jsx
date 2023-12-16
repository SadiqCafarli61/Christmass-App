import { createContext, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './componnets/Header'
import MainHome from './componnets/MainHome'
import Home from './Pages/Home'
import Party from './Pages/Partys/Party'
import PartyAbout from './Pages/Partys/PartyAbout'
import Book from './Pages/About/Book'
import BuyGift from './componnets/BuyGift'
import Store from './Pages/Store/Store'
import Season from './Pages/Seasons/Season'
import Register from './Pages/UserAuthentication/Register'
import Login from './Pages/UserAuthentication/Login'
import axios from 'axios'
import CreatePosts from './Pages/Posts/CreatePosts'
import PostsData from './Pages/Posts/PostsData'
import StoreCart from './Pages/Store/StoreCart'
import Profile from './Pages/Profile/Profile'
import About from './Pages/AboutSection/About'
import TreesAbout from './Pages/AboutSection/TreesAbout/TreesAbout'
import ReservationResult from './componnets/ReservationResult'
import Footer from './componnets/Footer'

export const userContext = createContext()



function App() {
  const [theme, setTheme] = useState("light")
  const [users ,setUsers] = useState({})
  axios.defaults.withCredentials = true

  useEffect(() => {
axios.get(`http://localhost:3001/`)
.then(res => {
  setUsers(res.data)
})
.catch(err =>console.log(err))
  }, [])

  const login = window.localStorage.getItem("userInfo")
  return (

    <>
   

 <div className={`kontainer ${theme}`}>
 <userContext.Provider value={users}>   



    <BrowserRouter>
    <Header theme={theme} setTheme={setTheme} />
    
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route path='/book' element={<Book />} />
      <Route path='/about' element={<About />} />
      <Route path='/parties' element={<Party />} />
      <Route  path='/party-prices/:id' element={<PartyAbout />}/>
      <Route path='/gifts/:id' element={<BuyGift />} />
      <Route path='/store' element={<Store />} />
      <Route path='/seasons' element={<Season theme={theme} setTheme={setTheme} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={ login ?<Home /> : <Login />} />
      <Route path='/createPost' element={<CreatePosts />} />
      <Route path='/posts' element={<PostsData />} />
      <Route path='/cart' element={<StoreCart />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/trees-result/:id' element={<TreesAbout />} />
      <Route  path='/reservations/:id' element={<ReservationResult />}/>
   
    </Routes>
  <Footer />
    </BrowserRouter>
    </userContext.Provider>
    </div>

    </>
  )
}

export default App
