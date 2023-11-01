import {Link, useNavigate} from "react-router-dom";
import "../../assets/scss/components/_product.scss";
import {Paginator} from "primereact/paginator";
import {useEffect, useState} from "react";
import {classNames} from "primereact/utils";
import {Ripple} from "primereact/ripple";
import {Divider} from "primereact/divider";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, selectGetProductsSuccess, selectProducts} from "~/features/productSlice";
import formatPriceToVND from "~/util/formattedCurrentcy";
function ProductList() {
    const dispatch = useDispatch();
    const productPage = useSelector(selectProducts);
    const getProductsSuccess = useSelector(selectGetProductsSuccess);
    const [products, setProducts] = useState([]);


    const navigate = useNavigate();
    const handleInfo = () => {
        navigate("/product/detail");
    };

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (e) => {
        setFirst(e.first)
        setRows(e.rows)
        dispatch(getProducts({
            page: e.page,
            size: e.rows
        }));
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
        if (!getProductsSuccess) {
            dispatch(getProducts());
        }
    }, []);

    useEffect(() => {
        if (productPage) {
            setProducts(productPage.content);
        }
    }, [productPage]);

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
              <i className="mdi mdi-chevron-right"/>
            </span>
                        Product
                        <span>
              <i className="mdi mdi-chevron-right"/>
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
            <span style={{margin: "auto", position: "relative"}}>
              Add Product
            </span>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card card-default">
                        <div className="card-body">
                            <div className="">
                                <div
                                    id="responsive-data-table_wrapper"
                                    className="dataTables_wrapper dt-bootstrap5 no-footer"
                                >
                                    <div className="row justify-content-between top-information">
                                        <div
                                            id="responsive-data-table_filter"
                                            className="dataTables_filter"
                                            style={{transform: "translateX(82%)"}}
                                        >
                                            <label style={{display: "flex", width: "200px"}}>
                                                <span style={{paddingTop: 5}}>Search:</span>
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
                                        className="table table-responsive dataTable no-footer table-dark table-striped table-hover"
                                        aria-describedby="responsive-data-table_info"
                                    >
                                        <thead>
                                        <tr>
                                            <th
                                                className="sorting sorting_asc text-center"
                                                aria-controls="responsive-data-table"
                                                aria-sort="ascending"
                                                aria-label="Product: activate to sort column descending"
                                            >
                                                Product
                                            </th>
                                            <th
                                                className="sorting text-center"
                                                aria-controls="responsive-data-table"
                                                aria-label="Name: activate to sort column ascending"
                                                width={"25%"}
                                            >
                                                Name
                                            </th>
                                            <th
                                                className="sorting text-center"
                                                aria-controls="responsive-data-table"
                                                aria-label="Price: activate to sort column ascending"
                                            >
                                                Price
                                            </th>
                                            <th
                                                className="sorting text-center"
                                                aria-controls="responsive-data-table"
                                                aria-label="Purchased: activate to sort column ascending"
                                            >
                                                Purchased
                                            </th>
                                            <th
                                                className="sorting text-center"
                                                aria-controls="responsive-data-table"
                                                aria-label="Stock: activate to sort column ascending"
                                            >
                                                Stock
                                            </th>
                                            <th
                                                className="sorting text-center"
                                                aria-controls="responsive-data-table"
                                                aria-label="Status: activate to sort column ascending"
                                            >
                                                Status
                                            </th>
                                            <th
                                                className="sorting text-center"
                                                aria-controls="responsive-data-table"
                                                aria-label="Date: activate to sort column ascending"
                                            >
                                                Date
                                            </th>
                                            <th
                                                className="sorting text-center"
                                                aria-controls="responsive-data-table"
                                                aria-label="Action: activate to sort column ascending"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {(!products || products === null) ? (
                                                ("")
                                            ) :
                                            (products.map((product, index) => (
                                                <tr>
                                                    <td className="sorting_1">
                                                        <img
                                                            className="tbl-thumb"
                                                            src={product.imageUrl}
                                                            alt="Product Image"
                                                            style={{transform: "translateX(22px)"}}
                                                        />
                                                    </td>
                                                    <td >
                                                        <p className="mb-0" style={{whiteSpace:"pre-wrap"}}>{product.name}</p>
                                                    </td>
                                                        <td style={{textAlign:"center"}}>{formatPriceToVND(product.price)}</td>
                                                    <td style={{textAlign:"center"}}>{product.quantity}</td>
                                                    <td style={{textAlign:"center"}}>{product.quantitySold}</td>
                                                    {
                                                        (product.isActivated) ? (
                                                            <td style={{textAlign:"center"}}>
                                                                <span className="text-success ">Active</span>
                                                            </td>
                                                        ) : (
                                                            <td style={{textAlign:"center"}}>
                                                                <span  className="text-danger">Inactive</span>
                                                            </td>
                                                        )
                                                    }

                                                    <td style={{textAlign:"center"}}>{product.createDay}</td>
                                                    <td>
                                                        <div
                                                            className="btn-group mb-1"
                                                            style={{height: 30}}
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
                                            )))

                                        }


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
                                                template={{
                                                    layout: "FirstPageLink PrevPageLink PageLinks NextPageLink " +
                                                        "LastPageLink RowsPerPageDropdown CurrentPageReport JumpToPageInput"
                                                }}
                                                first={first}
                                                rows={rows}
                                                totalRecords={productPage.totalElements}
                                                onPageChange={onPageChange}
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
        </div>
    );
}

export default ProductList;
