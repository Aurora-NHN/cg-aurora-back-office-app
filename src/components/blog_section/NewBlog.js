import React, {useEffect, useState} from 'react';
import {confirmPopup} from "primereact/confirmpopup";
import BlogActionSection from "~/components/blog_section/BlogActionSection";
import BlogCreateSection from "~/components/blog_section/BlogCreateSection";

function NewBlog(props) {
    const [submit, setSubmit] = useState(null);
    const [saveValid, setSaveValid] = useState(false);



    const handleSave = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept() {
                setSubmit(prevState => !prevState)
            },
            reject() {
            }
        });
    }

    const handleSaveValid = (condition) => {
        setSaveValid(condition)
    }

    return (
        <div className="min-vh-100 text-light overflow-hidden">
            <div className="row flex-row-reverse">
                <BlogActionSection handleSave={handleSave} saveValid={saveValid}/>
                <BlogCreateSection submitClicked={submit} toggleSaveValid={handleSaveValid}/>
            </div>
        </div>
    )
}

export default NewBlog;