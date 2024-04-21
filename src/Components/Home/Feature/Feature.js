import React from 'react';

const Feature = () => {
    return (
        <div className='flex justify-between flex-wrap'>
            <div className='flex items-center gap-4 py-6'>
                <div className='p-3 rounded-full bg-green-50'>
                    <svg height={"38px"} fill="#00B207" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16.5 6H3V17.25H3.375H4.5H4.52658C4.70854 18.5221 5.80257 19.5 7.125 19.5C8.44743 19.5 9.54146 18.5221 9.72342 17.25H15.0266C15.2085 18.5221 16.3026 19.5 17.625 19.5C18.9474 19.5 20.0415 18.5221 20.2234 17.25H21.75V12.4393L18.3107 9H16.5V6ZM16.5 10.5V14.5026C16.841 14.3406 17.2224 14.25 17.625 14.25C18.6721 14.25 19.5761 14.8631 19.9974 15.75H20.25V13.0607L17.6893 10.5H16.5ZM15 15.75V9V7.5H4.5V15.75H4.75261C5.17391 14.8631 6.07785 14.25 7.125 14.25C8.17215 14.25 9.07609 14.8631 9.49739 15.75H15ZM17.625 18C17.0037 18 16.5 17.4963 16.5 16.875C16.5 16.2537 17.0037 15.75 17.625 15.75C18.2463 15.75 18.75 16.2537 18.75 16.875C18.75 17.4963 18.2463 18 17.625 18ZM8.25 16.875C8.25 17.4963 7.74632 18 7.125 18C6.50368 18 6 17.4963 6 16.875C6 16.2537 6.50368 15.75 7.125 15.75C7.74632 15.75 8.25 16.2537 8.25 16.875Z"></path> </g></svg>
                </div>
                <div className='space-y-1'>
                    <p className='font-bold text-gray-700'>Free Shipping</p>
                    <p className='font-light text-gray-400'>Free shipping with discount</p>
                </div>
            </div>
            <div className='flex items-center gap-4 py-6'>
                <div className='p-3 rounded-full bg-green-50'>
                    <svg height={"38px"} fill="#00B207" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                        <path d="M116.288 92.838h-4V52.875c0-6.149-1.318-12.057-3.92-17.562l3.617-1.709c2.854 6.043 4.303 12.526 4.303 19.271v39.963zM55.72 125.425c-29.468 0-44.409-10.964-44.409-32.587V52.875c0-6.837 1.486-13.402 4.418-19.512l3.606 1.73c-2.67 5.566-4.024 11.548-4.024 17.782v39.963c0 19.236 13.218 28.587 40.409 28.587v4z" />
                        <path d="M61.78 125.449h-9.539c-3.426 0-6.213-2.804-6.213-6.251s2.787-6.251 6.213-6.251h9.539c3.425 0 6.211 2.804 6.211 6.251s-2.786 6.251-6.211 6.251zm-9.539-8.502c-1.22 0-2.213 1.01-2.213 2.251s.993 2.251 2.213 2.251h9.539c1.219 0 2.211-1.01 2.211-2.251s-.992-2.251-2.211-2.251h-9.539zM19.402 38.256a7.398 7.398 0 0 1-3.86-1.089c-3.506-2.139-4.635-6.757-2.517-10.292 9.12-15.23 25.081-24.323 42.696-24.323h16.157c17.615 0 33.577 9.093 42.698 24.324 2.118 3.535.988 8.153-2.52 10.293a7.383 7.383 0 0 1-3.856 1.088c-2.637 0-5.024-1.357-6.389-3.629C95.413 23.939 84.224 17.56 71.877 17.56H55.72c-12.342 0-23.532 6.379-29.933 17.065a7.482 7.482 0 0 1-6.385 3.631zM55.72 6.551c-16.195 0-30.873 8.366-39.264 22.378-.994 1.66-.469 3.823 1.17 4.824a3.417 3.417 0 0 0 4.729-1.183c7.13-11.904 19.603-19.01 33.365-19.01h16.157c13.766 0 26.239 7.106 33.364 19.01a3.43 3.43 0 0 0 2.958 1.686c.623 0 1.234-.173 1.77-.501 1.644-1.003 2.169-3.166 1.175-4.825-8.392-14.013-23.072-22.379-39.267-22.379H55.72zM15.572 101.688C6.985 101.688 0 94.644 0 85.986V69.023c0-8.657 6.985-15.7 15.572-15.7v4C9.191 57.323 4 62.572 4 69.023v16.963c0 6.452 5.191 11.701 11.572 11.701v4.001z" />
                        <path d="M23.291 105.232h-5.095c-3.618 0-6.561-2.964-6.561-6.606v-41.96c0-3.643 2.943-6.606 6.561-6.606h5.095c3.618 0 6.562 2.963 6.562 6.606v41.96c0 3.643-2.944 6.606-6.562 6.606zM18.196 54.06c-1.412 0-2.561 1.169-2.561 2.606v41.96c0 1.438 1.149 2.606 2.561 2.606h5.095c1.413 0 2.562-1.169 2.562-2.606v-41.96c0-1.437-1.149-2.606-2.562-2.606h-5.095z" />
                        <g>
                            <path d="M112.43 101.975v-4c6.38 0 11.57-5.251 11.57-11.705V69.307c0-6.454-5.19-11.704-11.57-11.704v-4c8.586 0 15.57 7.044 15.57 15.704V86.27c0 8.66-6.984 15.705-15.57 15.705z" />
                            <path d="M109.809 105.234h-5.096c-3.618 0-6.563-2.964-6.563-6.606V56.667c0-3.642 2.944-6.604 6.563-6.604h5.096c3.617 0 6.56 2.962 6.56 6.604v41.961c-.001 3.643-2.943 6.606-6.56 6.606zm-5.096-51.171c-1.413 0-2.563 1.168-2.563 2.604v41.961c0 1.438 1.149 2.606 2.563 2.606h5.096c1.411 0 2.56-1.169 2.56-2.606V56.667c0-1.436-1.148-2.604-2.56-2.604h-5.096z" />
                        </g>
                    </svg>
                </div>
                <div className='space-y-1'>
                    <p className='font-bold text-gray-700'>Great Support 24/7</p>
                    <p className='font-light text-gray-400'>Instant access to Contact</p>
                </div>
            </div>
            <div className='flex items-center gap-4 py-6 border-solid border-[#00B207] border-0 border-b-2'>
                <div className='p-3 rounded-full bg-[#00B207]'>
                    <svg  height={"38px"} fill="#ddd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M27.5 8.21A2.77 2.77 0 0 0 26 6.33l-8.77-4.06a2.8 2.8 0 0 0-2.4 0L6.09 6.34a2.74 2.74 0 0 0-1.53 1.84A19.23 19.23 0 0 0 6 21.32a18 18 0 0 0 9 8.45 2.83 2.83 0 0 0 1 .23 2.74 2.74 0 0 0 1.15-.25A18.21 18.21 0 0 0 26 21.32a19.65 19.65 0 0 0 1.5-13.11zm-3.3 12.21a16.33 16.33 0 0 1-7.85 7.51.82.82 0 0 1-.65 0 15.94 15.94 0 0 1-7.95-7.51A17.26 17.26 0 0 1 6.5 8.66a.75.75 0 0 1 .43-.51l8.75-4.07a.8.8 0 0 1 .71 0l8.73 4.06a.79.79 0 0 1 .43.52 17.6 17.6 0 0 1-1.35 11.76z" />
                        <path d="m20.2 11.4-5.23 7-3.19-4a1 1 0 0 0-1.4-.16 1 1 0 0 0-.16 1.41l4 5A1 1 0 0 0 15 21a1 1 0 0 0 .78-.4l6-8a1 1 0 1 0-1.6-1.2z" />
                    </svg>
                </div>
                <div className='space-y-1'>
                    <p className='font-bold text-gray-700'>100% Secure Payment</p>
                    <p className='font-light text-gray-400'>We ensure your money is save</p>
                </div>
            </div>
            <div className='flex items-center gap-4 py-6'>
                <div className='p-3 rounded-full bg-green-50'>
                    <svg height={"38px"} fill="#00B207" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path d="m116 90.92-54 24V42.47l54-18.41zm2-71.62-.13.07-5.91 2L60 39.06l-1.93.64v79.4l1.93.9 1.93-.9 57.91-25.74V20z" /><path d="m60 39.06-13.71-4.7-5.91-2-12.87-4.44h-.07l-6.11-2.05-13.26-4.51-5.91-2h-.07L.16 20v73.36l57.91 25.74 1.93.9 1.93-.9V39.7zm-1.93 75.86-54-24V24.06l15.44 5.28 3.86 1.29 15.4 5.27 3.86 1.29 15.44 5.28z" /><path d="m59.231 103.276 57.882-25.795 1.572 3.526-57.883 25.795z" /><path d="m1.307 81.028 1.567-3.527 57.91 25.734-1.568 3.527zM119.84 19.95l-2.51 3.21-5.41-1.8L60 4.12 8.07 21.36l-5.4 1.8-2.51-3.15 1.93-.64h.06L60 0l57.97 19.3 1.87.65z" /><path d="m41.31 36.06-.56-1.67-1.98.16v-1.39l1.32-.76L98 13.1l1.22 3.66-57.91 19.3z" /><path d="m42.63 62.65-23.17-7.73V26.54L78.69 6.67l1.23 3.65-56.6 18.99v22.83l15.45 5.15V34.23h3.86v28.42z" /></svg>
                </div>
                <div className='space-y-1'>
                    <p className='font-bold text-gray-700'>Money-Back Guarantee</p>
                    <p className='font-light text-gray-400'>30 days money-back</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;