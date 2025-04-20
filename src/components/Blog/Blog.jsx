import React, { useState } from 'react';
import { CiBookmarkPlus } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks }) => {

    const [isBookmarked, setIsBookmarked] = useState(false)

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={blog.cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body space-y-2">
                    <div className='flex justify-between'>
                        <h2 className="card-title line-clamp-2 font-bold">{blog.title}</h2>
                        <button onClick={()=>{handleAddToBookmarks(blog),setIsBookmarked(true)}} className='hover:cursor-pointer'>{isBookmarked?<CiBookmarkCheck size={28}></CiBookmarkCheck> :<CiBookmarkPlus size={28}></CiBookmarkPlus>}</button>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className="avatar w-8">
                            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                <img src={blog.author_img} />
                            </div>
                        </div>

                        <div><h2 className='text-lg'>{blog.author}</h2></div>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;