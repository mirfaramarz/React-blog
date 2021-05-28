
import React, { useState, useEffect } from 'react';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar  = () => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return(

    <div>

{
  posts.map(post => {

    return(
      <div >


<img style={{width: "100%"}} src={post.blogImage} alt="info"/>
   

<NavLink key={post.id} to={`/post/${post.id}`}>  <div className = "post-title">{post.blogTitle}</div>  </NavLink>

       </div>
          
    )

  })
}

    </div>
   )

 }

export default Sidebar;