import HomeLayout from "~/components/layout/HomeLayout";
import Home from "~/pages/Home";
import Blog from "~/pages/blog/Blog";
import Login from "~/pages/Login";

export const ROUT_DATA = [
    {path: "/", element: Home, layout: HomeLayout},
    {path: "/blogs/:section", element: Blog, layout: HomeLayout},
    {path: "/blogs", element: Blog, layout: HomeLayout},
    {path: "/login", element: Login, layout: null},
]