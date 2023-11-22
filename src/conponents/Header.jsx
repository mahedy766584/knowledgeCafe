import profile from '../../public/images/profile.png'
const header = () => {
    return (
        <div>
            <div className='flex justify-between mt-6 p-3 items-center border-b-2'>
                <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default header;