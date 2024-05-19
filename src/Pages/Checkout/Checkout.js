import React from 'react';
import ProductNav from '../../Shared/ProductNav/ProductNav';

const Checkout = () => {
    return (
        <section className='container mx-auto min-h-[60vh] lg:min-h-screen mb-10'>
            <ProductNav titles={["Shopping Cart", "Checkout"]} newStyle={true}></ProductNav>
            <div className='mt-10'>

            </div>
        </section>
    );
};

export default Checkout;