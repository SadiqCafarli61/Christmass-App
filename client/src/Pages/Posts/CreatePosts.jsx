import React, { useRef, useState } from 'react'
import './Post.css'
import { Button } from '@mui/material'
import { IoMdClose } from "react-icons/io";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePosts = () => {
    const  [text, setText] = useState("")
    const [file, setFile] = useState("")
    const [activeText, setActivetext] = useState(false)
    const [activeFile, setActiveFile] = useState(false)


const [active,setActive] = useState(false)
    const addPostEl = useRef()
    const closeEl = useRef()

    const mainEl = useRef()
    const handleActive = () => {
        setActivetext(true)
        setActive(true)
         mainEl.current.style.display = "none"
addPostEl.current.style.width = "100%"
    }

    const handleNext = (e) => {
        e.preventDefault()
        setActivetext(false)
        setActiveFile(true)
    }

    const handleClose = (e) => {
        e.preventDefault()
        setActive(false)
        mainEl.current.style.display = "flex"
        addPostEl.current.style.width = "0%"
       
    }
    const handleBack  = (e) => {
        e.preventDefault()
        setActiveFile(false)
        setActivetext(true)
    }

    const navigae = useNavigate()

    const handlePost = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", file)
        formData.append("text", text)
        axios.post(`http://localhost:3001/createPost`, formData)
        .then(response => {
            console.log(response)
            navigae("/posts")
        })
        .catch(error =>console.log(error))
    }
  return (
    <>
    <div ref={addPostEl} className="add-post">
       
      
        <form  onSubmit={handlePost}>
        {
            active ? (
                <IoMdClose  ref={closeEl} onClick={handleClose} className=' closeIcon cursor-pointer text-white font-semibold text-4xl' />
            ) : (
                <></>
            )
        }
            {
                activeText ? (
                    <div className="mb-3 ">
            
                    <input 
              className=' shadow-none'
              placeholder='Enter a topic'
              onChange={(e) =>setText(e.target.value)}
              type="text" />
              <ArrowForwardIcon  onClick={handleNext}   className='text-2xl nextIcon text-white cursor-pointer' />
                    </div> 
                ) : (
                    <>
                     <ArrowBackIcon onClick={handleBack} className='backIcon text-white font-bold text-4xl cursor-pointer' />
                    
        
                     <input 
                    className='from-control'
                    onChange={(e) =>setFile(e.target.files[0])}
                    type="file" />
                    <button className='btn  btn-outline-light '>Create Post</button>
                        
                    
                     </>
                   
                )
            }
        
        
        </form>
    </div>
    

<main  className="  d-flex bg-cover bg-fixed bg-center  items-center justify-center flex-column pt-22 create-post">
  <div ref={mainEl} className="post">
    
        <h2 className='text-center text-3xl text-white font-bold'>Create Post</h2>
        <Button  onClick={handleActive} size='medium' color='success' variant='contained' >Create</Button>
  </div>
</main>
</>
  )
}

export default CreatePosts