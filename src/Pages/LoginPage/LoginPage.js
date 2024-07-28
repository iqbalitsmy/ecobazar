import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageNavContext } from '../../Provider/PageNavProvider';

const LoginPage = () => {
    const { setPageNav } = useContext(PageNavContext);

    // for password
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // for page navigation
    useEffect(() => {
        setPageNav([{ title: "account", navLink: "/user/dashboard" }, { title: "Login", navLink: "" }]);
    }, [setPageNav]);

    return (
        <section className='min-h-[80vh] flex justify-center pt-20 mb-14'>
            <div className='mx-2 px-6 py-6 h-fit shadow-md rounded-md w-full md:max-w-[480px]'>
                <h1 className='text-4xl font-bold text-center mb-8'>Sign In</h1>
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
                    <div className="relative w-full">
                        <input
                            id="password" name='password'
                            type={passwordVisible ? "text" : "password"}
                            style={{
                                outline: "none"
                            }}
                            placeholder="Password"
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
                    <div className='flex justify-between items-center text-gray-600 gap-4'>
                        <div className='flex gap-2 items-center'>
                            <input
                                className='h-10 w-5'
                                type="checkbox" name="differentAddress" id="differentAddress"
                            />
                            <label htmlFor="differentAddress">Remember me</label>
                        </div>
                        <div>
                            <Link>Forget Password</Link>
                        </div>
                    </div>
                    <div className='w-full'>
                        <input className='w-full px-6 py-2 rounded-3xl text-lg font-semibold bg-green-600 hover:bg-green-700 text-white cursor-pointer' type="button" value="Login" />
                    </div>
                    <div className='text-center'>
                        <p><span className='text-gray-500'>Don't have account? </span><Link className='font-semibold' to={'/user/register'}>Register</Link></p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginPage;