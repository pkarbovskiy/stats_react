import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';


// const Header = ({ toggleMenu }: { toggleMenu: (arg0: any) => void }) 
const Tags = () => {

    const params = {
        slidesPerView: 7,
        spaceBetween: 15,
    }

    return (
        <div className='w-full m-auto overflow-hidden shadow'>
            <Swiper {...params} containerClass='m-auto max-w-3xl flex flex-row px-12 py-4 overflow-hidden'>
                <div className='p-2 text-center bg-gray-200 rounded-full shadow'>All</div>
                <div className='p-2 text-center bg-gray-200 rounded-full shadow'>Solo</div>
                <div className='p-2 text-center bg-gray-200 rounded-full shadow'>Random</div>
                <div className='p-2 text-center bg-gray-200 rounded-full shadow'>Quadra</div>
                <div className='p-2 text-center bg-gray-200 rounded-full shadow'>Quadra</div>
                <div className='p-2 text-center bg-gray-200 rounded-full shadow'>Quadra</div>
                <div className='p-2 text-center bg-gray-200 rounded-full shadow'>Quadra</div>
                <div className='p-2 text-center bg-gray-200 rounded-full shadow'>Quadra</div>
                <div className='p-2 text-center bg-gray-200 rounded-full shadow'>Snipe</div>
            </Swiper>
        </div>
    )
}

export default Tags