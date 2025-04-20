import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex">
        <div className="w-[70%]"><Blogs></Blogs></div>
        <div className="w-[30%]"><Bookmarks></Bookmarks></div>
      </div>
    </div>
  )
}

export default App
