import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h2>Welcome</h2>
            <button onClick={()=>navigate('posts')} >View Posts</button>
            <button onClick={()=>navigate('searchpost')} >Search Post</button>
        </>
  )
}

export default Home