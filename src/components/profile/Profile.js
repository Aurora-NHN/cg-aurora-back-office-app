import React, {useEffect, useState} from 'react';
import face15 from "~/assets/images/faces/face15.jpg";
import avt from "~/assets/images/logo-aurora.png";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutAdmin, selectLogoutSuccess, selectToken, setLogoutSuccess} from "~/features/loginSlice";
import {toast} from "react-toastify";

function Profile(props) {
    const token = useSelector(selectToken);
    const logoutSuccess = useSelector(selectLogoutSuccess);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (logoutSuccess) {
            toast.success("Logout Success !", {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.SUCCESS,
            });
            dispatch(setLogoutSuccess(false));
            navigate("/login");
        }
    }, [logoutSuccess]);
    const logout = () => {
        dispatch(logoutAdmin(token));
        localStorage.removeItem("token");
    };

    return (
        <div className="profile-desc">
            <div className="profile-pic">
                <div className="count-indicator">
                    <img className="img-xs rounded-circle " src={avt} alt="avatar"/>
                    <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                    <h5 className="mb-0 font-weight-normal">Admin</h5>
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
                
                <a className="dropdown-item preview-item cursor-pointer" onClick={logout}>
                    <div className="preview-thumbnail">
                        <div className="preview-icon bg-dark rounded-circle">
                            <i className="mdi mdi-logout text-danger"></i>
                        </div>
                    </div>
                    <div className="preview-item-content">
                        <span className="preview-subject mb-1">Log out</span>
                    </div>
                </a>

            </div>
        </div>
    );
}

export default Profile;