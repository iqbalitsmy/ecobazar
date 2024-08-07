import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PageNav from '../Shared/ProductNav/PageNav';

export const SnackbarContext = createContext({});

const ProductsLayout = () => {
    // for snackbar
    const [snackbar, setSnackbar] = useState([]);

    useEffect(() => {
        if (snackbar.length > 0) {
            const timer = setTimeout(() => {
                setSnackbar((prev) => prev.slice(1));
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [snackbar]);

    // console.log(snackbar)

    return (
        <>
            <PageNav></PageNav>
            <SnackbarContext.Provider value={{ snackbar, setSnackbar }}>
                <Outlet></Outlet>
            </SnackbarContext.Provider>
        </>
    );
};
export default ProductsLayout;