import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {confirmPopup} from "primereact/confirmpopup";
import {deleteBlog, setBlog} from "~/features/blogSlice";
import aurora from "~/assets/images/aurora.jpg"

function BlogManagementItem({blog = {}}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const btnRef = useRef();

    const handleDeleteBlog = () => {
        confirmPopup({
            target: btnRef.current,
            message: 'Are you sure you want to delete this blog?',
            icon: 'pi pi-exclamation-triangle',
            accept() {
                dispatch(deleteBlog(blog.id))
            },
            reject() {
            }
        });
    }

    const handleEdit = () => {
        dispatch(setBlog(blog));
        navigate("/blogs/new")
    }

    return (
            <div className="media border border-danger-subtle rounded ps-0 shadow-lg" key={blog.id}>
                <div className="position-absolute end-0 cursor-pointer dropdown">
                     <span className="me-4"
                           data-bs-toggle="dropdown"
                           id={`dropdown-${blog.id}`}
                           ref={btnRef}
                     >
                           <i className="mdi mdi-menu fs-3"></i>
                     </span>
                    <div className="dropdown-menu dropdown-menu-end p-2 bg-info smooth-transition"
                         aria-labelledby={`dropdown-${blog.id}`}>
                        <div className="card-body rounded hover-bg-dark px-2 py-0 d-flex align-items-center"
                             onClick={handleDeleteBlog}
                        >
                            <i className="mdi mdi-delete fs-4"></i>
                            <div className="ms-2">Delete</div>
                        </div>
                        <div onClick={handleEdit}
                            className="card-body rounded hover-bg-dark px-2 py-0 d-flex align-items-center">
                            <i className="mdi mdi-email-edit fs-4"></i>
                            <span className="ms-2">Edit</span>
                        </div>
                        <div
                            className="card-body rounded hover-bg-dark px-2 py-0 d-flex align-items-center">
                            <i className="mdi mdi-globe-model fs-4"></i>
                            <span className="ms-2">Publish</span>
                        </div>
                    </div>
                </div>
                <div className="media-image">
                    <img src={blog.mainImageUrl || aurora} className="rounded" alt="img"/>
                </div>
                <div className="media-body ms-2">
                    <h4>
                        <div className="text-primary mt-2 pe-5">{blog.title}</div>
                    </h4>
                    <div className="text-small description">
                        {
                            blog.description?.slice(0, 140) + "..."
                        }
                    </div>
                    <div
                        className="item-meta position-absolute text-secondary bottom-0 pb-1 float-right text-small end-0">
                        <span className="me-4">Created at: {blog.createdAt}</span>
                    </div>
                </div>
            </div>
    );
}

export default BlogManagementItem;