import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PostsContext } from "../App";

function Posts() {
    const data = useContext(PostsContext);
    return (
        <>
            {data && data.length > 0 ? 
                data.map(post => {
                    return (
                        <div key={post.id} className='postsDiv'>
                            <p className="title">{ post.title }</p>
                            <p className="body">"{ post.body }"</p>
                        </div>
                    )
                }) : <h3>No posts availablle</h3>}
        </>
    );
}

export default Posts;
