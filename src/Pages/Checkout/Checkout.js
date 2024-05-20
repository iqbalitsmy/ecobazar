import React, { useState } from 'react';
import ProductNav from '../../Shared/ProductNav/ProductNav';
import productDetails from '../../assets/fakeData/fakeData';
import { FormControlLabel, Radio } from '@mui/material';

const countries = [
    { name: "Afghanistan", flag: "🇦🇫" },
    { name: "Albania", flag: "🇦🇱" },
    { name: "Algeria", flag: "🇩🇿" },
    { name: "Andorra", flag: "🇦🇩" },
    { name: "Angola", flag: "🇦🇴" },
    { name: "Antigua and Barbuda", flag: "🇦🇬" },
    { name: "Argentina", flag: "🇦🇷" },
    { name: "Armenia", flag: "🇦🇲" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Austria", flag: "🇦🇹" },
    { name: "Azerbaijan", flag: "🇦🇿" },
    { name: "Bahamas", flag: "🇧🇸" },
    { name: "Bahrain", flag: "🇧🇭" },
    { name: "Bangladesh", flag: "🇧🇩" },
    { name: "Barbados", flag: "🇧🇧" },
    { name: "Belarus", flag: "🇧🇾" },
    { name: "Belgium", flag: "🇧🇪" },
    { name: "Belize", flag: "🇧🇿" },
    { name: "Benin", flag: "🇧🇯" },
    { name: "Bhutan", flag: "🇧🇹" },
    { name: "Bolivia", flag: "🇧🇴" },
    { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
    { name: "Botswana", flag: "🇧🇼" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "Brunei", flag: "🇧🇳" },
    { name: "Bulgaria", flag: "🇧🇬" },
    { name: "Burkina Faso", flag: "🇧🇫" },
    { name: "Burundi", flag: "🇧🇮" },
    { name: "Cabo Verde", flag: "🇨🇻" },
    { name: "Cambodia", flag: "🇰🇭" },
    { name: "Cameroon", flag: "🇨🇲" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Central African Republic", flag: "🇨🇫" },
    { name: "Chad", flag: "🇹🇩" },
    { name: "Chile", flag: "🇨🇱" },
    { name: "China", flag: "🇨🇳" },
    { name: "Colombia", flag: "🇨🇴" },
    { name: "Comoros", flag: "🇰🇲" },
    { name: "Congo (Congo-Brazzaville)", flag: "🇨🇬" },
    { name: "Congo (DRC)", flag: "🇨🇩" },
    { name: "Costa Rica", flag: "🇨🇷" },
    { name: "Croatia", flag: "🇭🇷" },
    { name: "Cuba", flag: "🇨🇺" },
    { name: "Cyprus", flag: "🇨🇾" },
    { name: "Czechia (Czech Republic)", flag: "🇨🇿" },
    { name: "Denmark", flag: "🇩🇰" },
    { name: "Djibouti", flag: "🇩🇯" },
    { name: "Dominica", flag: "🇩🇲" },
    { name: "Dominican Republic", flag: "🇩🇴" },
    { name: "Ecuador", flag: "🇪🇨" },
    { name: "Egypt", flag: "🇪🇬" },
    { name: "El Salvador", flag: "🇸🇻" },
    { name: "Equatorial Guinea", flag: "🇬🇶" },
    { name: "Eritrea", flag: "🇪🇷" },
    { name: "Estonia", flag: "🇪🇪" },
    { name: "Eswatini", flag: "🇸🇿" },
    { name: "Ethiopia", flag: "🇪🇹" },
    { name: "Fiji", flag: "🇫🇯" },
    { name: "Finland", flag: "🇫🇮" },
    { name: "France", flag: "🇫🇷" },
    { name: "Gabon", flag: "🇬🇦" },
    { name: "Gambia", flag: "🇬🇲" },
    { name: "Georgia", flag: "🇬🇪" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Ghana", flag: "🇬🇭" },
    { name: "Greece", flag: "🇬🇷" },
    { name: "Grenada", flag: "🇬🇩" },
    { name: "Guatemala", flag: "🇬🇹" },
    { name: "Guinea", flag: "🇬🇳" },
    { name: "Guinea-Bissau", flag: "🇬🇼" },
    { name: "Guyana", flag: "🇬🇾" },
    { name: "Haiti", flag: "🇭🇹" },
    { name: "Honduras", flag: "🇭🇳" },
    { name: "Hungary", flag: "🇭🇺" },
    { name: "Iceland", flag: "🇮🇸" },
    { name: "India", flag: "🇮🇳" },
    { name: "Indonesia", flag: "🇮🇩" },
    { name: "Iran", flag: "🇮🇷" },
    { name: "Iraq", flag: "🇮🇶" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "Israel", flag: "🇮🇱" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Jamaica", flag: "🇯🇲" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Jordan", flag: "🇯🇴" },
    { name: "Kazakhstan", flag: "🇰🇿" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "Kiribati", flag: "🇰🇮" },
    { name: "Kuwait", flag: "🇰🇼" },
    { name: "Kyrgyzstan", flag: "🇰🇬" },
    { name: "Laos", flag: "🇱🇦" },
    { name: "Latvia", flag: "🇱🇻" },
    { name: "Lebanon", flag: "🇱🇧" },
    { name: "Lesotho", flag: "🇱🇸" },
    { name: "Liberia", flag: "🇱🇷" },
    { name: "Libya", flag: "🇱🇾" },
    { name: "Liechtenstein", flag: "🇱🇮" },
    { name: "Lithuania", flag: "🇱🇹" },
    { name: "Luxembourg", flag: "🇱🇺" },
    { name: "Madagascar", flag: "🇲🇬" },
    { name: "Malawi", flag: "🇲🇼" },
    { name: "Malaysia", flag: "🇲🇾" },
    { name: "Maldives", flag: "🇲🇻" },
    { name: "Mali", flag: "🇲🇱" },
    { name: "Malta", flag: "🇲🇹" },
    { name: "Marshall Islands", flag: "🇲🇭" },
    { name: "Mauritania", flag: "🇲🇷" },
    { name: "Mauritius", flag: "🇲🇺" },
    { name: "Mexico", flag: "🇲🇽" },
    { name: "Micronesia", flag: "🇫🇲" },
    { name: "Moldova", flag: "🇲🇩" },
    { name: "Monaco", flag: "🇲🇨" },
    { name: "Mongolia", flag: "🇲🇳" },
    { name: "Montenegro", flag: "🇲🇪" },
    { name: "Morocco", flag: "🇲🇦" },
    { name: "Mozambique", flag: "🇲🇿" },
    { name: "Myanmar (Burma)", flag: "🇲🇲" },
    { name: "Namibia", flag: "🇳🇦" },
    { name: "Nauru", flag: "🇳🇷" },
    { name: "Nepal", flag: "🇳🇵" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "New Zealand", flag: "🇳🇿" },
    { name: "Nicaragua", flag: "🇳🇮" },
    { name: "Niger", flag: "🇳🇪" },
    { name: "Nigeria", flag: "🇳🇬" },
    { name: "North Korea", flag: "🇰🇵" },
    { name: "North Macedonia", flag: "🇲🇰" },
    { name: "Norway", flag: "🇳🇴" },
    { name: "Oman", flag: "🇴🇲" },
    { name: "Pakistan", flag: "🇵🇰" },
    { name: "Palau", flag: "🇵🇼" },
    { name: "Palestine", flag: "🇵🇸" },
    { name: "Panama", flag: "🇵🇦" },
    { name: "Papua New Guinea", flag: "🇵🇬" },
    { name: "Paraguay", flag: "🇵🇾" },
    { name: "Peru", flag: "🇵🇪" },
    { name: "Philippines", flag: "🇵🇭" },
    { name: "Poland", flag: "🇵🇱" },
    { name: "Portugal", flag: "🇵🇹" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Romania", flag: "🇷🇴" },
    { name: "Russia", flag: "🇷🇺" },
    { name: "Rwanda", flag: "🇷🇼" },
    { name: "Saint Kitts and Nevis", flag: "🇰🇳" },
    { name: "Saint Lucia", flag: "🇱🇨" },
    { name: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
    { name: "Samoa", flag: "🇼🇸" },
    { name: "San Marino", flag: "🇸🇲" },
    { name: "São Tomé and Príncipe", flag: "🇸🇹" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Senegal", flag: "🇸🇳" },
    { name: "Serbia", flag: "🇷🇸" },
    { name: "Seychelles", flag: "🇸🇨" },
    { name: "Sierra Leone", flag: "🇸🇱" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "Slovakia", flag: "🇸🇰" },
    { name: "Slovenia", flag: "🇸🇮" },
    { name: "Solomon Islands", flag: "🇸🇧" },
    { name: "Somalia", flag: "🇸🇴" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "South Korea", flag: "🇰🇷" },
    { name: "South Sudan", flag: "🇸🇸" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Sri Lanka", flag: "🇱🇰" },
    { name: "Sudan", flag: "🇸🇩" },
    { name: "Suriname", flag: "🇸🇷" },
    { name: "Sweden", flag: "🇸🇪" },
    { name: "Switzerland", flag: "🇨🇭" },
    { name: "Syria", flag: "🇸🇾" },
    { name: "Taiwan", flag: "🇹🇼" },
    { name: "Tajikistan", flag: "🇹🇯" },
    { name: "Tanzania", flag: "🇹🇿" },
    { name: "Thailand", flag: "🇹🇭" },
    { name: "Timor-Leste", flag: "🇹🇱" },
    { name: "Togo", flag: "🇹🇬" },
    { name: "Tonga", flag: "🇹🇴" },
    { name: "Trinidad and Tobago", flag: "🇹🇹" },
    { name: "Tunisia", flag: "🇹🇳" },
    { name: "Turkey", flag: "🇹🇷" },
    { name: "Turkmenistan", flag: "🇹🇲" },
    { name: "Tuvalu", flag: "🇹🇻" },
    { name: "Uganda", flag: "🇺🇬" },
    { name: "Ukraine", flag: "🇺🇦" },
    { name: "United Arab Emirates", flag: "🇦🇪" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "United States", flag: "🇺🇸" },
    { name: "Uruguay", flag: "🇺🇾" },
    { name: "Uzbekistan", flag: "🇺🇿" },
    { name: "Vanuatu", flag: "🇻🇺" },
    { name: "Vatican City", flag: "🇻🇦" },
    { name: "Venezuela", flag: "🇻🇪" },
    { name: "Vietnam", flag: "🇻🇳" },
    { name: "Yemen", flag: "🇾🇪" },
    { name: "Zambia", flag: "🇿🇲" },
    { name: "Zimbabwe", flag: "🇿🇼" }
];

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
    return (
        <section className='container mx-auto min-h-[60vh] lg:min-h-screen mb-10'>
            <ProductNav titles={["Shopping Cart", "Checkout"]} newStyle={true}></ProductNav>
            <form className='mt-10'>
                <div>
                    <h3>Billing Information</h3>
                    <div>
                        <div>
                            <div>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" name="fname" id="fname" placeholder='Your first name' />
                            </div>
                            <div>
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" name="lname" id="lname" placeholder='Your last name' />
                            </div>
                            <div>
                                <label htmlFor="cname">Company Name <span>(optional)</span></label>
                                <input type="text" name="cname" id="cname" placeholder='Company name' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address">Street Address</label>
                            <input type="text" name="address" id="address" placeholder='House no / building / street / area' />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="country">Country / Region</label>
                                <select id="country">
                                    {
                                        countries.map((countrie) => (
                                            <option value={countrie.name}><span>{countrie.flag}</span> <span>{countrie.name}</span></option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="country">State</label>
                                <select id="state">
                                    {
                                        bangladeshStates.map((bangladeshStat) => (
                                            <option value={bangladeshStat}>{bangladeshStat}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="zip-code">Zip Code</label>
                                <input type="text" name="zip-code" id="zip-code" placeholder='Zip Code' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder='Email Address' />
                            </div>
                            <div>
                                <label htmlFor="phone">Zip Code</label>
                                <input type="tel" name="phone" id="phone" placeholder='Phone number' />
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" name="differentAddress" id="differentAddress" />
                            <label htmlFor="differentAddress">Ship to a different address</label>
                        </div>
                        <div>
                            <h3>Additional Info</h3>
                            <div>
                                <label htmlFor="note">Order Notes (Optional)</label>
                                <textarea name="note" id="note" cols="30" rows="10" placeholder='Notes about your order, e.g. special notes for delivery'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Order Summery</h3>
                    <div>
                        <div>
                            <img src={productDetails[0].thumbnail} alt={productDetails[0].title} />
                            <p>{productDetails[0].title}{" x1"}</p>
                        </div>
                        <div>
                            <p>${productDetails[0].newPrice.toFixed(2)}</p>
                        </div>
                    </div>
                    <div>
                        <p>Subtotal:</p>
                        <p>${productDetails[0].newPrice.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>Shipping:</p>
                        <p>{productDetails[0].newPrice ? `$${productDetails[0].newPrice.toFixed(2)}` : "Free"}</p>
                    </div>
                    <div>
                        <p>Total:</p>
                        <p>${productDetails[0].newPrice.toFixed(2)}</p>
                    </div>
                    <div>
                        <h3>Payment Method</h3>
                        <div>
                            <div className='space-y-1'>
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