import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmarks, handleReadingTime}) => {
    const blogsUrl = 'blogs.json'
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch(blogsUrl)
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-10'>Total Blogs: {blogs.length}</h1>
            <div className='grid grid-cols-2 gap-10 p-10'>
                {
                    blogs.map(blog=> <Blog key={blog.id} blog={blog} handleReadingTime={handleReadingTime} handleAddToBookmarks={handleAddToBookmarks}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;