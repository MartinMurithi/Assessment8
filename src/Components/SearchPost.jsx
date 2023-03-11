import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PostsContext } from '../App';

function SearchPost() {
    const data = useContext(PostsContext);
    const [post, setPost] = useState({});
    const [searchId, setSearchId] = useState("");

    const handleInput = (e) => {
        setSearchId(e.target.value);
    }

    const handleSearch = () => {
        let post = data.find(post => post.id === parseInt(searchId, 10));
        {post ? setPost(post) : <h3>No post with such id</h3>}
        
        setSearchId("");
    }

    return (
        <>
            <input type="text" placeholder='Search post...' onChange={handleInput} />
            <button onClick={handleSearch} >Search</button>

            {post ?
                <div className="postsDiv">
                <p className="title">{ post.title }</p>
                <p className="title">{ post.body }</p>
            </div>
                : <h3>No post with such id</h3>}
            
        </>
  )
}

export default SearchPost