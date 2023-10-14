import React from 'react';
import {useParams} from "react-router-dom";
import NewBlog from "~/components/blog_section/NewBlog";
import BlogCategory from "~/components/blog_section/BlogCategory";
import BlogManagement from "~/components/blog_section/BlogManagement";


function Blog(props) {
    const param = useParams()

    const child = () => {
        switch (param.section) {
            case 'new' : return <NewBlog/>
            case 'category': return <BlogCategory/>
            default: return <BlogManagement/>
        }
    }
return(
    <>
        {
            child()
        }
    </>
)
}

export default Blog;