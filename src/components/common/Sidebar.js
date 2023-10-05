import React, {useEffect} from 'react';
import a_logo from "~/assets/images/a-test.png"
import face15 from "~/assets/images/faces/face15.jpg"
import clsx from "clsx";
import aurora_logo from "~/assets/images/aurora.png";
import {useSelector} from "react-redux";
import {selectSidebarActive, selectSidebarPosition} from "~/features/toggle_sidebar";

function Sidebar(){
    const active = useSelector(selectSidebarPosition);
    const sidebarActive = useSelector(selectSidebarActive);


    useEffect(()=>{
        console.log(active)
    },[active])
    return(
        <>
            <nav className={clsx('sidebar sidebar-offcanvas', {"active":active})} id="sidebar">
                <div
                    className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                    <a className="sidebar-brand brand-logo" href="#"><img src={aurora_logo}
                                                                                   alt="logo"/></a>
                    <a className="sidebar-brand brand-logo-mini" href="#"><img
                        src={a_logo} alt="logo"/></a>
                </div>
                <ul className="nav">
                    <li className="nav-item profile">
                        <div className="profile-desc">
                            <div className="profile-pic">
                                <div className="count-indicator">
                                    <img className="img-xs rounded-circle " src={face15} alt=""/>
                                        <span className="count bg-success"></span>
                                </div>
                                <div className="profile-name">
                                    <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                                    <span>Gold Member</span>
                                </div>
                            </div>
                            <a href="#" id="profile-dropdown" data-bs-toggle="dropdown"><i
                                className="mdi mdi-dots-vertical"></i></a>
                            <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                                 aria-labelledby="profile-dropdown">
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-settings text-primary"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-onepassword  text-info"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-logout text-danger"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject mb-1">Log out</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-calendar-today text-success"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                    </div>

                                </a>

                            </div>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">Navigation</span>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="pages/icons/mdi.html">
                            <span className="menu-icon">
                                <i className="mdi mdi-security"></i>
                            </span>
                            <span className="menu-title">Account manage</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" // xem lại phần này
                           aria-controls="ui-basic">
                            <span className="menu-icon">
                                <i className="mdi mdi-store"></i>
                            </span>
                            <span className="menu-title">Store manage</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Category</a></li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Sub category</a></li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Product</a></li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Product review</a></li>
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
                        <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic-2" aria-expanded="false" // xem lại phần này
                           aria-controls="ui-basic">
                            <span className="menu-icon">
                                <i className="mdi mdi-newspaper"></i>
                            </span>
                            <span className="menu-title">Post manage</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic-2">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Post category</a></li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Post</a></li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Comment</a></li>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item menu-items">
                        <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic-3" aria-expanded="false" // xem lại phần này
                           aria-controls="ui-basic">
                            <span className="menu-icon">
                                <i className="mdi mdi-server"></i>
                            </span>
                            <span className="menu-title">Data manage</span>
                            <i className="menu-arrow"></i>
                        </a>
                        <div className="collapse" id="ui-basic-3">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Numerology</a></li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Tarot</a></li>
                                <li className="nav-item"><a className="nav-link"
                                                            href="#">Astrology</a></li>
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
export  default Sidebar;