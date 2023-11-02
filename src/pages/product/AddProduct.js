import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch, useSelector} from "react-redux";
import {getAllSubCategories, selectAllSubCategories} from "~/features/categorySlice";
import {createProduct} from "~/features/productSlice";

function AddProduct() {
    const dispatch = useDispatch();
    const subCategories = useSelector(selectAllSubCategories);
    const [images, setImages] = useState([]);
    const [mainImageUrl, setMainImageUrl] = useState(null);
    const [subImageUrls, setSubImageUrls] = useState([]);
    const initialValues = {
        name: '',
        price: '',
        weight: '',
        quantity: '',
        description: '',
        author: '',
        include: '',
        producer: '',
        height: '',
        productImageList: [],
        subCategoryId: ''
    };

    useEffect(() => {
        dispatch(getAllSubCategories());
    }, [])

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .typeError("Vui lòng nhập vào chữ")
            .required("Tên sản phẩm không được để trống"),
        price: Yup.number()
            .typeError("Vui lòng nhập giá tiền bằng số")
            .integer("Vui lòng nhập giá tiền phải là số nguyên")
            .min(0, "Không được nhập số âm")
            .required("Giá tiền không được để trống"),
        weight: Yup.number()
            .typeError("Vui lòng nhập cân nặng bằng số")
            .integer("Vui lòng nhập cân nặng phải là số nguyên")
            .min(0, "Không được nhập số âm")
            .required("Năm sinh không được để trống"),
        quantity: Yup.number()
            .typeError("Vui lòng nhập số lượng bằng số")
            .integer("Vui lòng nhập số lượng là số nguyên")
            .min(0, "Không được nhập số âm")
            .required("Số lượng không được để trống"),
        description: Yup.string()
            .typeError("Vui lòng nhập vào chữ.")
            .required("Mô tả sản phẩm không được để trống."),
        author: Yup.string()
            .typeError("Vui lòng nhập vào chữ."),
        include: Yup.string()
            .typeError("Vui lòng nhập vào chữ."),
        height: Yup.number()
            .typeError("Vui lòng nhập chiều cao bằng số")
            .integer("Vui lòng nhập chiều cao là số nguyên")
            .min(0, "Không được nhập số âm")
            .required("Số lượng không được để trống"),
        subCategoryId: Yup.string()
            .required("Vui lòng chọn danh mục cho sản phẩm")
        // .notOneOf(["Chọn ngày sinh"], "Hãy chọn ngày sinh")
    });
    const onSubmit = async (values) => {
        if (images.length < 1 || images.length > 7) {
            toast.error("Bạn phải thêm 1-7 hình ảnh cho sản phầm");
        } else {
            dispatch(createProduct({
                ...values,
                productImageList: images
            }))
        }
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    const handleFileChange = (e) => {

        const images = e.target.files;
        const imagesArray = Array.from(images);

        if (imagesArray.length > 7) {
            toast.error("Số lượng hình ảnh tải lên không được vượt quá 7 hình!", {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.ERROR,
            });
        } else if (imagesArray.length > 0) {

            if (mainImageUrl) {
                URL.revokeObjectURL(mainImageUrl)
            }
            subImageUrls.forEach(item => URL.revokeObjectURL(item))
            setImages(imagesArray);
        }
    }

    useEffect(() => {
        if (images.length >= 1) {
            setMainImageUrl(URL.createObjectURL(images[0]))
            setSubImageUrls([])
            if (images.length > 1) {
                setSubImageUrls(images.map((image, index) => {
                    if (index > 0) return URL.createObjectURL(image)
                }))
            }
        }
    }, [images])

    return (
        <div className="ec-content-wrapper">
            <div className="content">
                <div
                    className="breadcrumb-wrapper d-flex align-items-center justify-content-between"
                    style={{marginBottom: 0}}
                >
                    <div>
                        <h1 className="text-light">Add Product</h1>
                        <p className="breadcrumbs">
                          <span>
                            <Link to="/">Home</Link>
                          </span>
                            <span><i className="mdi mdi-chevron-right"/></span>Product
                            <span><i className="mdi mdi-chevron-right"/></span>Add Product
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
                            <span style={{margin: "auto", position: "relative"}}>View All</span>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{borderRadius: "1.25rem"}}>
                            <div className="card-header card-header-border-bottom">
                                <h2 className="text-light">Add Product</h2>
                            </div>
                        </div>
                        <form
                            className="card-body"
                            onSubmit={formik.handleSubmit}
                        >

                            <div>
                                <div className="row ec-vendor-uploads">
                                    <div className="col-lg-4">
                                        <div className="ec-vendor-img-upload">
                                            <div className="ec-vendor-main-img">
                                                {/*Hình ảnh lớn*/}
                                                <div className="avatar-upload">
                                                    <div className="avatar-edit">
                                                        <input
                                                            multiple
                                                            type="file"
                                                            id="productImageList"
                                                            name="productImageList"
                                                            className="ec-image-upload"
                                                            accept=".png, .jpg, .jpeg"
                                                            onChange={handleFileChange}
                                                        />
                                                        <label htmlFor="productImageList">
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
                                                        <div className="imagePreview ec-div-preview d-flex justify-content-center">
                                                            <img
                                                                className="ec-image-preview"
                                                                src={mainImageUrl ? mainImageUrl : "https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/vender-upload-preview.jpg"}
                                                                alt="edit"
                                                                style={{
                                                                    height: 410,
                                                                    width: 370,
                                                                    borderRadius: 10,
                                                                    objectFit: "cover"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*Kết thúc hình ảnh lớn*/}
                                                <div className="thumb-upload-set">

                                                    <div style={{
                                                        display: 'flex',
                                                        justifyContent: "center",
                                                        flexDirection: 'row',
                                                        flexWrap: 'wrap'
                                                    }}>
                                                        {
                                                            (!subImageUrls)
                                                                ? <></>
                                                                : (subImageUrls.map((imgUrl, index) => {
                                                                    if (imgUrl)
                                                                        return (
                                                                            <div className="thumb-upload" key={index}>
                                                                                <div className="thumb-preview ec-preview">
                                                                                    <div className="image-thumb-preview">
                                                                                        <img
                                                                                            className="image-thumb-preview ec-image-preview"
                                                                                            src={imgUrl}
                                                                                            alt="edit"
                                                                                            style={{
                                                                                                marginTop: 25,
                                                                                                height: 100,
                                                                                                width: 100,
                                                                                                borderRadius: 10,
                                                                                                marginLeft: '0.5rem'
                                                                                            }}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                }))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="ec-vendor-upload-detail">
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="name" className="form-label">
                                                        Product name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className={`form-control slug-title ${
                                                            formik.errors.name && formik.touched.name
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="name"
                                                        name="name"
                                                        required
                                                        aria-required="true"
                                                        placeholder="Nhập tên sản phẩm"
                                                        value={formik.values.name}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.name && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.name}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">
                                                        Select Sub Categories
                                                    </label>
                                                    {/*category*/}
                                                    <select
                                                        className={`form-select ${
                                                            formik.errors.subCategoryId && formik.touched.subCategoryId
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        name="subCategoryId"
                                                        id="subCategoryId"
                                                        required
                                                        aria-required="true"
                                                        value={formik.values.monthOfBirth}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    >

                                                        {subCategories.map((subCategory) => (
                                                            <option key={subCategory.id}
                                                                    value={subCategory.id}>{subCategory.name}</option>
                                                        ))}

                                                    </select>
                                                    {formik.errors.subCategoryId && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.subCategoryId}
                                                        </div>
                                                    )}
                                                    {/*    End Category*/}
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Price (VNĐ):</label>
                                                    <input
                                                        type="number"
                                                        className={`form-control ${
                                                            formik.errors.price && formik.touched.price
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="price"
                                                        name="price"
                                                        required
                                                        aria-required="true"
                                                        placeholder="50.0000 VND"
                                                        value={formik.values.price}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.price && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.price}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Quantity</label>
                                                    <input
                                                        type="number"
                                                        className={`form-control ${
                                                            formik.errors.quantity && formik.touched.quantity
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="quantity"
                                                        name="quantity"
                                                        required
                                                        aria-required="true"
                                                        placeholder="50"
                                                        value={formik.values.quantity}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.quantity && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.quantity}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Weight (gram):</label>
                                                    <input
                                                        type="number"
                                                        className={`form-control ${
                                                            formik.errors.weight && formik.touched.weight
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="weight"
                                                        name="weight"
                                                        required
                                                        aria-required="true"
                                                        placeholder="1700 gram"
                                                        value={formik.values.weight}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.weight && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.weight}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Author:</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${
                                                            formik.errors.author && formik.touched.author
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="author"
                                                        name="author"
                                                        required
                                                        aria-required="true"
                                                        placeholder="Tố Hữu"
                                                        value={formik.values.author}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.author && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.author}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Height (cm):</label>
                                                    <input
                                                        type="number"
                                                        className={`form-control ${
                                                            formik.errors.height && formik.touched.height
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="height"
                                                        name="height"
                                                        required
                                                        aria-required="true"
                                                        placeholder="170 cm"
                                                        value={formik.values.height}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.height && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.height}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="form-label">Producer</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${
                                                            formik.errors.producer && formik.touched.producer
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="producer"
                                                        name="producer"
                                                        required
                                                        aria-required="true"
                                                        placeholder="PNJ"
                                                        value={formik.values.producer}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.producer && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.producer}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Include</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${
                                                            formik.errors.include && formik.touched.include
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        id="include"
                                                        name="include"
                                                        required
                                                        aria-required="true"
                                                        placeholder="Bài tarot bao gồm 78 lá bài"
                                                        value={formik.values.include}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.include && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.include}
                                                        </div>
                                                    )}

                                                </div>
                                                <div className="col-md-12">
                                                    <label className="form-label">Description</label>
                                                    <textarea
                                                        className={`form-control ${
                                                            formik.errors.description && formik.touched.description
                                                                ? "is-invalid"
                                                                : ""
                                                        }`}
                                                        rows={8}
                                                        style={{resize:"vertical"}}
                                                        placeholder="Mô tả chi tiết thông tin về sản phẩm"
                                                        id="description"
                                                        name="description"
                                                        required
                                                        aria-required="true"
                                                        value={formik.values.description}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.errors.description && (
                                                        <div className="invalid-feedback">
                                                            {formik.errors.description}
                                                        </div>
                                                    )}

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
                                                        style={{margin: "auto", position: "relative"}}
                                                    >
                                                      Submit
                                                    </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {" "}
            {/* End Content */}
        </div>
    );
}

export default AddProduct;
