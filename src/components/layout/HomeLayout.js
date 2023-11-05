import React from 'react';
import Sidebar from "~/components/common/Sidebar";
import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";

function HomeLayout({children}) {
    return (
        <>
            <div className="container-scroller">

                <Sidebar/>
                <div className="container-fluid page-body-wrapper">
                    <Header/>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            {children}
                        </div>
                        <Footer/>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeLayout;