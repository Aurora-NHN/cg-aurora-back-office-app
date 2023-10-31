import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="content">
      <div
        className="breadcrumb-wrapper breadcrumb-contacts"
        style={{ marginBottom: 0 }}
      >
        <div>
          <h1 className="text-light">User Profile</h1>
          <p className="breadcrumbs">
            <span>
              <a href="index.html">Home</a>
            </span>
            <span>
              <i className="mdi mdi-chevron-right" />
            </span>
            Profile
          </p>
        </div>
        <div>
          <Link
            to="/user/list"
            className="btn btn-primary"
            style={{
              borderColor: "#88aaf3",
              color: "#ffffff",
              borderRadius: 15,
              height: 40,
              display: "flex",
            }}
          >
            <span style={{ margin: "auto", position: "relative" }}>Edit</span>
          </Link>
        </div>
      </div>
      <div className="card profile-content">
        <div className="row rounded-4" style={{ backgroundColor: "#191c24" }}>
          <div className="col-lg-4 col-xl-3">
            <div className="profile-content-left profile-left-spacing">
              <div className="text-center widget-profile px-0 border-0">
                <div
                  className="card-img mx-auto rounded-4"
                  style={{ width: 100, height: 100 }}
                >
                  <img
                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/user/u1.jpg"
                    alt="user image"
                    style={{
                      height: "100%",
                      borderRadius: "10px",
                      marginTop: 25,
                    }}
                  />
                </div>
                <div className="card-body">
                  <h4 className="py-2 text-light">Mark deo</h4>
                  <p>mark.example@gmail.com</p>
                  <a className="btn btn-primary my-3" href="#">
                    Follow
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-between ">
                <div className="text-center pb-4">
                  <h6 className="text-light pb-2">546</h6>
                  <p className="text-light">Bought</p>
                </div>
                <div className="text-center pb-4">
                  <h6 className="text-light pb-2">32</h6>
                  <p className="text-light">Wish List</p>
                </div>
                <div className="text-center pb-4">
                  <h6 className="text-light pb-2">1150</h6>
                  <p className="text-light">Following</p>
                </div>
              </div>
              <hr
                className="w-100"
                style={{ borderTop: "1px solid rgb(235 230 230)" }}
              />
              <div className="contact-info pt-4">
                <h5 className="text-light">Contact Information</h5>
                <p className="text-primary font-weight-medium pt-24px mb-2">
                  Email address
                </p>
                <p className="text-light">mark.example@gmail.com</p>
                <p className="text-primary font-weight-medium pt-24px mb-2">
                  Phone Number
                </p>
                <p className="text-light">+00 1234 5678 91</p>
                <p className="text-primary font-weight-medium pt-24px mb-2">
                  Social Profile
                </p>
                <p className="social-button">
                  <Link
                    to="#"
                    className="mb-1 btn btn-outline btn-twitter rounded-4  fs-5"
                  >
                    <i className="mdi mdi-twitter" />
                  </Link>
                  <Link
                    to="#"
                    className="mb-1 btn btn-outline btn-linkedin rounded-4 ml-2 fs-5"
                  >
                    <i className="mdi mdi-linkedin" />
                  </Link>
                  <Link
                    to="#"
                    className="mb-1 btn btn-outline btn-facebook rounded-4 ml-2  fs-5"
                  >
                    <i className="mdi mdi-facebook" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="profile-content-right profile-right-spacing py-5">
              <ul
                className="nav nav-tabs px-3 px-xl-5 nav-style-border"
                id="myProfileTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link border-0 active"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="true"
                    style={{ backgroundColor: "initial" }}
                  >
                    Profile
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link border-0"
                    id="settings-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                    style={{ backgroundColor: "initial" }}
                  >
                    Settings
                  </button>
                </li>
              </ul>
              <div className="tab-content px-3 px-xl-5" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="tab-widget mt-5">
                    <div className="row mb-4">
                      <div className="col-xl-4">
                        <div
                          className="media widget-media p-3 border rounded-4"
                          style={{
                            boxShadow: "0 0 10px 0 rgb(89 84 84)",
                          }}
                        >
                          <div
                            className="icon mr-3 bg-primary rounded-4"
                            style={{ height: 60, width: 60 }}
                          >
                            <i
                              className="mdi mdi-account-outline text-white "
                              style={{ fontSize: 26 }}
                            />
                          </div>
                          <div className="media-body align-self-center">
                            <h4 className="text-primary mb-2">546</h4>
                            <p className="text-light">Bought</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div
                          className="media widget-media p-3 border rounded-4"
                          style={{
                            boxShadow: "0 0 10px 0 rgb(89 84 84)",
                          }}
                        >
                          <div
                            className="icon mr-3 rounded-4 bg-warning"
                            style={{ height: 60, width: 60 }}
                          >
                            <i
                              className="mdi mdi-cart-outline text-white "
                              style={{ fontSize: 26 }}
                            />
                          </div>
                          <div className="media-body align-self-center">
                            <h4 className="text-primary mb-2">1953</h4>
                            <p className="text-light">Wish List</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div
                          className="media widget-media p-3 border rounded-4"
                          style={{
                            boxShadow: "0 0 10px 0 rgb(89 84 84)",
                          }}
                        >
                          <div
                            className="icon rounded-4 mr-3 bg-success"
                            style={{ height: 60, width: 60 }}
                          >
                            <i
                              className="mdi mdi-ticket-percent text-white "
                              style={{ fontSize: 26 }}
                            />
                          </div>
                          <div className="media-body align-self-center">
                            <h4 className="text-primary mb-2">02</h4>
                            <p className="text-light">Voucher</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row rounded-4 border"
                      style={{
                        boxShadow: "0 0 10px 0 rgb(89 84 84)",
                      }}
                    >
                      <div className="col-xl-12">
                        {/* Notification Table */}
                        <div className="card card-default">
                          <div
                            className="card-header justify-content-between mb-1"
                            style={{ display: "flex" }}
                          >
                            <h2 className="text-light">Latest Notifications</h2>
                            <div>
                              <button
                                className="mr-2 fs-5 border-0"
                                style={{
                                  backgroundColor: "inherit",
                                }}
                              >
                                <i className="mdi mdi-cached" />
                              </button>
                              <div className="dropdown show d-inline-block widget-dropdown">
                                <a
                                  className="dropdown-toggle bi bi-three-dots-vertical"
                                  href="#"
                                  role="button"
                                  id="dropdown-notification"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  data-display="static"
                                />
                                <ul
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="dropdown-notification"
                                >
                                  <li className="dropdown-item">
                                    <a href="#">Action</a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#">Another action</a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#">Something else here</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="card-body compact-notifications"
                            data-simplebar="init"
                            style={{ height: 434, overflow: "auto" }}
                          >
                            <div
                              className="simplebar-wrapper"
                              style={{ margin: "-24px" }}
                            >
                              <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer" />
                              </div>
                              <div className="simplebar-mask">
                                <div
                                  className="simplebar-offset"
                                  style={{ right: 0, bottom: 0 }}
                                >
                                  <div className="simplebar-ec-content-wrapper">
                                    <div
                                      className="simplebar-content"
                                      style={{ padding: 24 }}
                                    >
                                      <div className="media pb-3 align-items-center justify-content-between">
                                        <div
                                          className="d-flex rounded-4 align-items-center justify-content-center mr-3 media-icon bg-primary text-white"
                                          style={{ height: 45, width: 45 }}
                                        >
                                          <i className="mdi mdi-cart-outline  fs-4" />
                                        </div>
                                        <div className="media-body pr-3 ">
                                          <a
                                            className="mt-0 mb-1 font-size-15 text-light"
                                            href="#"
                                          >
                                            New Order
                                          </a>
                                          <p>Selena has placed an new order</p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block">
                                          <i className="mdi mdi-clock-outline" />{" "}
                                          10 AM
                                        </span>
                                      </div>
                                      <div className="media py-3 align-items-center justify-content-between">
                                        <div
                                          className="d-flex rounded-4 align-items-center justify-content-center mr-3 media-icon bg-success text-white"
                                          style={{ height: 45, width: 45 }}
                                        >
                                          <i className="mdi mdi-email-outline  fs-4" />
                                        </div>
                                        <div className="media-body pr-3">
                                          <a
                                            className="mt-0 mb-1 font-size-15 text-light"
                                            href="#"
                                          >
                                            New Enquiry
                                          </a>
                                          <p>
                                            Phileine has placed an new order
                                          </p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block">
                                          <i className="mdi mdi-clock-outline" />{" "}
                                          9 AM
                                        </span>
                                      </div>
                                      <div className="media py-3 align-items-center justify-content-between">
                                        <div
                                          className="d-flex rounded-4 align-items-center justify-content-center mr-3 media-icon bg-warning text-white"
                                          style={{ height: 45, width: 45 }}
                                        >
                                          <i className="mdi mdi-stack-exchange fs-4" />
                                        </div>
                                        <div className="media-body pr-3">
                                          <a
                                            className="mt-0 mb-1 font-size-15 text-light"
                                            href="#"
                                          >
                                            Support Ticket
                                          </a>
                                          <p>Emma has placed an new order</p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block">
                                          <i className="mdi mdi-clock-outline" />{" "}
                                          10 AM
                                        </span>
                                      </div>
                                      <div className="media py-3 align-items-center justify-content-between">
                                        <div
                                          className="d-flex rounded-4 align-items-center justify-content-center mr-3 media-icon bg-primary text-white"
                                          style={{ height: 45, width: 45 }}
                                        >
                                          <i className="mdi mdi-cart-outline  fs-4" />
                                        </div>
                                        <div className="media-body pr-3">
                                          <a
                                            className="mt-0 mb-1 font-size-15 text-light"
                                            href="#"
                                          >
                                            New order
                                          </a>
                                          <p>Ryan has placed an new order</p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block">
                                          <i className="mdi mdi-clock-outline" />{" "}
                                          10 AM
                                        </span>
                                      </div>
                                      <div className="media py-3 align-items-center justify-content-between">
                                        <div
                                          className="d-flex rounded-4 align-items-center justify-content-center mr-3 media-icon bg-info text-white"
                                          style={{ height: 45, width: 45 }}
                                        >
                                          <i className="mdi mdi-calendar-blank fs-4" />
                                        </div>
                                        <div className="media-body pr-3">
                                          <a
                                            className="mt-0 mb-1 font-size-15 text-light"
                                            href=""
                                          >
                                            Comapny Meetup
                                          </a>
                                          <p>
                                            Phileine has placed an new order
                                          </p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block">
                                          <i className="mdi mdi-clock-outline" />{" "}
                                          10 AM
                                        </span>
                                      </div>
                                      <div className="media py-3 align-items-center justify-content-between">
                                        <div
                                          className="d-flex rounded-4 align-items-center justify-content-center mr-3 media-icon bg-warning text-white"
                                          style={{ height: 45, width: 45 }}
                                        >
                                          <i className="mdi mdi-stack-exchange  fs-4" />
                                        </div>
                                        <div className="media-body pr-3">
                                          <a
                                            className="mt-0 mb-1 font-size-15 text-light"
                                            href="#"
                                          >
                                            Support Ticket
                                          </a>
                                          <p>Emma has placed an new order</p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block">
                                          <i className="mdi mdi-clock-outline" />{" "}
                                          10 AM
                                        </span>
                                      </div>
                                      <div className="media py-3 align-items-center justify-content-between">
                                        <div
                                          className="d-flex rounded-4 align-items-center justify-content-center mr-3 media-icon bg-success text-white"
                                          style={{ height: 45, width: 45 }}
                                        >
                                          <i className="mdi mdi-email-outline  fs-4" />
                                        </div>
                                        <div className="media-body pr-3">
                                          <a
                                            className="mt-0 mb-1 font-size-15 text-light"
                                            href="#"
                                          >
                                            New Enquiry
                                          </a>
                                          <p>
                                            Phileine has placed an new order
                                          </p>
                                        </div>
                                        <span className=" font-size-12 d-inline-block">
                                          <i className="mdi mdi-clock-outline" />{" "}
                                          9 AM
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="simplebar-placeholder"
                                style={{ width: "auto" }}
                              />
                            </div>
                            <div
                              className="simplebar-track simplebar-horizontal"
                              style={{ visibility: "hidden" }}
                            >
                              <div
                                className="simplebar-scrollbar"
                                style={{ width: 0, display: "none" }}
                              />
                            </div>
                            <div
                              className="simplebar-track simplebar-vertical"
                              style={{ visibility: "visible" }}
                            >
                              <div
                                className="simplebar-scrollbar"
                                style={{
                                  transform: "translate3d(0px, 0px, 0px)",
                                  display: "block",
                                }}
                              />
                            </div>
                          </div>
                          <div className="mt-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="settings"
                  role="tabpanel"
                  aria-labelledby="settings-tab"
                >
                  <div className="tab-pane-content mt-5">
                    <form>
                      <div className="row mb-2">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="username"
                              className="text-light fs-6"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              defaultValue="Username"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="phoneNumber"
                              className="text-light fs-6"
                            >
                              Phone number
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              id="phoneNumber"
                              defaultValue="0999123456"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-lg-6">
                          <label htmlFor="fullName" className="text-light fs-6">
                            Full name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            defaultValue="fullName"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label className="form-label text-light fs-6">
                            Gender
                          </label>
                          <select
                            name="gender"
                            id="gender"
                            className="form-select"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="email" className="text-light fs-6">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          defaultValue="ekka.example@gmail.com"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label
                          htmlFor="oldPassword"
                          className="text-light fs-6"
                        >
                          Old password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="oldPassword"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label
                          htmlFor="newPassword"
                          className="text-light fs-6"
                        >
                          New password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="newPassword"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label
                          htmlFor="conPassword"
                          className="text-light fs-6"
                        >
                          Confirm password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="conPassword"
                        />
                      </div>
                      <div className="d-flex justify-content-end mt-5">
                        <button
                          type="submit"
                          className="btn btn-primary mb-2 btn-pill"
                          style={{
                            borderColor: "#88aaf3",
                            color: "#ffffff",
                            borderRadius: 15,
                            height: 40,
                            display: "flex",
                          }}
                        >
                          <span
                            style={{ margin: "auto", position: "relative" }}
                          >
                            Update Profile
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
