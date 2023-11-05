import React from 'react';
import a_logo from "~/assets/images/a-test.png"
import clsx from "clsx";
import aurora_logo from "~/assets/images/aurora.png";
import {useSelector} from "react-redux";
import {selectSidebarPosition} from "~/features/toggleSidebar";
import Profile from "~/components/profile/Profile";
import {Link, useParams} from "react-router-dom";

function Sidebar() {
    const param = useParams();
    const active = useSelector(selectSidebarPosition);

    return (
        <>
            <nav
                className={clsx("sidebar sidebar-offcanvas", {active: active})}
                id="sidebar"
            >
                <div
                    className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                    <Link to={"/"} className="sidebar-brand brand-logo">
                        <img src={aurora_logo} alt="logo"/>
                    </Link>
                    <a className="sidebar-brand brand-logo-mini" href="#">
                        <img src={a_logo} alt="logo"/>
                    </a>
                </div>
                <ul className="nav">
                    <li className="nav-item profile">
                        <Profile/>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">Navigation</span>
                    </li>
                    <li className="nav-item menu-items">
                        {/* <Link to="/account-manage" className="nav-link">
                <span className="menu-icon">
                  <i className="mdi mdi-security"></i>
                </span>
                <span className="menu-title">Account manage</span>
              </Link> */}
                        <Link
                            className="nav-link"
                            data-bs-toggle="collapse"
                            to="#ui-basic"
                            aria-expanded="false"
                            aria-controls="ui-basic"
                        >
                <span className="menu-icon">
                  <i className="mdi mdi-store"></i>
                </span>
                            <span className="menu-title">Account manage</span>
                            <i className="menu-arrow"></i>
                        </Link>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users">
                                        User List
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item menu-items">
                        <a
                            className="nav-link"
                            data-bs-toggle="collapse"
                            href="#ui-basic"
                            aria-expanded="false" // xem lại phần này
                            aria-controls="ui-basic"
                        >
                <span className="menu-icon">
                  <i className="mdi mdi-store"></i>
                </span>
                            <span className="menu-title">Store manage</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/store/category">
                                        Category
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/store/sub-category">
                                        Sub Category
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item menu-items">
                        <Link
                            className="nav-link"
                            data-bs-toggle="collapse"
                            to="#ui-basic-product"
                            aria-expanded="false" // xem lại phần này
                            aria-controls="ui-basic"
                        >
                <span className="menu-icon">
                  <i className="mdi mdi-collage"></i>
                </span>
                            <span className="menu-title">Product manage</span>
                            <i className="menu-arrow"></i>
                        </Link>
                        <div className="collapse" id="ui-basic-product">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product/add">
                                        Add Product
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/product/list">
                                        List Product
                                    </Link>
                                </li>
                                <li className="nav-item">
                    <span className="nav-link cursor-pointer disabled">
                      Product Detail
                    </span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="#">
                <span className="menu-icon">
                  <i className="mdi mdi-cart"></i>
                </span>
                            <span className="menu-title">Order manage</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a
                            className="nav-link"
                            data-bs-toggle="collapse"
                            href="#ui-basic-2"
                            aria-expanded="false" // xem lại phần này
                            aria-controls="ui-basic"
                        >
                <span className="menu-icon">
                  <i className="mdi mdi-newspaper"></i>
                </span>
                            <span className="menu-title">Blog manage</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic-2">
                            <ul className="nav flex-column sub-menu">
                                <li
                                    className={clsx("nav-item", {
                                        "section-active":
                                            param.section === undefined &&
                                            window.location.pathname === "/blogs",
                                    })}
                                >
                                    <Link to="/blogs" className="nav-link">
                                        Blog management
                                    </Link>
                                </li>
                                <li
                                    className={clsx("nav-item", {
                                        "section-active": param.section === "new",
                                    })}
                                >
                                    <Link to="/blogs/new" className="nav-link">
                                        New Blog
                                    </Link>
                                </li>
                                <li
                                    className={clsx("nav-item", {
                                        "section-active": param.section === "category",
                                    })}
                                >
                                    <Link to="/blogs/category" className="nav-link">
                                        Blog Category
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item menu-items">
                        <a
                            className="nav-link"
                            data-bs-toggle="collapse"
                            href="#ui-basic-3"
                            aria-expanded="false" // xem lại phần này
                            aria-controls="ui-basic"
                        >
                <span className="menu-icon">
                  <i className="mdi mdi-server"></i>
                </span>
                            <span className="menu-title">Data manage</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic-3">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Numerology
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Tarot
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Astrology
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item menu-items">
                        <a className="nav-link" href="#">
                <span className="menu-icon">
                  <i className="mdi mdi-coin"></i>
                </span>
                            <span className="menu-title">Revenue manage</span>
                        </a>
                    </li>

                    <li className="nav-item menu-items">
                        <a className="nav-link" href="pages/icons/mdi.html">
                <span className="menu-icon">
                  <i className="mdi mdi-content-paste"></i>
                </span>
                            <span className="menu-title">Report</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;