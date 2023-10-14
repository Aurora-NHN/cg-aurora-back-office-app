import React from 'react';
import styles from "./blog.module.scss"
import {ConfirmPopup} from "primereact/confirmpopup";
import {Button} from "primereact/button";
import {useSelector} from "react-redux";
import {selectBlog} from "~/features/blogSlice";

function BlogActionSection({handleSave, handleLoadPost, handleCancel, saveValid = false}) {
    const blog = useSelector(selectBlog)

    return (
        <div className="col-xl-3">
            <ConfirmPopup/>
            <div className={`card ${styles.rightSlide}`}>
                <div className="card-body">
                    <h4 className="card-title">Actions</h4>
                    <div className="template-demo">
                        <Button type="button"
                                className="btn btn-info btn-lg btn-block"
                                disabled={!saveValid}
                                onClick={handleSave}
                        >
                            <i className="mdi mdi-content-save"></i>Save post
                        </Button>
                        <button type="button" className="btn btn-outline-warning btn-lg btn-block">
                            <i className="mdi mdi-upload"></i>
                            Load old post
                        </button>
                        <button type="button"
                                className="btn btn-primary btn-lg btn-block"
                                onClick={() => {
                                    console.log(blog)
                                }}>
                            <i className="mdi mdi-account"></i> Save as draft
                        </button>
                        <button type="button" className="btn btn-outline-danger btn-lg btn-block">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogActionSection;