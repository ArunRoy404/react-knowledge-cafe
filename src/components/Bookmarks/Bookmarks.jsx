import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mt-10 mb-2'>Reading Time: {readingTime}</h1>
            <h1 className='text-center text-2xl font-bold'>Bookmarks: {bookmarks.length}</h1>
            <div className='pt-'>
                {
                    bookmarks.map(blog=><Bookmark key={blog.id} blog={blog}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;