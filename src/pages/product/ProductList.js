import {Link, useNavigate} from "react-router-dom";
import "../../assets/scss/components/_product.scss"
function ProductList() {
    const navigate = useNavigate();
    const handleInfo=()=>{
        navigate("/product/detail")
    }
    return (
        <div className="content">
            <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
                <div>
                    <h1 className="text-light">Product</h1>
                    <p className="breadcrumbs">
        <span>
          <a href="index.html">Home</a>
        </span>
        <span>
          <i className="mdi mdi-chevron-right"/>
        </span>
                        Product
                    </p>
                </div>
                <div>
                    <Link to="/product/add" className="btn" style={{backgroundColor:"#88aaf3", borderColor:"#88aaf3", color:"#ffffff", borderRadius:15, height:40}}>
                        <span style={{padding:"auto 0"}}>Add Product</span>

                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card card-default">
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
                                            <label style={{display:"flex", width:"fit-content"}}>
                                                <span style={{paddingTop:10}}>Show{" "}</span>
                                                <select
                                                    name="responsive-data-table_length"
                                                    aria-controls="responsive-data-table"
                                                    className="form-select form-select-sm text-light"
                                                >
                                                    <option value={20}>20</option>
                                                    <option value={30}>30</option>
                                                    <option value={50}>50</option>
                                                    <option value={75}>75</option>
                                                    <option value={-1}>All</option>
                                                </select>
                                                <span style={{paddingTop:10}}>{" "}entries</span>
                                            </label>
                                        </div>
                                        <div
                                            id="responsive-data-table_filter"
                                            className="dataTables_filter"
                                        >
                                            <label style={{display:"flex", width:"200px"}}>
                                                <span style={{paddingTop:5}}>Search:</span>
                                                <input
                                                    type="search"
                                                    className="form-control form-control-sm text-light"
                                                    placeholder=""
                                                    aria-controls="responsive-data-table"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <table
                                        id="responsive-data-table"
                                        className="table dataTable no-footer table-dark table-striped table-hover"
                                        style={{width: "100%"}}
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
                                                aria-label="Product: activate to sort column descending"
                                                style={{width: 52}}
                                            >
                                                Product
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Name: activate to sort column ascending"
                                                style={{width: 119}}
                                            >
                                                Name
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Price: activate to sort column ascending"
                                                style={{width: 34}}
                                            >
                                                Price
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Offer: activate to sort column ascending"
                                                style={{width: 35}}
                                            >
                                                Offer
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Purchased: activate to sort column ascending"
                                                style={{width: 70}}
                                            >
                                                Purchased
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Stock: activate to sort column ascending"
                                                style={{width: 38}}
                                            >
                                                Stock
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Status: activate to sort column ascending"
                                                style={{width: 43}}
                                            >
                                                Status
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Date: activate to sort column ascending"
                                                style={{width: 51}}
                                            >
                                                Date
                                            </th>
                                            <th
                                                className="sorting"
                                                tabIndex={0}
                                                aria-controls="responsive-data-table"
                                                rowSpan={1}
                                                colSpan={1}
                                                aria-label="Action: activate to sort column ascending"
                                                style={{width: 57}}
                                            >
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="sorting_1">
                                                <img
                                                    className="tbl-thumb"
                                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/p1.jpg"
                                                    alt="Product Image"
                                                />
                                            </td>
                                            <td>Baby shoes</td>
                                            <td>$20</td>
                                            <td>25% OFF</td>
                                            <td>61</td>
                                            <td>5421</td>
                                            <td>ACTIVE</td>
                                            <td>2021-10-30</td>
                                            <td>
                                                <div className="btn-group mb-1">
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
                                        <tr>
                                            <td className="sorting_1">
                                                <img
                                                    className="tbl-thumb"
                                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/p2.jpg"
                                                    alt="Product Image"
                                                />
                                            </td>
                                            <td>Full Sleeve Cap T-Shirt</td>
                                            <td>$40</td>
                                            <td>30% OFF</td>
                                            <td>80</td>
                                            <td>621</td>
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

                                        </tbody>
                                    </table>
                                    <div className="row justify-content-between bottom-information">
                                        <div
                                            className="dataTables_info"
                                            id="responsive-data-table_info"
                                            role="status"
                                            aria-live="polite"
                                        >
                                            Showing 1 to 20 of 57 entries
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
                                                <li
                                                    className="paginate_button page-item next"
                                                    id="responsive-data-table_next"
                                                >
                                                    <a
                                                        href="#"
                                                        aria-controls="responsive-data-table"
                                                        data-dt-idx={4}
                                                        tabIndex={0}
                                                        className="page-link"
                                                    >
                                                        Next
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="clear"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ProductList;