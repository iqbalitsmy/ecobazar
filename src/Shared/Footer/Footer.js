import React from 'react';
import logo from "../../assets/Logo-white.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <section className='bg-[#1A1A1A]'>
            <div className='container mx-5 sm:mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-between text-gray-50 gap-6 py-16'>

                <div className='space-y-4'>
                    <figure>
                        <a href={"/"}>
                            <img className='max-w-[20vW]' src={logo} alt="Ecobazar" />
                        </a>
                    </figure>
                    <p className='text-sm text-gray-400 md:w-3/4'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magn.</p>
                    {/* social media */}
                    <div className='flex items-center gap-2'>
                        <div className='p-2 rounded-full hover:bg-[#00B207] fill-gray-300 hover:fill-white cursor-pointer'>
                            <svg height="24px"  viewBox="0 0 290 290">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M205.807,0h-15.694c-43.62,0-79.107,35.488-79.107,79.108v33.386H84.193c-2.761,0-5,2.239-5,5v40c0,2.761,2.239,5,5,5 h26.811V285c0,2.761,2.239,5,5,5h40c2.761,0,5-2.239,5-5V162.494h39.786c2.761,0,5-2.239,5-5v-40c0-2.761-2.239-5-5-5h-39.786 V79.108c0-16.05,13.058-29.108,29.107-29.108h15.694c2.761,0,5-2.239,5-5V5C210.807,2.239,208.568,0,205.807,0z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className='p-2 rounded-full hover:bg-[#00B207] fill-gray-300 hover:fill-white cursor-pointer'>
                            <svg height={"24px"} version="1.1" viewBox="0 0 512 512" xmlSpace="preserve">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="7935ec95c421cee6d86eb22ecd12f847">
                                        <path style={{ display: 'inline' }} d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='p-2 rounded-full hover:bg-[#00B207] fill-gray-300 hover:fill-white cursor-pointer'>
                            <svg height={"24px"} version="1.1" viewBox="0 0 512 512" xmlSpace="preserve">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="7935ec95c421cee6d86eb22ecd12951c">
                                        <path style={{ display: 'inline' }} d="M220.646,338.475C207.223,408.825,190.842,476.269,142.3,511.5 c-14.996-106.33,21.994-186.188,39.173-270.971c-29.293-49.292,3.518-148.498,65.285-124.059 c76.001,30.066-65.809,183.279,29.38,202.417c99.405,19.974,139.989-172.476,78.359-235.054 C265.434-6.539,95.253,81.775,116.175,211.161c5.09,31.626,37.765,41.22,13.062,84.884c-57.001-12.65-74.005-57.6-71.822-117.533 c3.53-98.108,88.141-166.787,173.024-176.293c107.34-12.014,208.081,39.398,221.991,140.376 c15.67,113.978-48.442,237.412-163.23,228.529C258.085,368.704,245.023,353.283,220.646,338.475z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className='p-2 rounded-full hover:bg-[#00B207] fill-gray-300 hover:fill-white cursor-pointer'>
                            <svg height={"24px"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* My Account */}
                <div className='space-y-2'>
                    <h4 className='text-xl font-semibold'>My Account</h4>
                    <hr className='border-solid border-b border-green-600 w-[24px]' />
                    <ul className='text-gray-300 space-y-2'>
                        <li><a className='hover:text-gray-50' href="/user/dashboard">My Account</a></li>
                        <li><a className='hover:text-gray-50' href="/user/dashboard/order-history">Order History</a></li>
                        <li><a className='hover:text-gray-50' href="/user/dashboard/shopping-cart">Shopping Cart</a></li>
                        <li><a className='hover:text-gray-50' href="/user/dashboard/wishlist">Wishlist</a></li>
                    </ul>
                </div>
                {/* Helps */}
                <div className='space-y-2'>
                    <h4 className='text-xl font-semibold'>Helps</h4>
                    <hr className='border-solid border-b border-green-600 w-[24px]' />
                    <ul className='text-gray-300 space-y-2'>
                        <li><a className='hover:text-gray-50' href="/contact">Contact</a></li>
                        <li><a className='hover:text-gray-50' href="/faqs">Faqs</a></li>
                        <li><a className='hover:text-gray-50' href="/terms">Terms & Condition</a></li>
                        <li><a className='hover:text-gray-50' href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                {/* proxy */}
                <div className='space-y-2'>
                    <h4 className='text-xl font-semibold'>Proxy</h4>
                    <hr className='border-solid border-b border-green-600 w-[24px]' />
                    <ul className='text-gray-300 space-y-2'>
                        <li><a className='hover:text-gray-50' href="/about">About</a></li>
                        <li><a className='hover:text-gray-50' href="/shop">Shop</a></li>
                        <li><a className='hover:text-gray-50' href="/product">Product</a></li>
                        <li><a className='hover:text-gray-50' href="/track-order">Track Order</a></li>
                    </ul>
                </div>
                {/* Download Mobile App */}
                <div className='space-y-4'>
                    <h4 className='text-lg font-semibold'>Download Mobile App</h4>
                    <hr className='border-solid border-b border-green-600 w-[24px]' />
                    <div className='relative flex flex-wrap gap-2 items-center'>
                        <div className='flex items-center bg-[#444] p-2 gap-2'>
                            <FontAwesomeIcon className='text-3xl' icon={faApple} />
                            <div>
                                <p className='text-[12px] text-gray-400'>Download on the</p>
                                <p className='font-semibold'>App Store</p>
                            </div>
                        </div>
                        <div className='flex items-center bg-[#444] p-2 gap-2'>
                            <FontAwesomeIcon className='text-2xl' icon={faGooglePlay} />
                            <div>
                                <p className='text-[12px] text-gray-400'>Download on the</p>
                                <p className='font-semibold'>Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center text-gray-400 border-solid border-0 border-t-[1px] border-gray-400 py-8 border-opacity-40'>
                <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
            </div>

        </section>
    );
};

export default Footer;