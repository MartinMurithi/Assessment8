import "./App.css";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
import { Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import axios from 'axios'
import SearchPost from "./Components/SearchPost";

export const PostsContext = createContext([]);

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let response = await axios.get(" https://dummyjson.com/posts");
        setPosts(response.data.posts);
        console.log(response.data.posts);
      } catch (error) {
        console.log(`Error is ${error}`);
      }
    };
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={posts}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/searchpost" element={<SearchPost />} >
        </Route>
      </Routes>
    </PostsContext.Provider>
  );
}

export default App;
