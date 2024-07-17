import React, { useEffect, useState } from 'react';
import ProductNav from '../../Shared/ProductNav/ProductNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import fetchData from '../../utils/fetchData';
import Spinner from '../../Shared/Spinner/Spinner';
import addToCartProducts from '../../utils/useAddToCartData';

const ShoppingCart = () => {
    const [addToCartsProducts, setAddToCartsProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleQuantityDecrement = (product) => {
        const updatedProducts = addToCartsProducts.map((p) => {
            if (p._id === product._id && p.productQuantity > 1) {
                addToCartProducts(p._id, -1);
                return { ...p, productQuantity: p.productQuantity - 1 };
            }
            return p;
        });
        setAddToCartsProducts(updatedProducts);
        setTotalPrice(totalProductsPrice(updatedProducts));
        localStorage.setItem("addToCartData", JSON.stringify(updatedProducts));
    };

    const handleQuantityIncrement = (product) => {
        const updatedProducts = addToCartsProducts.map((p) => {
            if (p._id === product._id && p.productQuantity < p.quantity) {
                addToCartProducts(p._id, 1);
                return { ...p, productQuantity: p.productQuantity + 1 };
            }
            return p;
        });
        setAddToCartsProducts(updatedProducts);
        setTotalPrice(totalProductsPrice(updatedProducts));
        localStorage.setItem("addToCartData", JSON.stringify(updatedProducts));
    };

    // get addToCart products details
    useEffect(() => {
        const getData = async () => {
            try {
                const storedProducts = JSON.parse(localStorage.getItem("addToCartData"));
                if (storedProducts) {
                    const result = await fetchData('http://localhost:3000/fakeJsonData.json');
                    // find addToCart products based on id
                    let cartDetails = [];
                    for (let i = 0; i < storedProducts.length; i++) {
                        for (let j = 0; j < result.length; j++) {
                            if (storedProducts[i]._id === result[j]._id) {
                                cartDetails.push({
                                    ...result[j],
                                    productQuantity: storedProducts[i].productQuantity
                                })
                                break;
                            }
                        }
                    }
                    // total price
                    setTotalPrice(totalProductsPrice(cartDetails));
                    setAddToCartsProducts(cartDetails)
                }
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getData();
    }, []);

    // console.log(addToCartsProducts)

    // total price
    const totalProductsPrice = (cartDetails) => {
        return (cartDetails.reduce((accumulator, item) => (item.productQuantity * item.newPrice) + accumulator, 0));
    }

    // delete data
    const handleDeleteAddToCartData = (_id) => {
        const newAddToCartsData = addToCartsProducts.filter((d) => d._id !== _id)

        setAddToCartsProducts(newAddToCartsData);
        // total price
        setTotalPrice(totalProductsPrice(newAddToCartsData));

        // if new data is empty
        if (newAddToCartsData.length === 0) return localStorage.removeItem('addToCartData');
        // update store data
        return localStorage.setItem("addToCartData", JSON.stringify(newAddToCartsData));
    }


    if (loading) return <Spinner></Spinner>

    if (error) return <p>Error loading data: {error.message}</p>;

    return (
        <section className='container mx-auto min-h-[60vh] lg:min-h-screen mb-10'>
            <ProductNav titles={["Shopping Cart"]} newStyle={false} navLink={["/products/shopping-cart"]}></ProductNav>
            <div className='mt-6'>
                <h1 className='text-center text-[32px] font-semibold mb-6'>My Shopping Cart</h1>
                <div className='flex gap-4 flex-wrap xl:w-[80%] mx-auto'>
                    <div className='flex-grow'>
                        <table className='w-full mx-auto'>
                            <thead>
                                <tr className='text-gray-500 uppercase border-solid border-gray-100 border-2'>
                                    <th className='font-normal text-sm text-start pl-3 py-2'>Product</th>
                                    <th className='font-normal text-sm text-start py-2'>price</th>
                                    <th className='font-normal text-sm text-start py-2'>quantity</th>
                                    <th className='font-normal text-sm text-start py-2'>subtotal</th>
                                    <th className='font-normal text-sm text-start py-2'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    addToCartsProducts.map((addToCartsProduct, i) => (
                                        <tr key={i} className='border-solid border-gray-100 border-2'>
                                            <td className='flex items-center gap-2 text-start pl-3'>
                                                <img className='max-h-28 w-auto' loading="lazy" src={addToCartsProduct.thumbnail} alt="" />
                                                <h3>{addToCartsProduct.title}</h3>
                                            </td>
                                            <td className=''>
                                                <p>
                                                    ${addToCartsProduct.newPrice.toFixed(2)}
                                                </p>
                                            </td>
                                            <td className='text-start'>
                                                <div className='p-[6px] border-solid border-[1px] border-gray-100 flex items-center gap-4 text-gray-600 rounded-full w-fit'>
                                                    <button
                                                        disabled={addToCartsProduct.productQuantity === 1 ? true : false}
                                                        className='px-[10px] py-[6px] rounded-full bg-gray-100 border-none disabled:opacity-50 disabled:bg-gray-200'
                                                        type="button"
                                                        onClick={() => handleQuantityDecrement(addToCartsProduct)}
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </button>
                                                    <div className='font-medium inline-block w-2'>
                                                        <p>{addToCartsProduct.productQuantity}</p>
                                                    </div>
                                                    <button
                                                        disabled={addToCartsProduct.productQuantity < addToCartsProduct.quantity ? false : true}
                                                        className='px-[10px] py-[6px] rounded-full bg-gray-100 border-none disabled:opacity-50 disabled:bg-gray-200'
                                                        type="button"
                                                        onClick={() => handleQuantityIncrement(addToCartsProduct)}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='font-medium'>
                                                <p>
                                                    ${totalProductsPrice([addToCartsProduct]).toFixed(2)}
                                                </p>
                                            </td>
                                            <td>
                                                <button
                                                    className='px-[5px] border-solid border-gray-200 border-2 rounded-full text-gray-600'
                                                    onClick={() => handleDeleteAddToCartData(addToCartsProduct._id)}
                                                >
                                                    <FontAwesomeIcon icon={faXmark} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className='mb-8 border-solid border-t-0 rounded-b-md border-gray-100 border-2 px-3 py-3 w-full flex justify-between items-center'>
                            <a
                                href='/products/'
                                className='py-2 px-4 font-semibold rounded-full text-gray-700 bg-gray-100'
                            >
                                Return to shop
                            </a>
                            <button
                                className='py-2 px-4 font-semibold rounded-full text-gray-700 bg-gray-100'
                                type="button"
                            >
                                Update Cart
                            </button>
                        </div>
                        <div className='border-solid border-gray-100 rounded-md border-2 px-3 py-4 w-full flex gap-4 justify-between items-center'>
                            <label className='font-medium text-xl text-gray-700' htmlFor="">Coupon Code</label>
                            <div className='relative w-full sm:w-4/5 xl:w-2/3'>
                                <input
                                    className='py-2 pl-4 w-11/12 rounded-l-full border-solid border-2 border-gray-100'
                                    style={{
                                        "outline": "none"
                                    }}
                                    type="text"
                                    name="coupon" id="" placeholder='Enter coupon'
                                />
                                <input className='px-4 rounded-3xl font-semibold bg-black hover:bg-gray-800 text-white absolute right-0 top-0 bottom-0 cursor-pointer' type="button" value="Apply Coupon" />
                            </div>
                        </div>
                    </div>
                    <div className='h-fit border-solid border-gray-100 border-2 rounded-md p-6'>
                        <h4 className='text-xl font-medium mb-4'>Cart Total</h4>
                        <div className='flex justify-between items-center text-sm text-gray-700 border-solid border-gray-100 border-0 border-b-2 pb-3 mb-4 '>
                            <p className=''>Subtotal:</p>
                            <p className='font-medium text-black'>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between items-center text-sm text-gray-700 border-solid border-gray-100 border-0 border-b-2 pb-3 mb-4'>
                            <p>Shipping:</p>
                            <p className='font-medium text-black'>Free</p>
                        </div>
                        <div className='flex justify-between items-center text-sm text-gray-700 mb-10'>
                            <p>Total</p>
                            <p className='font-medium text-black'>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className='w-full'>
                            <input className='w-full px-6 py-2 rounded-3xl text-base font-semibold bg-primary-color hover:bg-green-500 text-white cursor-pointer' type="button" value="Proceed to checkout" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShoppingCart;