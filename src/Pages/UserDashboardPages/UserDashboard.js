import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
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
                    <Link className='text-[#00B207] font-medium'>View All</Link>
                </div>
                <table className='w-full mb-8'>
                    <thead className='text-left'>
                        <tr className='uppercase bg-gray-100 text-gray-700'>
                            <th className='text-xs font-normal py-3 pl-4'>Order ID</th>
                            <th className='text-xs font-normal py-3'>Date</th>
                            <th className='text-xs font-normal py-3'>Total</th>
                            <th className='text-xs font-normal py-3'>Status</th>
                            <th className='text-xs font-normal py-3'></th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className='text-gray-800'>
                            <td className='text-sm py-3 pl-4'>#{"738"}</td>
                            <td className='text-sm py-3'>8 Sep, 2020</td>
                            <td className='text-sm py-3'><span className='font-medium'>$135.00 </span>(5 Products)</td>
                            <td className='text-sm py-3'>Processing</td>
                            <td className='text-center'>
                                <Link className='text-[#00B207] font-medium'>View Details</Link>
                            </td>
                        </tr>
                        <tr className='text-gray-800'>
                            <td className='text-sm py-3 pl-4'>#{"738"}</td>
                            <td className='text-sm py-3'>24 May, 2020</td>
                            <td className='text-sm py-3'><span className='font-medium'>$25.00 </span>(1 Products)</td>
                            <td className='text-sm py-3'>on the way</td>
                            <td className='text-center'>
                                <Link className='text-[#00B207] font-medium'>View Details</Link>
                            </td>
                        </tr>
                        <tr className='text-gray-800'>
                            <td className='text-sm py-3 pl-4'>#{"738"}</td>
                            <td className='text-sm py-3'>22 Oct, 2020</td>
                            <td className='text-sm py-3'><span className='font-medium'>$250.00 </span>(4 Products)</td>
                            <td className='text-sm py-3'>Completed</td>
                            <td className='text-center'>
                                <Link className='text-[#00B207] font-medium'>View Details</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserDashboard;