import { faArrowRightFromBracket, faBagShopping, faGears, faHeart, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BadgeContext } from '../../../Provider/BadgeProvider';
import avatar from "../../../assets/avatar.jpg"

const BottomNav = ({ navOpen, setNavOpen, cartOpen, setCartOpen }) => {
    const [profileOpen, setProfileOpen] = useState(false);
    const { wishlistProductsNo, cartProductsNo } = useContext(BadgeContext);

    // for sticky nav
    const [isSticky, setIsSticky] = useState(false);

    // for button disable
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        const handleResize = () => {
            setIsDisabled(window.innerWidth >= 768);
        };

        // Initial setup
        handleScroll();
        handleResize();

        // Event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // console.log(isSticky)

    return (
        <div
            className={`bg-black text-white flex justify-between items-center mb-3 w-full container mx-auto overflow-hidden ${isSticky ? 'fixed top-0 z-10' : ''}`}
        >
            {/* menu drawer */}
            <div className='flex items-center gap-6'>
                <button
                    className='p-3'
                    type='button'
                    disabled={isDisabled}
                    style={{ background: "var(--success-color)" }}
                    onClick={() => setNavOpen(!navOpen)}
                >
                    <svg width="24px" height="24px" fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </button>
                <p className='opacity-90'>All Categories</p>
            </div>
            <div className='relative z-20'>
                <div className='flex items-center gap-4 lg:gap-6 pr-4'>
                    {/* wishlist */}
                    <Badge badgeContent={wishlistProductsNo} color="primary">
                        <Link
                            to={"/products/wishlist"}
                            className='cursor-pointer fill-[#ccc] hover:fill-white'
                        >
                            <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                        </Link>
                    </Badge>
                    {/* cart */}
                    <Badge badgeContent={cartProductsNo} color="primary">
                        {/* for smaller screen navigate to cart page */}
                        {
                            window.innerWidth < 400 ? (
                                <a href='/products/shopping-cart/'
                                    className='cursor-pointer fill-[#ccc] hover:fill-white'
                                >
                                    <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2,23H22a1,1,0,0,0,.99-1.142l-2-14A1,1,0,0,0,20,7H17V6A5,5,0,0,0,7,6V7H4a1,1,0,0,0-.99.858l-2,14A1,1,0,0,0,2,23ZM9,6a3,3,0,0,1,6,0V7H9ZM4.867,9H7v3a1,1,0,0,0,2,0V9h6v3a1,1,0,0,0,2,0V9h2.133l1.714,12H3.153Z" /></svg>
                                </a>
                            ) : (
                                <button
                                    className='cursor-pointer fill-[#ccc] hover:fill-white'
                                    type='button'
                                    onClick={() => setCartOpen(!cartOpen)}
                                >
                                    <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2,23H22a1,1,0,0,0,.99-1.142l-2-14A1,1,0,0,0,20,7H17V6A5,5,0,0,0,7,6V7H4a1,1,0,0,0-.99.858l-2,14A1,1,0,0,0,2,23ZM9,6a3,3,0,0,1,6,0V7H9ZM4.867,9H7v3a1,1,0,0,0,2,0V9h6v3a1,1,0,0,0,2,0V9h2.133l1.714,12H3.153Z" /></svg>
                                </button>
                            )
                        }
                    </Badge>
                    {/* user */}
                    <Link
                        to={"/user/dashboard"}
                        className='cursor-pointer fill-[#ccc] hover:fill-white'
                        type='button'
                        onMouseEnter={() => setProfileOpen(true)}
                        onMouseLeave={() => setProfileOpen(false)}
                    >
                        <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                    </Link>
                </div>
                {/* dropdown menu */}
                <div className=''
                    onMouseEnter={() => setProfileOpen(true)}
                    onMouseLeave={() => setProfileOpen(false)}
                >
                    <div className={`${profileOpen ? "block z-50" : "hidden"} absolute right-0 z-30`}>
                        <div className={`py-4 bg-white text-black shadow-md rounded-sm min-w-[10vw]`}>
                            <div className='mx-auto text-center grid gap-1 mb-2'>
                                <img
                                    src={avatar} alt=""
                                    className='h-12 w-12 mx-auto rounded-full'
                                />
                                <Link to={"/user/dashboard"} className='text-center hover:text-primary-color hover:underline'>Account</Link>
                            </div>
                            <div className='flex flex-col text-[#666666] text-sm'>
                                <Link
                                    to={"/products/shopping-cart/"}
                                    className='flex gap-6 items-center py-2 px-4 hover:text-black hover:bg-[#EDF2EE] fill-[#CCCCCC] hover:fill-black'
                                >
                                    <FontAwesomeIcon icon={faBagShopping} />
                                    <span>Shopping Cart</span>
                                </Link>
                                <Link
                                    to={"/products/wishlist"}
                                    className='flex gap-6 items-center py-2 px-4 hover:text-black hover:bg-[#EDF2EE] fill-[#CCCCCC] hover:fill-black'
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span>Wishlist</span>
                                </Link>
                                <Link
                                    to="/user/dashboard"
                                    className='flex gap-6 items-center py-2 px-4 hover:text-black hover:bg-[#EDF2EE] fill-[#aaa] hover:fill-black'
                                >
                                    <div className=''>
                                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 18H10V12H18V18ZM8 18H0V8H8V18ZM18 10H10V0H18V10ZM8 6H0V0H8V6Z" />
                                        </svg>
                                    </div>
                                    <span>Dashboard</span>
                                </Link>
                                <Link
                                    to={"/user/dashboard/order-history"}
                                    className='flex gap-6 items-center py-2 px-4 hover:text-black hover:bg-[#EDF2EE] fill-[#CCCCCC] hover:fill-black'
                                >
                                    <FontAwesomeIcon icon={faRotate} />
                                    <span>Order History</span>
                                </Link>
                                <Link
                                    to={"/user/dashboard/setting"}
                                    className='flex gap-6 items-center py-2 px-4 hover:text-black hover:bg-[#EDF2EE] fill-[#CCCCCC] hover:fill-black'
                                >
                                    <FontAwesomeIcon icon={faGears} />
                                    <span>Settings</span>
                                </Link>
                                <Link
                                    className='flex gap-6 items-center py-2 px-4 hover:text-black hover:bg-[#EDF2EE] fill-[#CCCCCC] hover:fill-black'
                                >
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                    <span>Log-out</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;