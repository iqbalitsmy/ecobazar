import React from 'react';

import logo from "../../assets/Logo.png"

const Newsletter = () => {
    return (
        <section className='bg-[#F2F2F2] py-10 px-4'>
            <div className='container mx-auto flex justify-center md:justify-between items-center flex-wrap gap-10'>
                <figure className='hidden sm:block'>
                    <img className='max-w-[20vW]' src={logo} alt="Ecobazar" />
                </figure>
                <div className='text-center md:text-left'>
                    <h4 className='text-2xl font-medium'>Subscribe our Newsletter</h4>
                    <p className='text-sm text-gray-400 text-wrap'>Pellentesque eu nibh eget mauris congue mattis matti.</p>
                </div>
                <div className='relative max-w-md w-full'>
                    <input
                        className='py-2 pl-6 rounded-l-full font-medium w-full'
                        style={{
                            outline: "none"
                        }}
                        type="text" name="email" id=""
                        placeholder='Your email address'
                    />
                    <input className='px-8 rounded-3xl text-base font-semibold bg-green-500 hover:bg-green-600 text-white absolute top-0 bottom-0 -right-0 cursor-pointer' type="button" value="Subscribe" />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;