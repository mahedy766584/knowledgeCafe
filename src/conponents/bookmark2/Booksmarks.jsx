/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const Booksmarks = ({bookmark}) => {

    const {title} = bookmark

    return (
        <div className="p-2 bg-gray-100 rounded-md mt-3">
            <h1 className="text-xl font-medium">{title}</h1>
        </div>
    );
};

export default Booksmarks;