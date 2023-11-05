import React from 'react';

function AccountManage() {

    return (
        // <>
        //     {/*<div className="row ">*/}
        //     {/*    <div className="col-12 grid-margin">*/}
        //     {/*        <div className="card">*/}
        //     {/*            <div className="card-body">*/}
        //     {/*                <h4 className="card-title">Account Manage</h4>*/}
        //     {/*                <div className="table-responsive">*/}
        //     {/*                    <table className="table">*/}
        //     {/*                        <thead>*/}
        //     {/*                        <tr>*/}
        //     {/*                            <th>*/}
        //     {/*                                <div className="form-check form-check-muted m-0">*/}
        //     {/*                                    <label className="form-check-label">*/}
        //     {/*                                        <input type="checkbox" className="form-check-input"/>*/}
        //     {/*                                    </label>*/}
        //     {/*                                </div>*/}
        //     {/*                            </th>*/}
        //     {/*                            <th> Client Name</th>*/}
        //     {/*                            <th> Order No</th>*/}
        //     {/*                            <th> Product Cost</th>*/}
        //     {/*                            <th> Project</th>*/}
        //     {/*                            <th> Payment Mode</th>*/}
        //     {/*                            <th> Start Date</th>*/}
        //     {/*                            <th> Payment Status</th>*/}
        //     {/*                        </tr>*/}
        //     {/*                        </thead>*/}
        //     {/*                        <tbody>*/}
        //     {/*                        <tr>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="form-check form-check-muted m-0">*/}
        //     {/*                                    <label className="form-check-label">*/}
        //     {/*                                        <input type="checkbox" className="form-check-input"/>*/}
        //     {/*                                    </label>*/}
        //     {/*                                </div>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <img src="assets/images/faces/face1.jpg" alt="image"/>*/}
        //     {/*                                <span className="pl-2">Henry Klein</span>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td> 02312</td>*/}
        //     {/*                            <td> $14,500</td>*/}
        //     {/*                            <td> Dashboard</td>*/}
        //     {/*                            <td> Credit card</td>*/}
        //     {/*                            <td> 04 Dec 2019</td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="badge badge-outline-success">Approved</div>*/}
        //     {/*                            </td>*/}
        //     {/*                        </tr>*/}
        //     {/*                        <tr>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="form-check form-check-muted m-0">*/}
        //     {/*                                    <label className="form-check-label">*/}
        //     {/*                                        <input type="checkbox" className="form-check-input"/>*/}
        //     {/*                                    </label>*/}
        //     {/*                                </div>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <img src="assets/images/faces/face2.jpg" alt="image"/>*/}
        //     {/*                                <span className="pl-2">Estella Bryan</span>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td> 02312</td>*/}
        //     {/*                            <td> $14,500</td>*/}
        //     {/*                            <td> Website</td>*/}
        //     {/*                            <td> Cash on delivered</td>*/}
        //     {/*                            <td> 04 Dec 2019</td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="badge badge-outline-warning">Pending</div>*/}
        //     {/*                            </td>*/}
        //     {/*                        </tr>*/}
        //     {/*                        <tr>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="form-check form-check-muted m-0">*/}
        //     {/*                                    <label className="form-check-label">*/}
        //     {/*                                        <input type="checkbox" className="form-check-input"/>*/}
        //     {/*                                    </label>*/}
        //     {/*                                </div>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <img src="assets/images/faces/face5.jpg" alt="image"/>*/}
        //     {/*                                <span className="pl-2">Lucy Abbott</span>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td> 02312</td>*/}
        //     {/*                            <td> $14,500</td>*/}
        //     {/*                            <td> App design</td>*/}
        //     {/*                            <td> Credit card</td>*/}
        //     {/*                            <td> 04 Dec 2019</td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="badge badge-outline-danger">Rejected</div>*/}
        //     {/*                            </td>*/}
        //     {/*                        </tr>*/}
        //     {/*                        <tr>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="form-check form-check-muted m-0">*/}
        //     {/*                                    <label className="form-check-label">*/}
        //     {/*                                        <input type="checkbox" className="form-check-input"/>*/}
        //     {/*                                    </label>*/}
        //     {/*                                </div>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <img src="assets/images/faces/face3.jpg" alt="image"/>*/}
        //     {/*                                <span className="pl-2">Peter Gill</span>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td> 02312</td>*/}
        //     {/*                            <td> $14,500</td>*/}
        //     {/*                            <td> Development</td>*/}
        //     {/*                            <td> Online Payment</td>*/}
        //     {/*                            <td> 04 Dec 2019</td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="badge badge-outline-success">Approved</div>*/}
        //     {/*                            </td>*/}
        //     {/*                        </tr>*/}
        //     {/*                        <tr>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="form-check form-check-muted m-0">*/}
        //     {/*                                    <label className="form-check-label">*/}
        //     {/*                                        <input type="checkbox" className="form-check-input"/>*/}
        //     {/*                                    </label>*/}
        //     {/*                                </div>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <img src="assets/images/faces/face4.jpg" alt="image"/>*/}
        //     {/*                                <span className="pl-2">Sallie Reyes</span>*/}
        //     {/*                            </td>*/}
        //     {/*                            <td> 02312</td>*/}
        //     {/*                            <td> $14,500</td>*/}
        //     {/*                            <td> Website</td>*/}
        //     {/*                            <td> Credit card</td>*/}
        //     {/*                            <td> 04 Dec 2019</td>*/}
        //     {/*                            <td>*/}
        //     {/*                                <div className="badge badge-outline-success">Approved</div>*/}
        //     {/*                            </td>*/}
        //     {/*                        </tr>*/}
        //     {/*                        </tbody>*/}
        //     {/*                    </table>*/}
        //     {/*                </div>*/}
        //     {/*            </div>*/}
        //     {/*        </div>*/}
        //     {/*    </div>*/}
        //     {/*</div>*/}
        //
        // </>
        <>
            <div className="content">
                <div className="breadcrumb-wrapper breadcrumb-contacts">
                    <div>
                        <h1>User List</h1>
                        <p className="breadcrumbs">
        <span>
          <a href="index.html">Home</a>
        </span>
                            <span>
          <i className="mdi mdi-chevron-right" />
        </span>
                            User
                        </p>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#addUser"
                        >
                            {" "}
                            Add User
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="ec-vendor-list card card-default">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <div
                                        id="responsive-data-table_wrapper"
                                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                                    >
                                        <div className="row justify-content-between top-information">
                                            <div
                                                className="dataTables_length"
                                                id="responsive-data-table_length"
                                            >
                                                <label>
                                                    Show{" "}
                                                    <select
                                                        name="responsive-data-table_length"
                                                        aria-controls="responsive-data-table"
                                                        className="form-select form-select-sm"
                                                    >
                                                        <option value={20}>20</option>
                                                        <option value={30}>30</option>
                                                        <option value={50}>50</option>
                                                        <option value={75}>75</option>
                                                        <option value={-1}>All</option>
                                                    </select>{" "}
                                                    entries
                                                </label>
                                            </div>
                                            <div
                                                id="responsive-data-table_filter"
                                                className="dataTables_filter"
                                            >
                                                <label>
                                                    Search:
                                                    <input
                                                        type="search"
                                                        className="form-control form-control-sm"
                                                        placeholder=""
                                                        aria-controls="responsive-data-table"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        <table
                                            id="responsive-data-table"
                                            className="table dataTable no-footer"
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
                                                    style={{ width: "70.7px" }}
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
                                                    style={{ width: "103.475px" }}
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="responsive-data-table"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label="Email: activate to sort column ascending"
                                                    style={{ width: "205.65px" }}
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="responsive-data-table"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label="Phone: activate to sort column ascending"
                                                    style={{ width: "141.062px" }}
                                                >
                                                    Phone
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="responsive-data-table"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label="Total Buy: activate to sort column ascending"
                                                    style={{ width: "94.0625px" }}
                                                >
                                                    Total Buy
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="responsive-data-table"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label="Status: activate to sort column ascending"
                                                    style={{ width: "70.0375px" }}
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="responsive-data-table"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label="Join On: activate to sort column ascending"
                                                    style={{ width: "81.45px" }}
                                                >
                                                    Join On
                                                </th>
                                                <th
                                                    className="sorting"
                                                    tabIndex={0}
                                                    aria-controls="responsive-data-table"
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label="Action: activate to sort column ascending"
                                                    style={{ width: "89.5625px" }}
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u1.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Marlee Rena</td>
                                                <td>marleerena@gmail.com</td>
                                                <td>+1-256-325-8652</td>
                                                <td>2161</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-30</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu" style={{}}>
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u2.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Johnee Bolbi</td>
                                                <td>johneebolbi@gmail.com</td>
                                                <td>+5-256-325-8652</td>
                                                <td>5161</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-25</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u3.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Johnee Bolbi</td>
                                                <td>johneebolbi@gmail.com</td>
                                                <td>+5-256-325-8652</td>
                                                <td>5161</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-25</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u4.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Mohini Marlo</td>
                                                <td>mohinimarlo@gmail.com</td>
                                                <td>+91-154-325-8652</td>
                                                <td>1561</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-21</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u5.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Nitilo Kathilo</td>
                                                <td>nitilokathilo@gmail.com</td>
                                                <td>+91-989-325-8652</td>
                                                <td>1061</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-18</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u6.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Hardi Sandhu</td>
                                                <td>hardisandhu@gmail.com</td>
                                                <td>+1-789-325-6589</td>
                                                <td>10061</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-14</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u7.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Bhavlo Malvia</td>
                                                <td>bhavlomalvia@gmail.com</td>
                                                <td>+91-989-325-8652</td>
                                                <td>3061</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-05</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u8.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Jeni Dusuja</td>
                                                <td>jenidusuja@gmail.com</td>
                                                <td>+1-967-325-1122</td>
                                                <td>6061</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-01</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u1.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Marlee Rena</td>
                                                <td>marleerena@gmail.com</td>
                                                <td>+1-256-325-8652</td>
                                                <td>2161</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-30</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u2.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Johnee Bolbi</td>
                                                <td>johneebolbi@gmail.com</td>
                                                <td>+5-256-325-8652</td>
                                                <td>5161</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-25</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u3.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Johnee Bolbi</td>
                                                <td>johneebolbi@gmail.com</td>
                                                <td>+5-256-325-8652</td>
                                                <td>5161</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-25</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u4.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Mohini Marlo</td>
                                                <td>mohinimarlo@gmail.com</td>
                                                <td>+91-154-325-8652</td>
                                                <td>1561</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-21</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u5.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Nitilo Kathilo</td>
                                                <td>nitilokathilo@gmail.com</td>
                                                <td>+91-989-325-8652</td>
                                                <td>1061</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-18</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u6.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Hardi Sandhu</td>
                                                <td>hardisandhu@gmail.com</td>
                                                <td>+1-789-325-6589</td>
                                                <td>10061</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-14</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u7.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Bhavlo Malvia</td>
                                                <td>bhavlomalvia@gmail.com</td>
                                                <td>+91-989-325-8652</td>
                                                <td>3061</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-05</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u8.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Jeni Dusuja</td>
                                                <td>jenidusuja@gmail.com</td>
                                                <td>+1-967-325-1122</td>
                                                <td>6061</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-01</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u1.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Marlee Rena</td>
                                                <td>marleerena@gmail.com</td>
                                                <td>+1-256-325-8652</td>
                                                <td>2161</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-30</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u2.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Johnee Bolbi</td>
                                                <td>johneebolbi@gmail.com</td>
                                                <td>+5-256-325-8652</td>
                                                <td>5161</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-25</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u3.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Johnee Bolbi</td>
                                                <td>johneebolbi@gmail.com</td>
                                                <td>+5-256-325-8652</td>
                                                <td>5161</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-25</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even">
                                                <td className="sorting_1">
                                                    <img
                                                        className="vendor-thumb"
                                                        src="assets/img/vendor/u4.jpg"
                                                        alt="user profile"
                                                    />
                                                </td>
                                                <td>Mohini Marlo</td>
                                                <td>mohinimarlo@gmail.com</td>
                                                <td>+91-154-325-8652</td>
                                                <td>1561</td>
                                                <td>ACTIVE</td>
                                                <td>2021-10-21</td>
                                                <td>
                                                    <div className="btn-group mb-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-outline-success"
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
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#">
                                                                Edit
                                                            </a>
                                                            <a className="dropdown-item" href="#">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div className="row justify-content-between bottom-information">
                                            <div
                                                className="dataTables_info"
                                                id="responsive-data-table_info"
                                                role="status"
                                                aria-live="polite"
                                            >
                                                Showing 1 to 20 of 88 entries
                                            </div>
                                            <div
                                                className="dataTables_paginate paging_simple_numbers"
                                                id="responsive-data-table_paginate"
                                            >
                                                <ul className="pagination">
                                                    <li
                                                        className="paginate_button page-item previous disabled"
                                                        id="responsive-data-table_previous"
                                                    >
                                                        <a
                                                            href="#"
                                                            aria-controls="responsive-data-table"
                                                            data-dt-idx={0}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            Previous
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <a
                                                            href="#"
                                                            aria-controls="responsive-data-table"
                                                            data-dt-idx={1}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            1
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="responsive-data-table"
                                                            data-dt-idx={2}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            2
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="responsive-data-table"
                                                            data-dt-idx={3}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            3
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="responsive-data-table"
                                                            data-dt-idx={4}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            4
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item ">
                                                        <a
                                                            href="#"
                                                            aria-controls="responsive-data-table"
                                                            data-dt-idx={5}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            5
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="paginate_button page-item next"
                                                        id="responsive-data-table_next"
                                                    >
                                                        <a
                                                            href="#"
                                                            aria-controls="responsive-data-table"
                                                            data-dt-idx={6}
                                                            tabIndex={0}
                                                            className="page-link"
                                                        >
                                                            Next
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* AddProduct User Modal  */}
                <div
                    className="modal fade modal-add-contact"
                    id="addUser"
                    tabIndex={-1}
                    aria-labelledby="exampleModalCenterTitle"
                    style={{ display: "none" }}
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-dialog-centered modal-lg"
                        role="document"
                    >
                        <div className="modal-content">
                            <form>
                                <div className="modal-header px-4">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">
                                        Add New User
                                    </h5>
                                </div>
                                <div className="modal-body px-4">
                                    <div className="form-group row mb-6">
                                        <label
                                            htmlFor="coverImage"
                                            className="col-sm-4 col-lg-2 col-form-label"
                                        >
                                            User Image
                                        </label>
                                        <div className="col-sm-8 col-lg-10">
                                            <div className="custom-file mb-1">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="coverImage"
                                                    required=""
                                                />
                                                <label className="custom-file-label" htmlFor="coverImage">
                                                    Choose file...
                                                </label>
                                                <div className="invalid-feedback">
                                                    Example invalid custom file feedback
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="firstName">First name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="firstName"
                                                    defaultValue="John"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="lastName">Last name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="lastName"
                                                    defaultValue="Deo"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-4">
                                                <label htmlFor="userName">User name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="userName"
                                                    defaultValue="johndoe"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-4">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    defaultValue="johnexample@gmail.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-4">
                                                <label htmlFor="Birthday">Birthday</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Birthday"
                                                    defaultValue="10-12-1991"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mb-4">
                                                <label htmlFor="event">Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="event"
                                                    defaultValue="Address here"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer px-4">
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-pill"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button type="button" className="btn btn-primary btn-pill">
                                        Save Contact
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>


);
}

export default AccountManage