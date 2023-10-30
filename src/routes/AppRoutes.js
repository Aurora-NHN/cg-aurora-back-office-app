import {Route, Routes} from "react-router-dom";
import {ROUT_DATA} from "./routeData";
import Home from "~/pages/Home";
import HomeLayout from "~/components/layout/HomeLayout";

function AppRoutes(){

    return(
        <Routes>
            {
                ROUT_DATA.map((route, index) => {
                    const Layout = route.layout
                    const Page = route.element
                    return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
                })
            }
            <Route path="*" element={<HomeLayout><Home/></HomeLayout>}/>
        </Routes>
    )
}
export default AppRoutes