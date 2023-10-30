import HomeLayout from "~/components/layout/HomeLayout";
import Home from "~/pages/Home";
import Blog from "~/pages/blog/Blog";
import Login from "~/pages/Login";
import Category from "~/pages/store/Category";
import AccountManage from "~/pages/AccountManage";
import AddProduct from "~/pages/product/AddProduct";
import ProductList from "~/pages/product/ProductList";
import ProductDetail from "~/pages/product/ProductDetail";

export const ROUT_DATA = [
    {path: "/", element: Home, layout: HomeLayout},
    {path: "/blogs/:section", element: Blog, layout: HomeLayout},
    {path: "/blogs", element: Blog, layout: HomeLayout},
    {path: "/login", element: Login, layout: null},
    {path: "/store/category", element: Category, layout: HomeLayout},
    {path: "/account-manage", element: AccountManage, layout: HomeLayout},
    {path: "/product/add", element: AddProduct, layout: HomeLayout},
    {path: "/product/list", element: ProductList, layout: HomeLayout},
    {path: "/product/detail", element: ProductDetail, layout: HomeLayout},
]