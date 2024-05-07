import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import HomePage from "../Pages/Home/HomePage";
import ProductsDetailsPage from "../Pages/ProductsDetails/ProductsDetailsPage";
import ProductsLayout from "../Layout/ProductsLayout";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";


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
        path: "/product",
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
        ]
    },
])

export default router;