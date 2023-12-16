import React, { useEffect, useRef, useState } from 'react'
import './Post.css'
import {io} from 'socket.io-client'
import { CiSearch } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import axios from 'axios'
import { FaRegHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { GiSaveArrow } from "react-icons/gi";
import { useParams } from 'react-router-dom';

const PostsData = () => {
    const [likes, setLikes] = useState()
    const [profile, setProfile] = useState({})
const {id} = useParams()
    const [like, setLike] = useState(false)
const [about, setAbout] = useState([])
    const [posts, setPosts] = useState([])
const [file,setFile] = useState(null)
    const [filtered, setFiltered] = useState([])
 const [date, setDate] = useState("")
    const [search, setSearch] = useState("")
    const [comments, setComments] = useState("")
    const [getComments ,setGetComments] = useState([])
    const handlePost = () => {
        axios.post(`http://localhost:3001/addcomments`, {comments})
        .then(response => {
            console.log(response.data)
        })   
        .catch(error =>console.log(error)) 
    }
    

    useEffect(() => {
axios.get(`http://localhost:3001/getComments`)
.then(res => {
    setGetComments(res.data)
   
    
})
.catch(err =>console.log(err))
    }, [])

    const commentsEl = useRef()
    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/getPosts`)
        .then(response => {
            setPosts(response.data)
        })
        .catch(error =>console.log(error) )
    }, [])

    const handleLike = () => {
        setLike(!like)
    }

    useEffect(() => {
axios.get(`http://localhost:3001/news`)
.then(res => {
setNews(res.data)
})
.catch(err =>console.log(err))
    }, [])
    const handleShowComment = () => {
        commentsEl.current.classList.toggle('active')
    }

 


  return (
    <>
    <div ref={commentsEl} className="comments-section fixed     inset-0 d-flex z-10  items-center justify-center flex-column  overflow-x-hidden h-[100vh]">
       
        <div className="comment rounded-lg  bg-white p-2 w-[400px] h-[400px]">
       
    
     
       
        <h2 className='text-center font-bold text-black text-2xl italic'>Comments</h2>
        <IoMdClose className=' closeIcon cursor-pointer text-3xl text-black' />
        {
            getComments.map((item,index) => (
                <>
              
                    <>
                    <div className="comment-data d-flex relative  justify-between  items-center" key={index}>
                    <h5>{item.postedBy}</h5>
                <h5>{item.days}</h5>
                </div>
                <p className='mt-12 '>{item.comments}</p>
               
                </>
                     
                
                </>
            ))
          
        }
         <div className="writing-secton d-flex  items-center">
         <textarea name="" 
         id="" 
         value={comments}
         onChange={(e) =>setComments(e.target.value)}
         placeholder='post comment'
         className='w-[300px] h-[31px] outline-none border-pink-200 rounded-lg border-1'></textarea>
          <button onClick={handlePost}  className=' mx-2 btn btn-outline-dark '>Post</button>           
                  </div>
       
        </div>
       
    </div>
    <main className="post-data  pt-36 d-flex items-center justify-center h-100 bg-black ">
    <div className="posts d-flex  ">
        <div className="left-side w-[600px]  ">
            <h5 className='text-white relative text-center  pb-12 uppercase font-semibold'>Posts</h5>
        
             <div className="post-result d-grid  grid-cols-3   pt-36">
                {
                    posts.map(post => (
                        <>
                        <div className="post-cart  d-flex items-center flex-column  justify-center mx-4 overflow-hidden w-[380px] mt-4" key={post._id}>
          <div className="post__heading overflow-hidden w-[450px]">
          <img src={`http://localhost:3001/Posts/${post.file}`} className='w-[100%]' alt="" />
                      
          </div>
          <div className="text-center overflow-hidden pt-2 post__body">
            <h5 className='text-white text-lg'>{post.text}</h5>
            <h2 className=' text-xl text-white'> <span>Posted by: </span>{post.postedBy}</h2>

          </div>
          <div className="comment d-flex items-center  pt-4">
      <textarea
      onChange={(e) =>setComments(e.target.value)}
      value={comments}
      placeholder='Add comment' name="" id="" className='w-[220px] h-[38px] p-1 rounded-lg text-white bg-transparent border-sky-100 border-1  font-semibold outline-none'  ></textarea>
      <button onClick={handlePost} className='btn btn-outline-light mx-2 '>Post comment</button>
   </div>
   <div className="icons mt-3 d-flex justify-center   items-center  w-[400px]">
<FaRegHeart onClick={handleLike}  style={{color: like ? "red" : ""}} className='cursor-pointer  heartIcon  text-2xl' />
<span className='text-white'>{like.length}</span>
<FaRegComment onClick={handleShowComment}  className='cursor-pointer text-white mx-2 text-2xl' />
<span className='text-white'>{getComments.length}</span>
<div className="save ">
     <a download={post.file} href=""><GiSaveArrow className='   mx-28  text-white cursor-pointer saveArrow     text-2xl' /></a>
</div>
   </div>
                        </div>
                        </>
                    ))
                }
             </div>
        </div>

        <div className="right-side">
        <div className=" text-center content">
                    <h3 className='text-white  mr-64  font-bold text-3xl'>New Posts</h3>
                </div>
               <div className="new-posts pt-12">
                
 {
    news.map((data, index) => (
        <>
        <div className="cart" key={index}>
            <div className="cart__top">
                <img src={data.url} alt="" />
            </div>
            <div className=" text-center  cart__body">
                <h5 className='text-white font-semibold text-xl'>{data.content}</h5>
            </div>
        </div>
        </>
    ))
 }
               </div>
        </div>
    </div>
</main>
    </>

  )
}

export default PostsData