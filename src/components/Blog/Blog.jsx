import PropTypes from "prop-types";

import { CiBookmark } from "react-icons/ci";
const Blog = ({blog , handleAddToBookmark,handleMarkAsRead}) => {

    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of the tittle ${title}`} />
            <div className="flex justify-between mb-4 ">
                <div className="flex gap-6 mb-4">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span>{reading_time} min read</span> 
                    <button onClick={() => handleAddToBookmark(blog)} className="ml-2"><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className="mr-2" key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className="text-purple-800 font-bold underline">Mark as read</button>
        </div>
    );
};


Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}


export default Blog;