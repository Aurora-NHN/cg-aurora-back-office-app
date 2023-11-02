import {Route, Routes} from "react-router-dom";
import {ROUT_DATA} from "./routeData";
import HomeLayout from "~/components/layout/HomeLayout";
import HomePage from "~/pages/HomePage";

function AppRoutes(){

    return(
        <Routes>
            {
                ROUT_DATA.map((route, index) => {
                    const Layout = route.layout
                    const Page = route.element
                    return <Route key={index} path={route.path} element={Layout !== null ? <Layout><Page/></Layout> : <Page/>}/>
                })
            }
            <Route path="*" element={<HomeLayout><HomePage/></HomeLayout>}/>
        </Routes>
    )
}
export default AppRoutes