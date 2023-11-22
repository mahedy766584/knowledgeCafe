/* eslint-disable react/prop-types */
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {

    const { cover_img, title, author_img, author, posted_date, reading_time, hashtags } = blog;

    return (
        <div className="mb-8 w-[650px] p-2 rounded-md shadow-md">
            <img src={cover_img}  alt={title} />
            <div className="flex justify-between mt-2 items-center">
                <div className="flex gap-2 items-center">
                    <img src={author_img} className="w-[50px]" alt={author} />
                    <div>
                        <h2 className="text-lg font-semibold">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="text-gray-500">{reading_time} min read</p>
                    <button onClick={()=>handleBookmarks(blog)}>
                        <CiBookmark className="text-xl" />
                    </button>
                </div>
            </div>
            <h1 className="text-2xl font-medium mt-4">{title}</h1>
            {
                hashtags.map(has => <span key={has}><a className="p-1  text-blue-400 italic " href="#">#{has}</a></span>)
            }
            <div onClick={()=> handleMarkAsRead (reading_time)} className="flex">
                <a className="mt-3 text-blue-600 underline" href="#">Mark as read</a>
            </div>
        </div>
    );
};

export default Blog;