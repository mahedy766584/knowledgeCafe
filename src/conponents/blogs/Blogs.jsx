/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookmarks, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    console.log(blogs)

    return (
        <div className="mt-4">
            {
                blogs.map(blog => <Blog key={blog.id} handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;