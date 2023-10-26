import React, {useEffect} from 'react';
import {
    loginAdmin,
    selectAuthIsError,
    selectLoginSuccess,
    setLoginError,
    setLoginSuccess,
    setToken
} from "~/features/loginSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";

function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const successLogin = useSelector(selectLoginSuccess);
    const errorLogin = useSelector(selectAuthIsError);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            dispatch(loginAdmin(values));
        },
    });

    useEffect(() => {
        if (successLogin) {
            toast.success("Login Success !", {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.SUCCESS,
            });
            formik.resetForm();
            const token = localStorage.getItem("token");
            dispatch(setToken(token));
            dispatch(setLoginSuccess(false));
            navigate("/");
        } else if (errorLogin !== null) {
            toast.error(errorLogin, {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.ERROR,
            });
            dispatch(setLoginError(null));
        }
    }, [successLogin, errorLogin]);

    return(
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="row w-100 m-0">
                        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                            <div className="card col-lg-4 mx-auto">
                                <div className="card-body px-5 py-5">
                                    <h3 className="card-title text-left mb-3">Login</h3>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                className={`form-control p_input ${
                                                    formik.errors.username && formik.touched.username
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                required
                                                aria-required="true"
                                                value={formik.values.username}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.username &&
                                                formik.touched.username && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.username}
                                                    </div>
                                                )}
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className={`form-control ${
                                                    formik.errors.password && formik.touched.password
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                aria-required="true"
                                                required
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.password &&
                                                formik.touched.password && (
                                                    <div className="invalid-feedback">
                                                        {formik.errors.password}
                                                    </div>
                                                )}
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block enter-btn"
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Login