import HomeLayout from "~/components/layout/HomeLayout";

import Blog from "~/pages/blog/Blog";
import HomePage from "~/pages/HomePage";

export const ROUT_DATA = [
    {path: "/", element: HomePage, layout: HomeLayout},
    {path: "/blogs/:section", element: Blog, layout: HomeLayout},
    {path: "/blogs", element: Blog, layout: HomeLayout},
]