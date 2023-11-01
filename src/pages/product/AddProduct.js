import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <div className="ec-content-wrapper">
      <div className="content">
        <div
          className="breadcrumb-wrapper d-flex align-items-center justify-content-between"
          style={{ marginBottom: 0 }}
        >
          <div>
            <h1 className="text-light">Add Product</h1>
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
              Add Product
            </p>
          </div>
          <div>
            <Link
              to="/product/list"
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
                View All
              </span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card" style={{ borderRadius: "1.25rem" }}>
              <div className="card-header card-header-border-bottom">
                <h2 className="text-light">Add Product</h2>
              </div>
              <div className="card-body">
                <div className="row ec-vendor-uploads">
                  <div className="col-lg-4">
                    <div className="ec-vendor-img-upload">
                      <div className="ec-vendor-main-img">
                        <div className="avatar-upload">
                          <div className="avatar-edit">
                            <input
                              type="file"
                              id="imageUpload"
                              className="ec-image-upload"
                              accept=".png, .jpg, .jpeg"
                            />
                            <label htmlFor="imageUpload">
                              <img
                                src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/icons/edit.svg"
                                className="svg_img header_svg"
                                alt="edit"
                                style={{
                                  padding: 0,
                                  borderRadius: 10,
                                  position: "absolute",
                                  backgroundColor: "white",
                                  boxShadow: "1px 1px 1px #AAA",
                                  transform:
                                    "translateX(330px) translateY(25px)",
                                  width: 25,
                                  opacity: 0.6,
                                }}
                              />
                            </label>
                          </div>
                          <div className="avatar-preview ec-preview">
                            <div className="imagePreview ec-div-preview">
                              <img
                                className="ec-image-preview"
                                src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/vender-upload-preview.jpg"
                                alt="edit"
                                style={{
                                  height: 410,
                                  width: 370,
                                  borderRadius: 10,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="thumb-upload-set">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <div className="thumb-upload">
                              <div className="thumb-edit">
                                <input
                                  type="file"
                                  id="thumbUpload01"
                                  className="ec-image-upload"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label htmlFor="imageUpload">
                                  <img
                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/icons/edit.svg"
                                    className="svg_img header_svg"
                                    alt="edit"
                                    style={{
                                      padding: 0,
                                      borderRadius: 10,
                                      position: "absolute",
                                      backgroundColor: "white",
                                      boxShadow: "1px 1px 1px #AAA",
                                      transform:
                                        "translateX(65px) translateY(25px)",
                                      width: 25,
                                      opacity: 0.6,
                                    }}
                                  />
                                </label>
                              </div>
                              <div className="thumb-preview ec-preview">
                                <div className="image-thumb-preview">
                                  <img
                                    className="image-thumb-preview ec-image-preview"
                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/vender-upload-preview.jpg"
                                    alt="edit"
                                    style={{
                                      height: 100,
                                      width: 100,
                                      borderRadius: 10,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="thumb-upload">
                              <div className="thumb-edit">
                                <input
                                  type="file"
                                  id="thumbUpload02"
                                  className="ec-image-upload"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label htmlFor="imageUpload">
                                  <img
                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/icons/edit.svg"
                                    className="svg_img header_svg"
                                    alt="edit"
                                    style={{
                                      padding: 0,
                                      borderRadius: 10,
                                      position: "absolute",
                                      backgroundColor: "white",
                                      boxShadow: "1px 1px 1px #AAA",
                                      transform:
                                        "translateX(65px) translateY(25px)",
                                      width: 25,
                                      opacity: 0.6,
                                    }}
                                  />
                                </label>
                              </div>
                              <div className="thumb-preview ec-preview">
                                <div className="image-thumb-preview">
                                  <img
                                    className="image-thumb-preview ec-image-preview"
                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/vender-upload-preview.jpg"
                                    alt="edit"
                                    style={{
                                      height: 100,
                                      width: 100,
                                      borderRadius: 10,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <div className="thumb-upload">
                              <div className="thumb-edit">
                                <input
                                  type="file"
                                  id="thumbUpload01"
                                  className="ec-image-upload"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label htmlFor="imageUpload">
                                  <img
                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/icons/edit.svg"
                                    className="svg_img header_svg"
                                    alt="edit"
                                    style={{
                                      padding: 0,
                                      borderRadius: 10,
                                      position: "absolute",
                                      backgroundColor: "white",
                                      boxShadow: "1px 1px 1px #AAA",
                                      transform:
                                        "translateX(65px) translateY(25px)",
                                      width: 25,
                                      opacity: 0.6,
                                    }}
                                  />
                                </label>
                              </div>
                              <div className="thumb-preview ec-preview">
                                <div className="image-thumb-preview">
                                  <img
                                    className="image-thumb-preview ec-image-preview"
                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/vender-upload-preview.jpg"
                                    alt="edit"
                                    style={{
                                      height: 100,
                                      width: 100,
                                      borderRadius: 10,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="thumb-upload">
                              <div className="thumb-edit">
                                <input
                                  type="file"
                                  id="thumbUpload02"
                                  className="ec-image-upload"
                                  accept=".png, .jpg, .jpeg"
                                />
                                <label htmlFor="imageUpload">
                                  <img
                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/icons/edit.svg"
                                    className="svg_img header_svg"
                                    alt="edit"
                                    style={{
                                      padding: 0,
                                      borderRadius: 10,
                                      position: "absolute",
                                      backgroundColor: "white",
                                      boxShadow: "1px 1px 1px #AAA",
                                      transform:
                                        "translateX(65px) translateY(25px)",
                                      width: 25,
                                      opacity: 0.6,
                                    }}
                                  />
                                </label>
                              </div>
                              <div className="thumb-preview ec-preview">
                                <div className="image-thumb-preview">
                                  <img
                                    className="image-thumb-preview ec-image-preview"
                                    src="https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/vender-upload-preview.jpg"
                                    alt="edit"
                                    style={{
                                      height: 100,
                                      width: 100,
                                      borderRadius: 10,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="ec-vendor-upload-detail">
                      <form className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label">
                            Product name
                          </label>
                          <input
                            type="text"
                            className="form-control slug-title"
                            id="name"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">
                            Select Categories
                          </label>
                          <select
                            name="categories"
                            id="Categories"
                            className="form-select"
                          >
                            <option value="Vòng Tay Phong Thủy">
                              Vòng Tay Phong Thủy
                            </option>
                            <option value="Ngọc Bích Nephrite">
                              Ngọc Bích Nephrite
                            </option>
                            <option value="Nhẫn Phong Thủy">
                              Nhẫn Phong Thủy
                            </option>
                            <option value="Dây Chuyền Phong Thủy">
                              Dây Chuyền Phong Thủy
                            </option>
                            <option value="Vật Phẩm Phong Thủy">
                              Vật Phẩm Phong Thủy
                            </option>
                            <option value="Hoa Tai Phong Thủy">
                              Hoa Tai Phong Thủy
                            </option>
                            <option value="Tarot">Tarot</option>
                          </select>
                        </div>
                        {/* <div className="col-md-12">
                          <label
                            htmlFor="slug"
                            className="col-12 col-form-label"
                          >
                            Slug
                          </label>
                          <div className="col-12">
                            <input
                              id="slug"
                              name="slug"
                              className="form-control here set-slug"
                              type="text"
                            />
                          </div>
                        </div> */}

                        <div className="col-md-6">
                          <label className="form-label">Price</label>
                          <input
                            type="number"
                            className="form-control"
                            id="price1"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Quantity</label>
                          <input
                            type="number"
                            className="form-control"
                            id="quantity1"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Weight</label>
                          <input
                            type="number"
                            className="form-control"
                            id="weight"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Author</label>
                          <input
                            type="text"
                            className="form-control"
                            id="author"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Height</label>
                          <input
                            type="number"
                            className="form-control"
                            id="height"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Producer</label>
                          <input
                            type="text"
                            className="form-control"
                            id="producer"
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="form-label">Include</label>
                          <input
                            type="text"
                            className="form-control"
                            id="include"
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="form-label">Description</label>
                          <textarea
                            className="form-control"
                            rows={4}
                            defaultValue={""}
                            id="description"
                          />
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-primary"
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
                              Submit
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
      </div>{" "}
      {/* End Content */}
    </div>
  );
}
export default AddProduct;
