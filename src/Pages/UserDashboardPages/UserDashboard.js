import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { orderHistory } from '../../assets/fakeData/fakeData';
import OrderHistory from './UserOrdersHistoryPage/OrderHistory';
import { PageNavContext } from '../../Provider/PageNavProvider';

const UserDashboard = () => {
    const { setPageNav } = useContext(PageNavContext);

    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "dashboard", navLink: "" }]);
    }, [setPageNav])

    return (
        <>
            <div className='flex flex-col md:flex-row justify-between gap-4 mb-4 '>
                <aside className='text-center flex flex-col justify-center items-center space-y-1 border-solid border-2 border-gray-100 rounded-md w-full py-6'>
                    <img
                        className='h-24 w-24 rounded-full object-cover'
                        loading="lazy"
                        src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                        alt="Profile"
                    />
                    <h3 className='text-lg font-semibold'>Dianne Russell</h3>
                    <p className='text-gray-500'>Customer</p>
                    <Link className='text-[#00B207] font-medium'>Edit Profile</Link>
                </aside>
                <aside className='pl-4 lg:pl-6 py-6 border-solid border-2 border-gray-100 rounded-md w-full'>
                    <p className='text-gray-500 mb-3 uppercase'>Billing Address</p>
                    <h3 className='text-lg font-semibold mb-2'>Dianne Russell</h3>
                    <p className='text-gray-500 mb-2'>4140 Parker Rd. Allentown, New Mexico 31134</p>
                    <p className='mb-2'>dainne.ressell@gmail.com</p>
                    <p className='mb-4'>(671) 555-0110</p>
                    <Link className='text-[#00B207] font-medium'>Edit Address</Link>
                </aside>
            </div>
            <div className='w-full border-solid border-2 border-gray-100 rounded-md mb-6'>
                <div className='flex justify-between m-4 mb-6 text-xl font-medium'>
                    <p>Recent Order History</p>
                    <Link to={"/user/dashboard/order-history"} className='text-[#00B207] font-medium'>View All</Link>
                </div>
                <OrderHistory orders={orderHistory.slice(0, 3)}></OrderHistory>
            </div>
        </>
    );
};

export default UserDashboard;