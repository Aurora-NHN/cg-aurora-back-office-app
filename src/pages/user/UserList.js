import { useNavigate } from "react-router-dom";
import { Paginator } from "primereact/paginator";
import { useState } from "react";
import { classNames } from "primereact/utils";
import { Ripple } from "primereact/ripple";
import { Divider } from "primereact/divider";

function UserList() {
  const navigate = useNavigate();
  const handleInfo = () => {
    navigate("/user/profile");
  };
    const [first, setFirst] = useState([0, 0, 0]);
    const [rows, setRows] = useState([10, 10, 10]);

    const onPageChange = (e, index) => {
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
            <Ripple />
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
            <Ripple />
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
            <span className={className} style={{ userSelect: "none" }}>
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
            <Ripple />
          </button>
        );
      },
    };
  return (
    <div className="content">
      <div
        className="breadcrumb-wrapper breadcrumb-contacts"
        style={{ marginBottom: 0 }}
      >
        <div>
          <h1 className="text-light">User List</h1>
          <p className="breadcrumbs">
            <span>
              <a href="index.html">Home</a>
            </span>
            <span>
              <i className="mdi mdi-chevron-right" />
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
            <span style={{ margin: "auto", position: "relative" }}>
              Add User
            </span>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="ec-vendor-list card card-default rounded-4">
            <div className="card-body">
              <div className="table-responsive" style={{ overflowX: "hidden" }}>
                <div
                  id="responsive-data-table_wrapper"
                  className="dataTables_wrapper dt-bootstrap5 no-footer"
                >
                  <div className="row justify-content-between top-information">
                    <div
                      className="dataTables_length col"
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
                      className="dataTables_filter col"
                      style={{
                        transform: "translateX(57%)",
                      }}
                    >
                      <label style={{ display: "flex" }}>
                        <span style={{ margin: "auto 0" }}>Search:</span>
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder=""
                          aria-controls="responsive-data-table"
                          style={{ width: "fit-content" }}
                        />
                      </label>
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
                            src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/vendor/u1.jpg"
                            alt="user profile"
                            style={{ transform: "translateX(22px)" }}
                          />
                        </td>
                        <td>Marlee Rena</td>
                        <td>marleerena@gmail.com</td>
                        <td>+1-256-325-8652</td>
                        <td>2161</td>
                        <td>ACTIVE</td>
                        <td>2021-10-30</td>
                        <td>
                          <div
                            className="btn-group mb-1"
                            style={{ height: 30 }}
                          >
                            <button
                              type="button"
                              className="btn btn-outline-success"
                              onClick={handleInfo}
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
                            src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/vendor/u2.jpg"
                            alt="user profile"
                            style={{ transform: "translateX(22px)" }}
                          />
                        </td>
                        <td>Johnee Bolbi</td>
                        <td>johneebolbi@gmail.com</td>
                        <td>+5-256-325-8652</td>
                        <td>5161</td>
                        <td>ACTIVE</td>
                        <td>2021-10-25</td>
                        <td>
                          <div
                            className="btn-group mb-1"
                            style={{ height: 30 }}
                          >
                            <button
                              type="button"
                              className="btn btn-outline-success"
                              onClick={handleInfo}
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
                            src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/vendor/u3.jpg"
                            alt="user profile"
                            style={{ transform: "translateX(22px)" }}
                          />
                        </td>
                        <td>Johnee Bolbi</td>
                        <td>johneebolbi@gmail.com</td>
                        <td>+5-256-325-8652</td>
                        <td>5161</td>
                        <td>ACTIVE</td>
                        <td>2021-10-25</td>
                        <td>
                          <div
                            className="btn-group mb-1"
                            style={{ height: 30 }}
                          >
                            <button
                              type="button"
                              className="btn btn-outline-success"
                              onClick={handleInfo}
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
                    {/* <div
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
                  </div> */}
                    <div className="card">
                      <Paginator
                        template={template1}
                        first={first[0]}
                        rows={rows[0]}
                        totalRecords={120}
                        onPageChange={(e) => onPageChange(e, 0)}
                      />
                      <Divider />
                    </div>
                  </div>
                  <div className="clear" />
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
            <form>
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
                        className="form-control"
                        id="username"
                        placeholder="3badong"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="password" className="fs-6">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="******"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="fullName" className="fs-6">
                        Full name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="johndoe"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="email" className="fs-6">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="johnexample@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <label htmlFor="phoneNumber" className="fs-6">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="0991234567"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <label className="form-label">Gender</label>
                    <select name="gender" id="gender" className="form-select">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer px-4">
                <button
                  type="button"
                  className="btn btn-secondary btn-pill"
                  data-bs-dismiss="modal"
                  style={{ height: 40 }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-pill"
                  style={{ height: 40 }}
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
