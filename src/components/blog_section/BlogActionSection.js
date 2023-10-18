import React, {useEffect, useState} from 'react';
import styles from "./blog.module.scss"
import {ConfirmPopup} from "primereact/confirmpopup";
import {Button} from "primereact/button";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs, selectBlog, selectBlogs, setBlog} from "~/features/blogSlice";
import {Modal} from "react-bootstrap";
import clsx from "clsx";

function BlogActionSection({handleSave}) {
    const blog = useSelector(selectBlog);
    const blogs = useSelector(selectBlogs);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const handleCancel = () => {
        dispatch(setBlog({}))
    }
    const handleLoadBlog = (item) => {
        dispatch(setBlog(item))
        setShowModal(false)
    }

    useEffect(() => {
        if (!blogs || blogs.length === 0){
            dispatch(getBlogs())
        }
    },[]);

    return (
        <div className="col-xl-3">
            <div className={`card ${styles.rightSlide}`}>
                <div className="card-body">
                    <h4 className="card-title">Actions</h4>
                    <div className="template-demo">
                        <Button type="button"
                                className="btn btn-info btn-lg btn-block"
                                disabled={!blog.id}
                                onClick={handleSave}
                        >
                            <i className="mdi mdi-content-save"></i>Save Blog
                        </Button>
                        <button type="button"
                                className="btn btn-outline-warning btn-lg btn-block"
                                onClick={()=>setShowModal(true)}
                        >
                            <i className="mdi mdi-upload"></i>
                            Load Old Blog
                        </button>
                        <button type="button"
                                className="btn btn-outline-primary btn-lg btn-block">
                            <i className="mdi mdi-account"></i> Save as draft
                        </button>
                        <button type="button"
                                className="btn btn-outline-danger btn-lg btn-block"
                                onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            <Modal show={showModal}
                   onHide={()=>setShowModal(false)}
                   centered
            >
                <div className={clsx("px-4 bg-info rounded scroll-bar", styles.loadBlogModal)}>
                    <div className="sticky-top bg-info"><h2>Select blog</h2></div>
                    {
                        blogs.map((item, index) => (
                            <div key={index}
                                 className="mt-2 cursor-pointer hover-bg-dark p-2 rounded-2"
                                 onClick={()=>handleLoadBlog(item)}
                            >
                                {item.title}
                            </div>
                        ))
                    }
                </div>
            </Modal>
        </div>
    );
}

export default BlogActionSection;