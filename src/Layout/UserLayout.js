import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';
import PageNav from '../Shared/ProductNav/PageNav';


const UserLayout = () => {
    return (
        <>
            <PageNav></PageNav>
            <Suspense fallback={<Spinner></Spinner>}>
                <Outlet></Outlet>
            </Suspense>
        </>
    );
};

export default UserLayout;