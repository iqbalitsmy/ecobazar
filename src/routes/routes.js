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
import UserDashboardLayout from "../Layout/UserDashboardLayout";
import UserDashboard from "../Pages/UserDashboardPages/UserDashboard";
import UserOrdersHistory from "../Pages/UserDashboardPages/UserOrdersHistoryPage/UserOrdersHistory";
import DashboardWishlist from "../Pages/UserDashboardPages/DashboardWishlist";
import UserSetting from "../Pages/UserDashboardPages/UserSetting";
import OrderDetails from "../Pages/UserDashboardPages/UserOrdersHistoryPage/OrderDetails";

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
        element: <ProductsLayout></ProductsLayout>,
        children: [
            {
                path: "",
                element: <ProductsPage></ProductsPage>,
            },
            {
                path: ":id",
                element: <ProductsDetailsPage></ProductsDetailsPage>,
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
        element: <UserLayout></UserLayout>,
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
                                element: <UserOrdersHistory></UserOrdersHistory>
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
                        element: <ShoppingCart></ShoppingCart>
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

export default router;