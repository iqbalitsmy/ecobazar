import React from 'react';
import { Outlet } from 'react-router-dom';

const UserDashboardLayout = () => {
    return (
        <section>
            <aside>
                Dashboard Layout
            </aside>
            <aside>
                <Outlet></Outlet>
            </aside>
        </section>
    );
};

export default UserDashboardLayout;