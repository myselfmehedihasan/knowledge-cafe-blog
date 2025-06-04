import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import ReadingTIme from "./components/ReadingTime/ReadingTIme";

function App() {

  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const handleAddToBookmark =  blog =>{
    setBookmarks([...bookmarks , blog ]);
  }


  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = readingTime + time ;
    setReadingTime(newReadingTime);

    // remove the read blog from bookmarks
    console.log("remove blog with id: ", id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);

  }
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookmark = {handleAddToBookmark} handleMarkAsRead ={handleMarkAsRead}></Blogs>
        <div className="flex flex-col">
          <ReadingTIme readingTime={readingTime}></ReadingTIme>
        <Bookmarks bookmarks ={bookmarks} ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
