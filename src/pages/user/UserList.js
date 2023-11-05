import {Link, useNavigate} from "react-router-dom";
import {Paginator} from "primereact/paginator";
import {useEffect, useRef, useState} from "react";
import {classNames} from "primereact/utils";
import {Ripple} from "primereact/ripple";
import {Divider} from "primereact/divider";
import {useDispatch, useSelector} from "react-redux";
import {
    changeRoles,
    deleteUsers,
    getAllUserPage,
    registerUser,
    selectSuccessOfChangeRole,
    selectSuccessOfDelete,
    selectSuccessOfRegister,
    selectTotalElements,
    selectUserList,
    setSuccessOfRegister
} from "~/features/userSlice";
import {VIETNAMESE_REGEX} from "~/app/constants";
import {useFormik} from "formik";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

function UserList() {
    const navigate = useNavigate();
    const users = useSelector(selectUserList);
    const dispatch = useDispatch();
    const successRegister = useSelector(selectSuccessOfRegister);
    const closeModal = useRef();
    const [first, setFirst] = useState([0, 0, 0]);
    const [rows, setRows] = useState([10, 10, 10]);
    const totalElements = useSelector(selectTotalElements);
    const [username, setUsername] = useState("");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [pageable, setPageable] = useState({
        page: page,
        size: size,
        username: username
    });
    const successOfChangeRole = useSelector(selectSuccessOfChangeRole);
    const successOfDelete = useSelector(selectSuccessOfDelete);

    const handleInfo = (user) => {
        // navigate("/user/profile");
        // console.log(user)
    };
    const onPageChange = (e, index) => {
        setPageable({
            page: e.page,
            size: e.rows,
            username: username
        })
        setFirst(first.map((f, i) => (index === i ? e.first : f)));
        setRows(rows.map((r, i) => (index === i ? e.rows : r)));
    };

    const template1 = {
        layout:
            "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport",
        PrevPageLink: (options) => {
            return (
                <button
                    type="button"
                    className={classNames(options.className, "border-round")}
                    onClick={options.onClick}
                    disabled={options.disabled}
                >
                    <span className="p-3">Previous</span>
                    <Ripple/>
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button
                    type="button"
                    className={classNames(options.className, "border-round")}
                    onClick={options.onClick}
                    disabled={options.disabled}
                >
                    <span className="p-3">Next</span>
                    <Ripple/>
                </button>
            );
        },
        PageLinks: (options) => {
            if (
                (options.view.startPage === options.page &&
                    options.view.startPage !== 0) ||
                (options.view.endPage === options.page &&
                    options.page + 1 !== options.totalPages)
            ) {
                const className = classNames(options.className, {
                    "p-disabled": true,
                });

                return (
                    <span className={className} style={{userSelect: "none"}}>
              ...
            </span>
                );
            }

            return (
                <button
                    type="button"
                    className={options.className}
                    onClick={options.onClick}
                >
                    {options.page + 1}
                    <Ripple/>
                </button>
            );
        },
    };

    useEffect(() => {
        dispatch(getAllUserPage(pageable));
    }, [pageable, successRegister, successOfChangeRole, successOfDelete]);

    const handleSearchInputChange = (e) => {
        if (e === undefined) {
            setUsername("");
        } else {
            setUsername(e);
        }

    };

    const handleReset = () => {
        formik.resetForm();
    };

    const initialValues = {
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phoneNumber: "",
        gender: "Gender",
    };

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .matches(
                VIETNAMESE_REGEX,
                "Full name doesn't contain numbers or special characters"
            )
            .required("Full name is required"),
        username: Yup.string()
            .required("Username is required")
            .matches(
                /^[a-z0-9_-]{8,20}$/,
                "Username can only use letters,numbers, minimum length is 8 characters"
            ),
        password: Yup.string()
            .required("Password is required")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "Password must contain at least 8 characters, at least one letter and one number"
            ),
        confirmPassword: Yup.string()
            .required("Confirm New Password is required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email"),
        phoneNumber: Yup.string()
            .required("Phone Number is required")
            .matches(/^\d{10}$/, "Phone Number must be a 10-digit number"),
        gender: Yup.string()
            .required("Gender is required")
            .notOneOf(["Gender"], "Please select a gender"),
    });

    const onSubmit = (values) => {
        dispatch(registerUser(values));
    };

    useEffect(() => {

        if (successRegister) {
            formik.resetForm();
            setTimeout(() => {
                closeModal.current.click();
            }, 100);
            dispatch(setSuccessOfRegister(false));
        }
    }, [successRegister]);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    function handleSearchSubmit(e) {
        e.preventDefault()
        dispatch(getAllUserPage({
            page: page,
            size: size,
            username: username
        }))
    }

    function handleChangeRole(name) {
        dispatch(changeRoles(name));
    }

    function handleDelete(name) {
        dispatch(deleteUsers(name));
    }

    return (
        <div className="content">
            <div
                className="breadcrumb-wrapper breadcrumb-contacts"
                style={{marginBottom: 0}}
            >
                <div>
                    <h1 className="text-light">User List</h1>
                    <p className="breadcrumbs">
            <span>
              <Link to="/">Home</Link>
            </span>
                        <span>
              <i className="mdi mdi-chevron-right"/>
            </span>
                        User List
                    </p>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addUser"
                        style={{
                            borderColor: "#88aaf3",
                            color: "#ffffff",
                            borderRadius: 15,
                            height: 40,
                            display: "flex",
                        }}
                    >
            <span style={{margin: "auto", position: "relative"}}>
              Add User
            </span>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="ec-vendor-list card card-default rounded-4">
                        <div className="card-body">
                            <div className="table-responsive" style={{overflowX: "hidden"}}>
                                <div
                                    id="responsive-data-table_wrapper"
                                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                                >
                                    <div className="row justify-content-around top-information">
                                        <div
                                            className="dataTables_length col"
                                            id="responsive-data-table_length"
                                        >
                                        </div>
                                        <div
                                            id="responsive-data-table_filter"
                                            className="dataTables_filter col d-flex justify-content-end"
                                        >
                                            <form onSubmit={(e) => handleSearchSubmit(e)}>
                                                <label style={{display: "flex"}}>

                                                    <input
                                                        type="search"
                                                        className="form-control form-control-sm"
                                                        placeholder=""
                                                        aria-controls="responsive-data-table"
                                                        style={{width: "fit-content"}}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') handleSearchSubmit(e)
                                                        }}
                                                        onChange={(e) => handleSearchInputChange(e.target.value)}
                                                    />
                                                    <input type="submit" value="Search"
                                                           style={{margin: "auto 0.5rem"}}/>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                    <table
                                        id="responsive-data-table"
                                        className="table dataTable no-footer table-dark table-striped table-hover"
                                        aria-describedby="responsive-data-table_info"
                                    >
                                        <thead>
                                        <tr>
                                            <th
                                                className="sorting sorting_asc"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-sort="ascending"
                                                aria-label="Profile: activate to sort column descending"
                                                style={{width: "70.7px"}}
                                            >
                                                Profile
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Name: activate to sort column ascending"
                                                style={{width: "103.475px"}}
                                            >
                                                Username
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Email: activate to sort column ascending"
                                                style={{width: "205.65px"}}
                                            >
                                                Role
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Phone: activate to sort column ascending"
                                                style={{width: "141.062px"}}
                                            >
                                                Count
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Total Buy: activate to sort column ascending"
                                                style={{width: "94.0625px"}}
                                            >
                                                Total count
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Status: activate to sort column ascending"
                                                style={{width: "70.0375px"}}
                                            >
                                                Status
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Action: activate to sort column ascending"
                                                style={{width: "89.5625px"}}
                                            >
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {users.map((user, index) =>
                                            (<tr className="odd" key={index}>
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/vendor/u1.jpg"
                                                        alt="user profile"
                                                        style={{transform: "translateX(22px)"}}
                                                    />
                                                </td>
                                                <td>{user.username}</td>
                                                <td>{user.role}</td>
                                                <td>{user.count}</td>
                                                <td>{user.totalCount}</td>
                                                <td>{user.activated ? "Active" : "UnActive"}</td>
                                                <td>
                                                    <div
                                                        className="btn-group mb-1"
                                                        style={{height: 30}}
                                                    >
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
                                                            onClick={() => {
                                                                handleInfo(user)
                                                            }}
                                                        >
                                                            Info
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            data-display="static"
                                                        >
                                                            <span className="sr-only">Info</span>
                                                        </button>
                                                        <div className="dropdown-menu"
                                                             aria-labelledby="dropdownMenuButtonDark">
                                                            <Link className="dropdown-item" to="#"
                                                                  onClick={() => handleChangeRole(user.username)}>
                                                                Change role
                                                            </Link>
                                                            <Link className="dropdown-item" to="#"
                                                                  onClick={() => handleDelete(user.username)}>
                                                                Delete
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>)
                                        )}
                                        </tbody>
                                    </table>
                                    <div className="row justify-content-between bottom-information">
                                        <div
                                            className="dataTables_info"
                                            id="responsive-data-table_info"
                                            role="status"
                                            aria-live="polite"
                                        >
                                        </div>
                                        <div className="card">
                                            <Paginator
                                                template={template1}
                                                first={first[0]}
                                                rows={rows[0]}
                                                totalRecords={totalElements}
                                                onPageChange={(e) => onPageChange(e, 0)}
                                            />
                                            <Divider/>
                                        </div>
                                    </div>
                                    <div className="clear"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add User Modal  */}
            <div
                className="modal fade modal-add-contact"
                id="addUser"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                >
                    <div className="modal-content">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="modal-header px-4">
                                <h5 className="modal-title" id="exampleModalCenterTitle">
                                    Add New User
                                </h5>
                            </div>
                            <div className="modal-body px-4">
                                <div className="row mb-2">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="username" className="fs-6">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    formik.errors.username && formik.touched.username
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="username"
                                                placeholder="hong bao"
                                                value={formik.values.username}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.username && (
                                                <div className="invalid-feedback">
                                                    {formik.errors.username}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-4">
                                            <label htmlFor="fullName" className="fs-6">
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${
                                                    formik.errors.fullName && formik.touched.fullName
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                id="fullName"
                                                placeholder="johndoe"
                                                value={formik.values.fullName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.fullName && (
                                                <div className="invalid-feedback">
                                                    {formik.errors.fullName}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-4">
                                            <label htmlFor="email" className="fs-6">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className={`form-control ${
                                                    formik.errors.email && formik.touched.email
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                placeholder="Email"
                                                aria-required="true"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.email && (
                                                <div className="invalid-feedback">
                                                    {formik.errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-4">
                                            <label htmlFor="phoneNumber" className="fs-6">
                                                Phone number
                                            </label>
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                className={`form-control ${
                                                    formik.errors.phoneNumber &&
                                                    formik.touched.phoneNumber
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                placeholder="Phone Number"
                                                required
                                                aria-required="true"
                                                value={formik.values.phoneNumber}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.phoneNumber && (
                                                <div className="invalid-feedback">
                                                    {formik.errors.phoneNumber}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="password" className="fs-6">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                className={`form-control ${
                                                    formik.errors.password && formik.touched.password
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                placeholder="Password"
                                                aria-required="true"
                                                required
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.password && (
                                                <div className="invalid-feedback">
                                                    {formik.errors.password}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword" className="fs-6">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                className={`form-control ${
                                                    formik.errors.confirmPassword &&
                                                    formik.touched.confirmPassword
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                placeholder="Confirm Password"
                                                aria-required="true"
                                                required
                                                value={formik.values.confirmPassword}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.confirmPassword && (
                                                <div className="invalid-feedback">
                                                    {formik.errors.confirmPassword}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="form-label">Gender</label>
                                        <select
                                            style={{color: "white "}}
                                            name="gender"
                                            className={`form-control ${
                                                formik.errors.gender && formik.touched.gender
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            required
                                            aria-required="true"
                                            value={formik.values.gender}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                            <option value="Gender" disabled hidden>
                                                Gender
                                            </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {formik.errors.gender && (
                                            <div className="invalid-feedback">
                                                {formik.errors.gender}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer px-4">
                                <button
                                    ref={closeModal}
                                    onClick={handleReset}
                                    type="button"
                                    className="btn btn-secondary btn-pill"
                                    data-bs-dismiss="modal"
                                    style={{height: 40}}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-pill"
                                    style={{height: 40}}
                                >
                                    Save Contact
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;
