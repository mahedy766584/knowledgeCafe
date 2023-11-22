import { useState } from 'react'
import './App.css'
import Bookmark from './conponents/Bookmark/Bookmark'
import Blogs from './conponents/blogs/Blogs'
import Header from './conponents/header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = (blog) =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const handleMarkAsRead = (time) =>{
    const newMarkRead = readingTime + time
    setReadingTime(newMarkRead)
  }
  

  return (
    <>
      <div className='max-w-screen-lg mx-auto '>
        <Header></Header>
        <div className='flex gap-4 mt-8 justify-center'>
          <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks}></Blogs>
          <div>
            <Bookmark readingTime={readingTime} bookmarks={bookmarks}></Bookmark>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
