import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectProductDetail, setGetProductDetailSuccess} from "~/features/productSlice";
import ProductImage from "~/pages/product/ProductImage";
import formatPriceToVND from "~/util/formattedCurrentcy";

function ProductDetail() {
  const dispatch = useDispatch();
  const product = useSelector(selectProductDetail);
  console.log('product in product detail')
  console.log(product)
  useEffect(() => {
    dispatch(setGetProductDetailSuccess(false));
  }, [])





  return (
    <div className="content">
      <div
        className="breadcrumb-wrapper d-flex align-items-center justify-content-between"
        style={{ marginBottom: 0 }}
      >
        <div>
          <h1 className="text-light">Product Detail</h1>
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
            Product Detail
          </p>
        </div>
        <div>
          <Link
            to="#"
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
      <div className="row">
        <div className="col-12">
          <div className="card card-default">
            <div className="card-header card-header-border-bottom">
              <h2 className="text-light">Product Detail</h2>
            </div>
            <div className="card-body product-detail">
              <div className="row">
                <div className="col-xl-4 col-lg-6">
                  <div className="row">
                    <div
                      className="single-pro-img"
                      style={{ position: "relative", width: "100%" }}
                    >
                      <ProductImage />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div className="row product-overview">
                    <div className="col-12">
                      <h5 className="product-title">
                        {product.name}
                      </h5>
                      <p className="product-rate">
                        <i className="mdi mdi-star is-rated" />
                        <i className="mdi mdi-star is-rated" />
                        <i className="mdi mdi-star is-rated" />
                        <i className="mdi mdi-star is-rated" />
                        <i className="mdi mdi-star" />
                      </p>
                      <p className="product-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1990.
                      </p>

                      <div className="ec-ofr">
                        <h6 style={{color:"red"}}>
                          Giá bán: <span className="product-price">{formatPriceToVND(product.price)}</span>
                        </h6>
                        <h6>Information</h6>
                        <ul>
                          {
                            (!product.quantitySold || product.quantitySold === 0)?
                                (
                                    <li>
                                      <b>Số lượng đã bán:</b> 0 sản phẩm
                                    </li>
                                ):
                                (
                                    <li>
                                      <b>Số lượng đã bán:</b> {product.quantitySold} sản phẩm
                                    </li>
                                )
                        }

                          <li>
                            <b>Tồn kho:</b> {product.quantity} sản phẩm
                          </li>

                          <li>
                            <b>Tác giả:</b> {product.author}
                          </li>

                          {
                            (!product.weight || product.weight === 0)?
                                (
                                    " "
                                ):
                                (
                                    <li>
                                      <b>Cân nặng:</b> {product.weight} gram
                                    </li>
                                )
                          }
                          {
                            (!product.height || product.height === 0)?
                                (
                                    " "
                                ):
                                (

                                    <li>
                                      <b>Chiều cao:</b> {product.height} cm
                                    </li>
                                )
                          }

                          <li>
                            <b>Nhà sản xuất:</b> {product.producer}
                          </li>
                          {
                            (!product.createDay || product.createDay === null)?
                                (
                                    " "
                                ):
                                (

                                    <li>
                                      <b>Ngày thêm sản phẩm:</b> {product.createDay}
                                    </li>
                                )
                          }


                          <li>
                            <b>Trạng thái hoạt động:</b> {
                            (product.isActivated == true)? "Đang hoạt động": "Tạm ngưng hoạt động"
                          }
                          </li>
                          <li>
                            <b>Thuộc danh mục:</b> {product.subCategory?.name}
                          </li>
                        </ul>
                      </div>




                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-12 u-card">
                  {/*<div className="card card-default seller-card">*/}
                  {/*  <div className="card-body text-center">*/}
                  {/*    <a*/}
                  {/*      href="javascript:0"*/}
                  {/*      className="text-secondary d-inline-block"*/}
                  {/*    >*/}
                  {/*      <div className="image mb-3">*/}
                  {/*        <img*/}
                  {/*          src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/user/u-xl-4.jpg"*/}
                  {/*          className="img-fluid rounded-circle"*/}
                  {/*          alt="Avatar Image"*/}
                  {/*        />*/}
                  {/*      </div>*/}
                  {/*      <h5 className="text-light">John Karter</h5>*/}
                  {/*      <p className="product-rate">*/}
                  {/*        <i className="mdi mdi-star is-rated" />*/}
                  {/*        <i className="mdi mdi-star is-rated" />*/}
                  {/*        <i className="mdi mdi-star is-rated" />*/}
                  {/*        <i className="mdi mdi-star is-rated" />*/}
                  {/*        <i className="mdi mdi-star" />*/}
                  {/*      </p>*/}
                  {/*      <ul className="list-unstyled">*/}
                  {/*        <li className="d-flex mb-1">*/}
                  {/*          <i className="mdi mdi-map mr-1" />*/}
                  {/*          <span>321/2, rio street, usa.</span>*/}
                  {/*        </li>*/}
                  {/*        <li className="d-flex mb-1">*/}
                  {/*          <i className="mdi mdi-email mr-1" />*/}
                  {/*          <span>example@email.com</span>*/}
                  {/*        </li>*/}
                  {/*        <li className="d-flex">*/}
                  {/*          <i className="mdi mdi-whatsapp mr-1" />*/}
                  {/*          <span>+00 987-654-3210</span>*/}
                  {/*        </li>*/}
                  {/*      </ul>*/}
                  {/*    </a>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>
              <div className="row review-rating mt-4">
                <div className="col-12">
                  <ul
                    className="nav nav-tabs"
                    id="myRatingTab"
                    role="tablist"
                    style={{ justifyContent: "center" }}
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="product-detail-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#productdetail"
                        href="#productdetail"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="mdi mdi-library-books mr-1" /> Detail
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="product-information-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#productinformation"
                        href="#productinformation"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="mdi mdi-information mr-1" />
                        Info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="product-reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#productreviews"
                        href="#productreviews"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="mdi mdi-star-half mr-1" /> Reviews
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent2">
                    <div
                      className="tab-pane pt-3 fade show active"
                      id="productdetail"
                      role="tabpanel"
                    >
                      <p>
                        {product.description}
                      </p>
                      <ul className="features">
                        <li>
                          Any Product types that You want - Simple, Configurable
                        </li>
                        <li>Downloadable/Digital Products, Virtual Products</li>
                        <li>Inventory Management with Backordered items</li>
                        <li>Flatlock seams throughout.</li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane pt-3 fade"
                      id="productinformation"
                      role="tabpanel"
                    >
                      <ul>
                        <li>
                          <span>Weight</span> 1000 g
                        </li>
                        <li>
                          <span>Dimensions</span> 35 × 30 × 7 cm
                        </li>
                        <li>
                          <span>Color</span> Black, Pink, Red, White
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane pt-3 fade"
                      id="productreviews"
                      role="tabpanel"
                    >
                      <div className="ec-t-review-wrapper">
                        <div className="ec-t-review-item">
                          <div className="ec-t-review-avtar">
                            <img src="assets/img/review-image/1.jpg" alt="" />
                          </div>
                          <div className="ec-t-review-content">
                            <div className="ec-t-review-top">
                              <p className="ec-t-review-name">Jeny Doe</p>
                              <div className="ec-t-rate">
                                <i className="mdi mdi-star is-rated" />
                                <i className="mdi mdi-star is-rated" />
                                <i className="mdi mdi-star is-rated" />
                                <i className="mdi mdi-star is-rated" />
                                <i className="mdi mdi-star" />
                              </div>
                            </div>
                            <div className="ec-t-review-bottom">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="ec-t-review-item">
                          <div className="ec-t-review-avtar">
                            <img src="assets/img/review-image/2.jpg" alt="" />
                          </div>
                          <div className="ec-t-review-content">
                            <div className="ec-t-review-top">
                              <p className="ec-t-review-name">Linda Morgus</p>
                              <div className="ec-t-rate">
                                <i className="mdi mdi-star is-rated" />
                                <i className="mdi mdi-star is-rated" />
                                <i className="mdi mdi-star is-rated" />
                                <i className="mdi mdi-star is-rated" />
                                <i className="mdi mdi-star" />
                              </div>
                            </div>
                            <div className="ec-t-review-bottom">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default ProductDetail;
