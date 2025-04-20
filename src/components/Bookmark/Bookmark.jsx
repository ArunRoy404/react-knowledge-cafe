import React from 'react';

const Bookmark = ({blog}) => {
    return (
        <div className='p-2'>
            <div className="card bg-base-100 card-xs shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;