import React, { useContext, useEffect, useState } from 'react';
import productDetails from '../../assets/fakeData/fakeData';
import { FormControlLabel, Radio } from '@mui/material';
import Region from '../../Shared/Region/Region';
import { PageNavContext } from '../../Provider/PageNavProvider';

const bangladeshStates = [
    "Barisal",
    "Chittagong",
    "Dhaka",
    "Khulna",
    "Mymensingh",
    "Rajshahi",
    "Rangpur",
    "Sylhet"
];


const Checkout = () => {
    const { setPageNav } = useContext(PageNavContext);
    const [selectedValue, setSelectedValue] = useState('');

    const handleRadioBtnChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleRadioBtnChange,
        value: item,
        name: 'color-radio-button',
        inputProps: { 'aria-label': item },
    });

    // for page navigation
    useEffect(() => {
        setPageNav([{ title: "Shopping Cart", navLink: "/products/shopping-cart/" }, { title: "Checkout", navLink: "/products/checkout" }]);
    }, [setPageNav]);

    return (
        <section className='container mx-auto min-h-[60vh] lg:min-h-screen lg:w-[90%] mb-10'>
            <form className='mt-10 flex justify-between gap-4'>
                {/* Billing Information */}
                <div className='flex-grow'>
                    <h3 className='text-2xl font-semibold mb-4'>Billing Information</h3>
                    <div className='text-gray-700'>
                        <div className='flex gap-4 justify-between mb-4'>
                            <div className='space-y-2 w-full'>
                                <label className='' htmlFor="fname">First Name</label>
                                <input
                                    className='pl-3 py-2 border-solid border-2 border-gray-200 rounded-sm w-full'
                                    style={{
                                        outline: "none"
                                    }}
                                    type="text" name="fname" id="fname"
                                    placeholder='Your first name'
                                />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="lname">Last Name</label>
                                <input
                                    className='pl-3 py-2 border-solid border-2 border-gray-200 rounded-sm w-full'
                                    style={{
                                        outline: "none"
                                    }}
                                    type="text" name="lname" id="lname"
                                    placeholder='Your last name'
                                />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="cname">Company Name <span>(optional)</span></label>
                                <input
                                    className='pl-3 py-2 border-solid border-2 border-gray-200 rounded-sm w-full'
                                    style={{
                                        outline: "none"
                                    }}
                                    type="text" name="cname" id="cname"
                                    placeholder='Company name'
                                />
                            </div>
                        </div>
                        <div className='space-y-2 mb-4 w-full'>
                            <label htmlFor="address">Street Address</label>
                            <input
                                className='pl-3 py-2 w-full border-solid border-2 border-gray-200 rounded-sm'
                                style={{
                                    outline: "none"
                                }}
                                type="text" name="address" id="address"
                                placeholder='House no / building / street / area'
                            />
                        </div>
                        <div className='flex justify-between gap-4 mb-4'>
                            <div className='space-y-2 w-full'>
                                <Region></Region>
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="country">State</label>
                                <select
                                    className='pl-3 py-2 w-full border-solid border-2 border-gray-200 rounded-sm bg-transparent'
                                    id="state"
                                >
                                    {
                                        bangladeshStates.map((bangladeshStat) => (
                                            <option
                                                className='bg-white'
                                                value={bangladeshStat}
                                            >
                                                {bangladeshStat}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="zip-code">Zip Code</label>
                                <input
                                    className='pl-3 py-2 w-full border-solid border-2 border-gray-200 rounded-sm bg-transparent'
                                    style={{
                                        outline: "none"
                                    }}
                                    type="text" name="zip-code" id="zip-code"
                                    placeholder='Zip Code'
                                />
                            </div>
                        </div>
                        <div className='flex justify-between gap-4 mb-4'>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="email">Email</label>
                                <input
                                    className='pl-3 py-2 w-full border-solid border-2 border-gray-200 rounded-sm bg-transparent'
                                    style={{
                                        outline: "none"
                                    }}
                                    type="email" name="email" id="email"
                                    placeholder='Email Address'
                                />
                            </div>
                            <div className='space-y-2 w-full'>
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    className='pl-3 py-2 w-full border-solid border-2 border-gray-200 rounded-sm bg-transparent'
                                    style={{
                                        outline: "none"
                                    }}
                                    type="tel" name="phone" id="phone"
                                    placeholder='Phone number'
                                />
                            </div>
                        </div>
                        <div className='flex gap-2 items-center mb-4'>
                            <input
                                className='h-10 w-5'
                                type="checkbox" name="differentAddress" id="differentAddress"
                            />
                            <label htmlFor="differentAddress">Ship to a different address</label>
                        </div>
                        <hr className='border-solid border-[1px] border-gray-200 mb-4' />
                        <div className=''>
                            <h3 className='text-2xl font-semibold mb-4'>Additional Info</h3>
                            <div className='mb-4 space-y-2'>
                                <label htmlFor="note">Order Notes (Optional)</label>
                                <textarea
                                    className='pl-3 py-2 w-full border-solid border-2 border-gray-200 rounded-md bg-transparent resize-none'
                                    style={{
                                        outline: "none"
                                    }}
                                    name="note" id="note" cols="" rows="2"
                                    placeholder='Notes about your order, e.g. special notes for delivery'
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Order Summery */}
                <div className='p-4 h-fit border-solid border-[1px] border-gray-200 min-w-80 rounded-md'>
                    <h3 className='text-xl font-semibold mb-4'>Order Summery</h3>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='flex gap-2 items-center'>
                            <figure className=''>
                                <img className='max-h-20 h-full max-w-20' loading="lazy" src={productDetails[0].thumbnail} alt={productDetails[0].title} />
                            </figure>
                            <p>{productDetails[0].title} x1</p>
                        </div>
                        <div>
                            <p className='font-semibold'>${productDetails[0].newPrice.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                        <p className='text-gray-600'>Subtotal:</p>
                        <p className='font-semibold'>${productDetails[0].newPrice.toFixed(2)}</p>
                    </div>
                    <hr className='border-solid border-[1px] border-gray-200 mb-4' />
                    <div className='flex items-center justify-between mb-4'>
                        <p className='text-gray-600'>Shipping:</p>
                        <p className='font-semibold'>{productDetails[0].newPrice ? `$${productDetails[0].newPrice.toFixed(2)}` : "Free"}</p>
                    </div>
                    <hr className='border-solid border-[1px] border-gray-200 mb-4' />
                    <div className='flex items-center justify-between mb-4'>
                        <p className='text-gray-600'>Total:</p>
                        <p className='font-bold text-lg'>${productDetails[0].newPrice.toFixed(2)}</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Payment Method</h3>
                        <div className='space-y-1 text-gray-700 mb-4'>
                            <div className=''>
                                <FormControlLabel
                                    value={"Cash on Delivery"}
                                    control={
                                        <Radio
                                            {...controlProps("Cash on Delivery")}
                                            sx={{
                                                color: "#ccc",
                                                '&.Mui-checked': {
                                                    color: "#00B207",
                                                },
                                            }}
                                        />}
                                    label={"Cash on Delivery"}
                                />
                                <div>
                                    <FormControlLabel
                                        value={"Paypal"}
                                        control={
                                            <Radio
                                                {...controlProps("Paypal")}
                                                sx={{
                                                    color: "#ccc",
                                                    '&.Mui-checked': {
                                                        color: "#00B207",
                                                    },
                                                }}
                                            />}
                                        label={"Paypal"}
                                    />
                                </div>
                                <div>
                                    <FormControlLabel
                                        value={"Amazon Pay"}
                                        control={
                                            <Radio
                                                {...controlProps("Amazon Pay")}
                                                sx={{
                                                    color: "#ccc",
                                                    '&.Mui-checked': {
                                                        color: "#00B207",
                                                    },
                                                }}
                                            />}
                                        label={"Amazon Pay"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <input className='w-full px-6 py-2 rounded-3xl text-lg font-semibold bg-green-600 hover:bg-green-700 text-white cursor-pointer' type="button" value="Place Order" />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Checkout;  