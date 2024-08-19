import React from 'react';

const TopNav = () => {
    return (
        <div className='flex justify-between items-center text-gray-500 py-[2px] border-solid border-0 border-b-[1.2px] border-gray-200'>
            <div className='text-base flex items-center'>
                <div>
                    <svg height={"24px"} width={"24px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" xmlSpace="preserve">
                        <path fill="#282828" d="M100.232 149.198c-2.8 0-5.4-1.8-7.2-5.2-22.2-41-22.4-41.4-22.4-41.6-3.2-5.1-4.9-11.3-4.9-17.6 0-19.1 15.5-34.6 34.6-34.6s34.6 15.5 34.6 34.6c0 6.5-1.8 12.8-5.2 18.2 0 0-1.2 2.4-22.2 41-1.9 3.4-4.4 5.2-7.3 5.2zm.1-95c-16.9 0-30.6 13.7-30.6 30.6 0 5.6 1.5 11.1 4.5 15.9.6 1.3 16.4 30.4 22.4 41.5 2.1 3.9 5.2 3.9 7.4 0 7.5-13.8 21.7-40.1 22.2-41 3.1-5 4.7-10.6 4.7-16.3-.1-17-13.8-30.7-30.6-30.7z" />
                        <path fill="#282828" d="M100.332 105.598c-10.6 0-19.1-8.6-19.1-19.1s8.5-19.2 19.1-19.2c10.6 0 19.1 8.6 19.1 19.1s-8.6 19.2-19.1 19.2zm0-34.3c-8.3 0-15.1 6.8-15.1 15.1s6.8 15.1 15.1 15.1 15.1-6.8 15.1-15.1-6.8-15.1-15.1-15.1z" />
                    </svg>
                </div>
                <p className='text-xs'>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className='flex items-center gap-6 text-xs'>
                <select className='bg-transparent border-0 '>
                    <option className='bg-transparent border-0' value="eng">Eng</option>
                    <option value="bd">BD</option>
                </select>
                <select className='bg-transparent'>
                    <option value="usd ">USD</option>
                    <option value="bdt">BDT</option>
                </select>
            </div>
        </div>
    );
};

export default TopNav;