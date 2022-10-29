import React from 'react';
import image1 from '../../assets/image1.webp';
import image2 from '../../assets/image-2.webp';
import image3 from '../../assets/image-3.jpg'
const Banner = () => {
    return (
        <div className='my-10 flex justify-center items-center w-[100vw] '>

            <img src={"https://www.dealsshutter.com/blog/wp-content/uploads/2020/03/homeservice.jpg"} alt="" className='w-full h-100' />
        </div>
    );
};

export default Banner;