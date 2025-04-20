import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-10'>Bookmarks: 0</h1>
            <div className='pt-10'>
                {
                    bookmarks.map(blog=><Bookmark key={blog.id} blog={blog}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;