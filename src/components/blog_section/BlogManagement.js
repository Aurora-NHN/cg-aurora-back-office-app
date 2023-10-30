import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getBlogs, selectBlogs, selectGetBlogLoading, selectGetBlogsSuccess} from "~/features/blogSlice";
import clsx from "clsx";
import styles from "./blog.module.scss"
import {ProgressSpinner} from "primereact/progressspinner";
import BlogManagementItem from "~/components/blog_section/BlogManagementItem";
import {motion} from "framer-motion";

function BlogManagement() {
    const dispatch = useDispatch();
    const blogs = useSelector(selectBlogs);
    const loadingBlogs = useSelector(selectGetBlogLoading);
    const getBlogsSuccess = useSelector(selectGetBlogsSuccess);
    const [displayBlogs, setDisplayBlogs] = useState([]);
    const [disableReload, setDisableReload] = useState(false);

    const handleReload = () => {
        if (!disableReload) {
            dispatch(getBlogs())
        }
        setDisableReload(true)
        setTimeout(() => {
            setDisableReload(false)
        }, 5000)
    }

    useEffect(() => {
        if (!getBlogsSuccess) {
            dispatch(getBlogs())
        }
    }, []);

    useEffect(() => {
        setDisplayBlogs(blogs)
    }, [blogs]);

    return (
        <div className="card text-light p-2 position-relative">
            {loadingBlogs && <div className={styles.blogReload}><ProgressSpinner/></div>}
            <div className="d-flex justify-content-center mt-2">
                <div className={clsx("position-absolute start-0 d-flex align-items-center"
                    ,styles.reloadWrapper
                    , {"cursor-pointer": !disableReload})}
                     onClick={handleReload}
                >
                    <div className={clsx({[styles.reload]: !disableReload}, styles.reloadBtn, "ms-4")}>
                        <i className={clsx("mdi mdi-reload fs-3", {"text-secondary opacity-50": disableReload})}></i>
                    </div>
                    <div className="ms-2">Reload</div>
                </div>
                <h1 className="text-info">Blog Management</h1>
            </div>
            <div className="widget widget_recent_posts mt-3">
                <div className="list-unstyled row m-0 d-flex">
                    {
                        displayBlogs.map((blog, index) => (
                            <motion.div
                                className={"col-md-6 mt-2 " + styles.blogItem}
                                initial={{opacity: 0, scale: 0.4}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.3,
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                            >
                                <BlogManagementItem blog={blog}/>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default BlogManagement;