import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'


import '../about.css'

const TreesAbout = () => {
    const {id} = useParams()
    const {commentId} = useParams()
    const [about, setAbout] = useState(null)
    const [comments, setComments] = useState("")
    const [getComments ,setGetComments] = useState([])
    const [profile, setProfile] = useState({})
    const [file, setFile] = useState(null)
    const [active, setActive] = useState(false)

    useEffect(() => {
axios.get(`http://localhost:3001/getTrees/${id}`)
.then(res => {
    setAbout(res.data)
})
.catch(error =>console.log(error))
    }, [])

    const handlePost = () => {
        axios.post(`http://localhost:3001/addcomments`, {comments})
        .then(response => {
            console.log(response.data)
        })   
        .catch(error =>console.log(error)) 
    }

    useEffect(() => {
axios.get(`http://localhost:3001/getComments/${id}`)
.then(res => {
    setGetComments(res.data)
    
})
.catch(err =>console.log(err))
    }, [id])

    const commentsEl = useRef()

    useEffect(() => {
axios.get(`http://localhost:3001/profile`)
.then(res => {
    setProfile(res.data)
    setFile(res.data.file)

})
.catch(error =>console.log(error))
    }, [])

    const handleShowComment = () => {
commentsEl.current.classList.toggle("active")
    }

   
  return (
    <>
    
  
    <div  className='trees-about h-[100%]  bg-pink-50 d-flex pt-24  items-center justify-center flex-column  flex-1'>
   <div className="trees  d-grid  grid-cols-2">

   {
        about && (
            <>
            <div className="left-side">


            <div className="cart-tree relative p-3 border-rose-400 border-1  d-flex items-center flex-column  justify-center  rounded-2xl w-[420px]">
   <div className="tree__top w-[300px]">
    <img src={about.url} className='w-[100%]' alt="" />
   </div>
   <div className="tree-about text-center pt-2">
    <h5 className='text-gray-600'>{about.name}</h5>
   </div>
   
  
  

            </div>
            </div>
            <div className="right-side">
                <div className="info">
                    <h4 className='font-semibold text-gray-400'>{about.address}</h4>
                    <p className=' pt-2 font-bold'>{about.content}</p>
                </div>
            </div>
            </>
        )
       }
     
    
    
   </div>
    </div>
    </>
  )
}

export default TreesAbout