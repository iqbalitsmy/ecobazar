import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import fetchData from '../../utils/fetchData';


const OrderProducts = ({ productId, quantity }) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const products = await fetchData(window.location.origin+'/fakeJsonData.json');
                setProduct(products.find(p => p._id === productId));
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getData();
    }, [productId]);

    if (loading) return <Spinner></Spinner>

    if (error) return <p className='text-center h-[40vh] text-red-400 font-medium text-lg'>Error: {error.message}</p>;

    return (
        <tr className='text-sm shadow-sm'>
            <td className='flex items-center gap-2 text-start border-solid border-gray-100 border-0 border-b-2 pl-4'>
                <img className='h-16 w-16 object-contain' loading="lazy" src={product.thumbnail} alt="Product" />
                <h3 className='text-sm'>{product.title}</h3>
            </td>
            <td className='border-solid border-gray-100 border-0 border-b-2'>
                <p>
                    ${product.newPrice.toFixed(2)}
                </p>
            </td>
            <td className='text-start border-solid border-gray-100 border-0 border-b-2'>
                <p>x{quantity}</p>
            </td>
            <td className='font-medium border-solid border-gray-100 border-0 border-b-2 mr-4'>
                <p>
                    ${(product.newPrice * quantity).toFixed(2)}
                </p>
            </td>
        </tr>
    );
};

export default OrderProducts;