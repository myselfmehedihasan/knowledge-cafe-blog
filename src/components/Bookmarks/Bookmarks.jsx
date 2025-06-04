
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({bookmarks}) => {
  return (
     <div className=" bg-gray-300 ml-4 mt-2 p-4 rounded-lg max-w-md">
      
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx}  bookmark={bookmark}></Bookmark>)
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks