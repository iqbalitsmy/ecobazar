import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import HomePage from "../Pages/Home/HomePage";
import ProductsLayout from "../Layout/ProductsLayout";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import ProductsDetailsPage from "../Pages/ProductsDetails/ProductsDetailsPage";
import Wishlist from "../Pages/Wishlist/Wishlist";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import Checkout from "../Pages/Checkout/Checkout";
import UserLayout from "../Layout/UserLayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";

import { lazy } from "react";
import DashboardShoppingCart from "../Pages/UserDashboardPages/DashboardShoppingCart";
import PageNavProvider from "../Provider/PageNavProvider";

// lazy loading
// const UserDashboardLayout = lazy(() => wait(3000).then(() => import("../Layout/UserDashboardLayout")));
const UserDashboardLayout = lazy(() => import("../Layout/UserDashboardLayout"));
const UserDashboard = lazy(() => import("../Pages/UserDashboardPages/UserDashboard"));
const UserSetting = lazy(() => import("../Pages/UserDashboardPages/UserSetting"));
const UserOrdersHistories = lazy(() => import("../Pages/UserDashboardPages/UserOrdersHistoryPage/UserOrdersHistories"));
const DashboardWishlist = lazy(() => import("../Pages/UserDashboardPages/DashboardWishlist"));
const OrderDetails = lazy(() => import("../Pages/UserDashboardPages/UserOrdersHistoryPage/OrderDetails"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
        ]
    },
    {
        path: "/products",
        element: <PageNavProvider><ProductsLayout /></PageNavProvider>,
        children: [
            {
                path: "",
                element: <ProductsPage></ProductsPage>,
            },
            {
                path: ":id",
                element: <ProductsDetailsPage></ProductsDetailsPage>,
                // loader: ({ params }) => fetch(`fakeJsonData.json`, {
                //     method: "GET",
                //     headers: {
                //         'content-type': "application/json",
                //     }
                // })
            },
            {
                path: "wishlist",
                element: <Wishlist></Wishlist>,
            },
            {
                path: "shopping-cart",
                element: <ShoppingCart></ShoppingCart>,
            },
            {
                path: "checkout",
                element: <Checkout></Checkout>,
            }
        ]
    },
    {
        path: "/user",
        element: <PageNavProvider><UserLayout /></PageNavProvider>,
        children: [
            {
                path: 'login',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'register',
                element: <RegistrationPage></RegistrationPage>
            },
            {
                path: 'dashboard',
                element: <UserDashboardLayout></UserDashboardLayout>,
                children: [
                    {
                        path: '',
                        element: <UserDashboard></UserDashboard>
                    },
                    {
                        path: 'order-history',
                        element: <Outlet></Outlet>,
                        children: [
                            {
                                path: '',
                                element: <UserOrdersHistories></UserOrdersHistories>
                            },
                            {
                                path: ':id',
                                element: <OrderDetails></OrderDetails>
                            },
                        ]
                    },
                    {
                        path: 'wishlist',
                        element: <DashboardWishlist></DashboardWishlist>
                    },
                    {
                        path: 'shopping-cart',
                        element: <DashboardShoppingCart></DashboardShoppingCart>
                    },
                    {
                        path: 'setting',
                        element: <UserSetting></UserSetting>
                    },
                ]
            },
        ]
    }
])

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    })
}

export default router;