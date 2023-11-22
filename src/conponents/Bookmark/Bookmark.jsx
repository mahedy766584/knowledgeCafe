/* eslint-disable react/prop-types */

import Booksmarks from "../bookmark2/Booksmarks";

// eslint-disable-next-line react/prop-types
const Bookmark = ({ bookmarks, readingTime}) => {

    return (
        <div className="p-2">
            <div className=" bg-gray-200 px-12 py-3 border border-sky-500 rounded-md text-sky-500 mt-4">
                <h1 className="text-xl font-semibold text-center">Spent time on read : {readingTime} min</h1>
            </div>

            <div className="mt-6 bg-gray-200 p-3 rounded-md">
                <h1 className="text-2xl font-medium">Bookmarked Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Booksmarks key={bookmark.id} bookmark={bookmark}></Booksmarks>)
                }
            </div>
        </div>
    );
};

export default Bookmark;