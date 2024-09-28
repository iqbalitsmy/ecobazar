import React, { useContext, useEffect, useState } from 'react';
import Region from '../../Shared/Region/Region';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './UserSetting.css'
import { PageNavContext } from '../../Provider/PageNavProvider';
import profile from "../../assets/avatar.jpg"

const UserSetting = () => {
    const { setPageNav } = useContext(PageNavContext);

    const [passwordVisible, setPasswordVisible] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const togglePasswordVisibility = (field) => {
        setPasswordVisible((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    // handle image
    const [selectedImage, setSelectedImage] = useState(profile);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    // for page navigation
    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "Settings", navLink: "" }]);
    }, [setPageNav]);

    return (
        <section className='mb-20'>
            <div className='mb-4'>
                <div className='border-solid border-2 border-gray-100 pl-4 py-4 text-xl font-medium rounded-t-md'>
                    <h2>Account Settings</h2>
                </div>
                <div className='border-solid border-2 border-t-0 border-gray-100 pl-4 py-4 rounded-b-md'>
                    <form action="" className='grid grid-cols-2 gap-4 items-center'>
                        <div className=''>
                            <div className='space-y-2 mb-2'>
                                <label className='text-sm' htmlFor="fname">First name</label><br />
                                <input
                                    style={{
                                        outline: "none"
                                    }}
                                    className="w-full px-3 py-2  border-solid border-2 border-gray-100 focus:border-green-400 rounded-md pr-10 text-gray-600"
                                    type="text" name="fname" id=""
                                    value={"Dianne"}
                                    placeholder='Enter your first name' required />
                            </div>
                            <div className='space-y-2 mb-2'>
                                <label className='text-sm' htmlFor="lname">Last name</label><br />
                                <input
                                    style={{
                                        outline: "none"
                                    }}
                                    className="w-full px-3 py-2  border-solid border-2 border-gray-100 focus:border-green-400 rounded-md pr-10 text-gray-600"
                                    type="text" name="lname" id=""
                                    value={"Russell"}
                                    placeholder='Enter your last name' required />
                            </div>
                            <div className='space-y-2 mb-2'>
                                <label className='text-sm' htmlFor="email">Email</label><br />
                                <input
                                    style={{
                                        outline: "none"
                                    }}
                                    className="w-full px-3 py-2  border-solid border-2 border-gray-100 focus:border-green-400 rounded-md pr-10 text-gray-600"
                                    type="email" name="email" id=""
                                    value={"dianne.russell@gmail.com"}
                                    placeholder='Enter your email' required />
                            </div>
                            <div className='space-y-2 mb-4'>
                                <label className='text-sm' htmlFor="number">Phone Number</label><br />
                                <input
                                    style={{
                                        outline: "none"
                                    }}
                                    className="w-full px-3 py-2 border-solid border-2 border-gray-100 focus:border-green-400 rounded-md pr-10 text-gray-600"
                                    type="tel" name="number" id=""
                                    value={"(603) 555-0123"}
                                    placeholder='Enter your phone number' required />
                            </div>
                            <input className='text-sm font-semibold px-4 md:px-6 py-2 md:py-3 bg-primary-color hover:bg-green-600 text-white rounded-full cursor-pointer' type="submit" value="Save Changes" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            {selectedImage && (
                                <div className="mb-4">
                                    <img src={selectedImage} loading="lazy" alt="Selected" className="h-28 w-28 md:h-36 md:w-36 lg:h-52 lg:w-52 rounded-full shadow-md object-contain" />
                                </div>
                            )}
                            <label className="cursor-pointer px-2 md:px-4 py-2 md:py-2 text-sm font-semibold text-primary-color rounded-full shadow-md border-solid border-2 border-primary-color hover:bg-gray-50">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                                Choose Image
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <div className='mb-4'>
                <div className='border-solid border-2 border-gray-100 pl-4 py-4 text-xl font-medium rounded-t-md'>
                    <h2>Billing Address</h2>
                </div>
                <form action="" className='border-solid border-2 border-t-0 border-gray-100 px-4 py-4 rounded-b-md'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4 mb-2'>
                        <div className='space-y-2 w-full'>
                            <label className='text-sm' htmlFor="fname">First name</label><br />
                            <input
                                style={{
                                    outline: "none"
                                }}
                                className="pl-3 py-2 border-solid border-2 border-gray-100 focus:border-green-400 rounded-md text-gray-600 w-full"
                                type="text" name="fname" id=""
                                placeholder='Enter your first name' required />
                        </div>
                        <div className='space-y-2 w-full'>
                            <label className='text-sm' htmlFor="lname">Last name</label><br />
                            <input
                                style={{
                                    outline: "none"
                                }}
                                className="pl-3 py-2 border-solid border-2 border-gray-100 focus:border-green-400 rounded-md text-gray-600 w-full"
                                type="text" name="lname" id=""
                                placeholder='Enter your last name' required />
                        </div>
                        <div className='space-y-2 w-full'>
                            <label className='text-sm' htmlFor="cname">Company Name (optional)</label><br />
                            <input
                                style={{
                                    outline: "none"
                                }}
                                className="pl-3 py-2 border-solid border-2 border-gray-100 focus:border-green-400 rounded-md text-gray-600 w-full"
                                type="text" name="cname" id=""
                                placeholder='Enter your company name' />
                        </div>
                    </div>
                    <div className='space-y-2 w-full mb-2'>
                        <label className='text-sm' htmlFor="street">Street Address</label><br />
                        <input
                            style={{
                                outline: "none"
                            }}
                            className="pl-3 py-2 border-solid border-2 border-gray-100 focus:border-green-500 rounded-md text-gray-600 w-full"
                            type="text" name="street" id=""
                            placeholder='Enter your address' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4 mb-2'>
                        <div className='space-y-2'>
                            <Region></Region>
                        </div>
                        <div className='space-y-2 w-full'>
                            <label htmlFor="state">States</label><br />
                            <select
                                className='pl-3 py-2 w-full border-solid border-2 border-gray-100 focus:border-green-500 rounded-sm bg-transparent'
                                name="state" id="">
                                <option className='bg-white' value="alabama">Alabama</option>
                                <option className='bg-white' value="alaska">Alaska</option>
                                <option className='bg-white' value="florida">Florida</option>
                                <option className='bg-white' value="california">California</option>
                                <option className='bg-white' value="hawaii">Hawaii</option>
                                <option className='bg-white' value="new-york">New York</option>
                            </select>
                        </div>
                        <div className='space-y-2 w-full'>
                            <label className='text-sm' htmlFor="zip">Zip Code</label>
                            <input
                                style={{
                                    outline: "none",
                                }}
                                className="pl-3 py-2 border-solid border-2 border-gray-100 focus:border-green-500 rounded-md text-gray-600 w-full"
                                type="number" name="zip" id=""
                                placeholder='Enter your zip code' />
                        </div>
                    </div>
                    <div className='flex gap-4 mb-4'>
                        <div className='space-y-2 w-full'>
                            <label className='text-sm' htmlFor="email">Email</label>
                            <input
                                style={{
                                    outline: "none",
                                }}
                                className="pl-3 py-2 border-solid border-2 border-gray-100 focus:border-green-500 rounded-md text-gray-600 w-full"
                                type="email" name="email" id=""
                                placeholder='Enter your email' required />
                        </div>
                        <div className='space-y-2 w-full'>
                            <label className='text-sm' htmlFor="number">Phone Number</label>
                            <input
                                style={{
                                    outline: "none",
                                }}
                                className="pl-3 py-2 border-solid border-2 border-gray-100 focus:border-green-500 rounded-md text-gray-600 w-full"
                                type="tel" name="number" id=""
                                placeholder='Enter your phone number' required />
                        </div>
                    </div>
                    <input className='text-sm font-semibold px-4 md:px-6 py-2 md:py-3 bg-primary-color hover:bg-green-600 text-white rounded-full cursor-pointer' type="submit" value="Save Changes" />
                </form>
            </div>
            <div>
                <div className='border-solid border-2 border-gray-100 pl-4 py-4 text-xl font-medium rounded-t-md'>
                    <h2>Change Password</h2>
                </div>
                <form className='border-solid border-2 border-t-0 border-gray-100 px-4 py-4 rounded-b-md'>
                    <div className='mb-2 space-y-2'>
                        <label className='text-sm' htmlFor="currentPassword">Current Password</label>
                        <div className="relative w-full">
                            <input
                                id="currentPassword" name='currentPassword'
                                type={passwordVisible.currentPassword ? "text" : "password"}
                                style={{
                                    outline: "none"
                                }}
                                placeholder="Password"
                                className="w-full px-3 py-3  border-solid border-2 border-gray-100 focus:border-green-400 rounded-md pr-10"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                                onClick={() => togglePasswordVisibility("currentPassword")}
                            >
                                <FontAwesomeIcon icon={passwordVisible.currentPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                        <div className='space-y-2 w-full'>
                            <label className='text-sm' htmlFor="newPassword">New Password</label>
                            <div className="relative">
                                <input
                                    id="newPassword" name='newPassword'
                                    type={passwordVisible.newPassword ? "text" : "password"}
                                    style={{
                                        outline: "none"
                                    }}
                                    placeholder="Password"
                                    className="w-full px-3 py-3  border-solid border-2 border-gray-100 focus:border-green-400 rounded-md pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                                    onClick={() => togglePasswordVisibility("newPassword")}
                                >
                                    <FontAwesomeIcon icon={passwordVisible.newPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>
                        <div className='space-y-2 w-full'>
                            <label className='text-sm' htmlFor="confirmPassword">Confirm Password</label>
                            <div className="relative w-full">
                                <input
                                    id="confirmPassword" name='confirmPassword'
                                    type={passwordVisible.confirmPassword ? "text" : "password"}
                                    style={{
                                        outline: "none"
                                    }}
                                    placeholder="Password"
                                    className="w-full px-3 py-3  border-solid border-2 border-gray-100 focus:border-green-400 rounded-md pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                                    onClick={() => togglePasswordVisibility("confirmPassword")}
                                >
                                    <FontAwesomeIcon icon={passwordVisible.confirmPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input className='text-sm font-semibold px-4 md:px-6 py-2 md:py-3 bg-primary-color hover:bg-green-600 text-white rounded-full cursor-pointer' type="submit" value="Change Password" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UserSetting;