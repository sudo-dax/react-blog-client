import React, { useState, useEffect } from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import blogData from './data/post_data'
import BlogPosts from './components/BlogPosts'
import BlogPost from './components/BlogPost'

const App = () => {
  const [blogPosts, setBlogposts] = useState([])
  useEffect(()=>{
    setBlogposts(blogData)
  }, [])

function getPostFromId (id) {
  console.log(blogPosts)
  return blogPosts.find((post) => post._id === parseInt(id) )
}

  return (
    <div>
      <BrowserRouter>
        <h1>Space Time</h1>
        <Route exact path="/" render={(props) => <BlogPosts {...props} postData={blogPosts} /> } />
        <Route exact path="/posts/:id" render={(props) => 
          <BlogPost {...props} post={getPostFromId(props.match.params.id)} /> } />
      </BrowserRouter>
    </div>
    )
  }

export default App