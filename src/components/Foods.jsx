import React, { useEffect, useState } from 'react'
import Towercomp from './Towercomp'
import axios from 'axios'
import '../styles/allPosts.css'


const Foods = () => {
   
  const [allpost,setAllPosts] = useState([])

  useEffect(() => {
    try{
      axios.get('http://localhost:4000/posts').then((response) => {
        setAllPosts(response.data.posts)
        console.log(response.data.posts) 
       })
    }catch(err){
      console.error(err)
    }
  
  },[])
    
  return (
    <div>
                <Towercomp title="Food " />

            <div className='allposts'>            
                {allpost.map((x) => {
                  return(
                  <div>
                    <h1> {x.author}</h1>
                    <h2>{x.title}</h2>
                    <img src={x.image} alt="" width={250}/>
                   </div>
                  )
                  
                })}
        </div>
            

    </div>
  )
}

export default Foods