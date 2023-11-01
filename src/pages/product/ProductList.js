import { Link, useNavigate } from "react-router-dom";
import "../../assets/scss/components/_product.scss";
import { Paginator } from "primereact/paginator";
import { useState } from "react";
import { classNames } from "primereact/utils";
import { Ripple } from "primereact/ripple";
import { Divider } from "primereact/divider";
function ProductList() {
  const navigate = useNavigate();
  const handleInfo = () => {
    navigate("/product/detail");
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
      <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
        <div>
          <h1 className="text-light">Product</h1>
          <p className="breadcrumbs">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <i className="mdi mdi-chevron-right" />
            </span>
            Product
            <span>
              <i className="mdi mdi-chevron-right" />
            </span>
            Product List
          </p>
        </div>
        <div>
          <Link
            to="/product/add"
            className="btn btn-primary"
            style={{
              borderColor: "#88aaf3",
              color: "#ffffff",
              borderRadius: 15,
              height: 40,
              display: "flex",
            }}
          >
            <span style={{ margin: "auto", position: "relative" }}>
              Add Product
            </span>
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
                      id="responsive-data-table_filter"
                      className="dataTables_filter"
                      style={{ transform: "translateX(82%)" }}
                    >
                      <label style={{ display: "flex", width: "200px" }}>
                        <span style={{ paddingTop: 5 }}>Search:</span>
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
                    style={{ width: "100%" }}
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
                          style={{ width: 52 }}
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
                          style={{ width: 119 }}
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
                          style={{ width: 34 }}
                        >
                          Price
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="responsive-data-table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Purchased: activate to sort column ascending"
                          style={{ width: 70 }}
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
                          style={{ width: 38 }}
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
                          style={{ width: 43 }}
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
                          style={{ width: 51 }}
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
                          style={{ width: 57 }}
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
                            style={{ transform: "translateX(22px)" }}
                          />
                        </td>
                        <td>Baby shoes</td>
                        <td>$20</td>
                        <td>61</td>
                        <td>5421</td>
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
    </div>
  );
}

export default ProductList;
