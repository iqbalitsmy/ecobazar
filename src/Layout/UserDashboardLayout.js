import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBagShopping, faGears, faHeart, faRotate } from '@fortawesome/free-solid-svg-icons';

const UserDashboardLayout = () => {
    // for active link
    const location = useLocation();
    const currentUrl = location.pathname;
    const splitPath = currentUrl.split("/");

    return (
        <section className='flex mt-10 gap-6 min-h-[80vh]'>
            {/* navigation */}
            <aside className='border-solid border-2 rounded-md border-gray-100 py-4 h-fit'>
                <h3 className='text-xl font-medium pl-4 pb-4'>Navigation</h3>
                <div className='flex flex-col w-48 sm:w-52 lg:min-w-72 text-lg text-[#666666]'>
                    <NavLink
                        to={""}
                        className={({ isActive, isPending }) => {
                            return `${isActive && splitPath[splitPath.length - 1] === "dashboard" ? "text-black bg-[#EDF2EE] border-green-500 fill-black" : ""} flex gap-6 items-center py-4 pl-4 hover:text-black hover:bg-[#EDF2EE] border-solid border-0 border-l-4 border-transparent hover:border-green-500 fill-[#CCCCCC] hover:fill-black`
                        }}
                    >
                        <div className=''>
                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 18H10V12H18V18ZM8 18H0V8H8V18ZM18 10H10V0H18V10ZM8 6H0V0H8V6Z" />
                            </svg>
                        </div>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink
                        to={"order-history"}
                        className={({ isActive, isPending }) => (
                            `${isActive ? "text-black bg-[#EDF2EE] border-green-500 fill-black" : ""} flex gap-6 items-center py-4 pl-4 hover:text-black hover:bg-[#EDF2EE] border-solid border-0 border-l-4 border-transparent hover:border-green-500 fill-[#CCCCCC] hover:fill-black`
                        )}
                    >
                        <FontAwesomeIcon icon={faRotate} />
                        <span>Order History</span>
                    </NavLink>
                    <NavLink
                        to={"wishlist"}
                        className={({ isActive, isPending }) => (
                            `${isActive ? "text-black bg-[#EDF2EE] border-green-500 fill-black" : ""} flex gap-6 items-center py-4 pl-4 hover:text-black hover:bg-[#EDF2EE] border-solid border-0 border-l-4 border-transparent hover:border-green-500 fill-[#CCCCCC] hover:fill-black`
                        )}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                        <span>Wishlist</span>
                    </NavLink>
                    <NavLink
                        to={"shopping-cart"}
                        className={({ isActive, isPending }) => (
                            `${isActive ? "text-black bg-[#EDF2EE] border-green-500 fill-black" : ""} flex gap-6 items-center py-4 pl-4 hover:text-black hover:bg-[#EDF2EE] border-solid border-0 border-l-4 border-transparent hover:border-green-500 fill-[#CCCCCC] hover:fill-black`
                        )}
                    >
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span>Shopping Cart</span>
                    </NavLink>
                    <NavLink
                        to={"setting"}
                        className={({ isActive, isPending }) => (
                            `${isActive ? "text-black bg-[#EDF2EE] border-green-500 fill-black" : ""} flex gap-6 items-center py-4 pl-4 hover:text-black hover:bg-[#EDF2EE] border-solid border-0 border-l-4 border-transparent hover:border-green-500 fill-[#CCCCCC] hover:fill-black`
                        )}
                    >
                        <FontAwesomeIcon icon={faGears} />
                        <span>Settings</span>
                    </NavLink>
                    <Link
                        to={"/"}
                        className='flex gap-6 items-center py-4 pl-4 hover:text-black hover:bg-[#EDF2EE] border-solid border-0 border-l-4 border-transparent hover:border-green-500 fill-[#CCCCCC] hover:fill-black'
                    >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        <span>Log-out</span>
                    </Link>
                </div>
            </aside>
            <aside className='w-full'>
                <Outlet></Outlet>
            </aside>
        </section>
    );
};

export default UserDashboardLayout;