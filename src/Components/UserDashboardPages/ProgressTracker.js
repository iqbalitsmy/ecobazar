import React from 'react';

// Define the steps for the progress tracker
const steps = [
    { id: 1, name: 'Order Placed', status: 'completed' },
    { id: 2, name: 'Processing', status: 'current' },
    { id: 3, name: 'On the way', status: 'upcoming' },
    { id: 4, name: 'Delivered', status: 'upcoming' },
];

const ProgressTracker = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <div className=''>
                <div className='w-full flex justify-between items-center text-center'>
                    {/* <div className='bg-gray-100 rounded-full absolute z-0 bottom-[60px] right-0 left-0'>
                        <div className='rounded-full bg-primary-color w-[50%] h-3'>
                        </div>
                    </div> */}
                    <div className='relative'>
                        <div className='bg-primary-color text-white text-2xl inline-block rounded-full px-4 py-2 mb-4 after:absolute after:top-1/2 after:transform  after:-translate-y-1/2 after:w-32 after:h-4 after:bg-primary-color after:-z-10'>
                            <span className=''>&#10003;</span>
                        </div>
                        <p className='text-secondary-color'>Order received</p>
                    </div>
                    <div className=''>
                        <div className='bg-primary-color text-white inline-block rounded-full px-4 py-3 mb-4'>
                            <span className=''>02</span>
                        </div>
                        <p className='text-secondary-color'>Processing</p>
                    </div>
                    <div className=''>
                        <div className='bg-white text-secondary-color border-dashed border-secondary-color border-2 inline-block rounded-full px-4 py-3 mb-4'>
                            <span>03</span>
                        </div>
                        <p>On the way</p>
                    </div>
                    <div className=''>
                        <div className='bg-white text-secondary-color border-dashed border-secondary-color border-2 inline-block rounded-full px-4 py-3 mb-4'>
                            <span>04</span>
                        </div>
                        <p>Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressTracker;
