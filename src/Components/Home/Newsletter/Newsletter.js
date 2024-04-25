import React from 'react';

import logo from "../../../assets/Logo.png"

const Newsletter = () => {
    return (
        <section className='bg-[#F2F2F2] p-10'>
            <div className='container mx-auto flex justify-between items-center flex-wrap'>
                <figure>
                    <img className='max-w-[20vW]' src={logo} alt="Ecobazar" />
                </figure>
                <div>
                    <h4 className='text-lg font-semibold'>Subscribe our Newsletter</h4>
                    <p className='text-sm font-light text-gray-500 text-wrap'>Pellentesque eu nibh eget mauris congue mattis matti.</p>
                </div>
                <div className='relative'>
                    <input className='py-2 pl-4 rounded-l-full' type="text" name="email" id="" placeholder='Your email address' />
                    <input className='px-6 py-2 rounded-3xl text-lg font-semibold bg-green-500 hover:bg-green-600 text-white absolute -right-28' type="button" value="Subscribe" />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;