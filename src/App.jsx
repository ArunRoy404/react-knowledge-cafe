import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Navbar from "./components/Navbar/Navbar"

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = (blog) => {
    if (!(bookmarks.find(oldBookmark => oldBookmark.id == blog.id))) [
      setBookmarks([...bookmarks, blog])
    ]
  }

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex">
        <div className="w-[70%]"><Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs></div>
        <div className="w-[30%]"><Bookmarks bookmarks={bookmarks}></Bookmarks></div>
      </div>
    </div>
  )
}

export default App
