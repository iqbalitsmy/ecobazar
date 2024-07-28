import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { PageNavContext } from '../../Provider/PageNavProvider';

const RegistrationPage = () => {
    const { setPageNav } = useContext(PageNavContext)
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "Create Account", navLink: "" }])
    }, [setPageNav]);

    return (
        <section className='min-h-[80vh] flex justify-center pt-20'>
            <div className='mx-2 px-6 py-6 h-fit shadow-md rounded-md w-full md:max-w-[480px]'>
                <h1 className='text-4xl font-bold text-center mb-8'>Create Account</h1>
                <form className='space-y-3 w-full mx-auto'>
                    <div className='w-full'>
                        <input
                            className='pl-3 py-3 border-solid border-2 border-gray-200 rounded-md w-full'
                            style={{
                                outline: "none"
                            }}
                            type="email" name="email" id="email"
                            placeholder='Email'
                        />
                    </div>
                    <div className="w-full">
                        <input
                            id="password" name='password'
                            type={"password"}
                            style={{
                                outline: "none"
                            }}
                            placeholder="Password"
                            className="w-full px-3 py-3  border-solid border-2 border-gray-200 rounded-md"
                        />
                    </div>
                    <div className="relative w-full">
                        <input
                            id="confirm-password" name='confirmPassword'
                            type={passwordVisible ? "text" : "password"}
                            style={{
                                outline: "none"
                            }}
                            placeholder="Confirm Password"
                            className="w-full px-3 py-3  border-solid border-2 border-gray-200 rounded-md pr-10"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
                            onClick={togglePasswordVisibility}
                        >
                            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    <div className='flex items-center text-gray-600 gap-2'>
                        <input
                            className='h-10 w-5'
                            type="checkbox" name="differentAddress" id="differentAddress"
                        />
                        <label htmlFor="differentAddress">Accept all terms & Conditions</label>
                    </div>
                    <div className='w-full'>
                        <input className='w-full px-6 py-2 rounded-3xl text-lg font-semibold bg-green-600 hover:bg-green-700 text-white cursor-pointer' type="button" value="Create Account" />
                    </div>
                    <div className='text-center'>
                        <p><span className='text-gray-500'>Already have account </span><Link className='font-semibold' to={'/user/login'}>Login</Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RegistrationPage;