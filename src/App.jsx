import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Navbar from "./components/Navbar/Navbar"

function App() {

  const [readingTime, setReadingTime] = useState(0)

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = (blog) => {
    if (!(bookmarks.find(oldBookmark => oldBookmark.id == blog.id))) [
      setBookmarks([...bookmarks, blog])
    ]
  }

  const handleRemoveFromBookmark = (blogId)=>{
    const newBookmarks = bookmarks.filter(blog=> blog.id != blogId)
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (blog) =>{
    handleRemoveFromBookmark(blog.id)
    setReadingTime(readingTime + blog.reading_time)
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex">
        <div className="w-[70%]"><Blogs handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime}></Blogs></div>
        <div className="w-[30%]"><Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks></div>
      </div>
    </div>
  )
}

export default App
