import { useEffect, useState } from "react";
import { Galleria } from "primereact/galleria";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [images, setImages] = useState({});
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];
  const PhotoService = {
    getData() {
      return [
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",
          alt: "Description for Image 1",
          title: "Title 1",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg",
          alt: "Description for Image 3",
          title: "Title 3",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg",
          alt: "Description for Image 4",
          title: "Title 4",
        },
        {
          itemImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg",
          thumbnailImageSrc:
            "https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg",
          alt: "Description for Image 5",
          title: "Title 5",
        },
      ];
    },

    getImages() {
      return Promise.resolve(this.getData());
    },
  };
  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

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
                      <div className="card">
                        <Galleria
                          value={images}
                          responsiveOptions={responsiveOptions}
                          numVisible={5}
                          style={{ maxWidth: "640px" }}
                          item={itemTemplate}
                          thumbnail={thumbnailTemplate}
                          circular
                          autoPlay
                          transitionInterval={2000}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div className="row product-overview">
                    <div className="col-12">
                      <h5 className="product-title">
                        Pure Leather Purse for Woman
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
                      <p className="product-desc">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1990.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="ec-ofr">
                        <h6>Available offers</h6>
                        <ul>
                          <li>
                            <b>Special Price :</b> Get extra 16% off (price
                            inclusive of discount) <a href="#">T&amp;C</a>{" "}
                          </li>
                          <li>
                            <b>Bank Offer :</b> 10% off on XYZ Bank Cards, up to
                            $12. On orders of $200 and above{" "}
                            <a href="#">T&amp;C</a>
                          </li>
                          <li>
                            <b>Bank Offer :</b> 5% Unlimited Cashback on Ekka
                            XYZ Bank Credit Card <a href="#">T&amp;C</a>
                          </li>
                          <li>
                            <b>Bank Offer :</b> Flat $50 off on first Ekka Pay
                            Later order of $200 and above{" "}
                            <a href="#">T&amp;C</a>
                          </li>
                        </ul>
                      </div>
                      <p className="product-price">Price: $120</p>
                      <p className="product-sku">SKU#: WH12</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-12 u-card">
                  <div className="card card-default seller-card">
                    <div className="card-body text-center">
                      <a
                        href="javascript:0"
                        className="text-secondary d-inline-block"
                      >
                        <div className="image mb-3">
                          <img
                            src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/user/u-xl-4.jpg"
                            className="img-fluid rounded-circle"
                            alt="Avatar Image"
                          />
                        </div>
                        <h5 className="text-light">John Karter</h5>
                        <p className="product-rate">
                          <i className="mdi mdi-star is-rated" />
                          <i className="mdi mdi-star is-rated" />
                          <i className="mdi mdi-star is-rated" />
                          <i className="mdi mdi-star is-rated" />
                          <i className="mdi mdi-star" />
                        </p>
                        <ul className="list-unstyled">
                          <li className="d-flex mb-1">
                            <i className="mdi mdi-map mr-1" />
                            <span>321/2, rio street, usa.</span>
                          </li>
                          <li className="d-flex mb-1">
                            <i className="mdi mdi-email mr-1" />
                            <span>example@email.com</span>
                          </li>
                          <li className="d-flex">
                            <i className="mdi mdi-whatsapp mr-1" />
                            <span>+00 987-654-3210</span>
                          </li>
                        </ul>
                      </a>
                    </div>
                  </div>
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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
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
