import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import styles from "./blog.module.scss"
import clsx from "clsx";
import ReactQuill, {Quill} from "react-quill";
import ImageResize from 'quill-image-resize-module-react';
import {Image} from "primereact/image";
import {createBlog, updateBlog, uploadImage} from "~/api/blogApi";
import {ProgressSpinner} from "primereact/progressspinner";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {selectBlog, setBlog} from "~/features/blogSlice";

Quill.register('modules/imageResize', ImageResize);
const initBlog = {
    title: 'New blog',
    description:'',
    author: '3 psychic lady',
    mainImage: null,
    publish: false,
    content: '',
}

function BlogCreateSection({submitClicked, toggleSaveValid}) {
    const [value, setValue] = useState('');
    const [displayBlog, setDisplayBlog] = useState(initBlog);
    const [imgUrl, setImgUrl] = useState("");
    const [newPostLoading, setNewPostLoading] = useState(false);
    const [mainImage, setMainImage] = useState(null);
    const blog = useSelector(selectBlog)
    const dispatch = useDispatch();
    const reactQuillRef = useRef();
    const fileRef = useRef();

    const imageHandler = useCallback(() => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();
        input.onchange = () => {
            if (input !== null && input.files !== null) {
                const file = input.files[0];
                toast('Uploading...', {
                    type: "info",
                    isLoading: true,
                    pauseOnFocusLoss: false,
                    pauseOnHover: false,
                    toastId: 99
                })
                uploadImage({id: blog.id, file: file}).then(response => {
                    const quill = reactQuillRef.current;
                    if (response.status === 200) {
                        if (quill) {
                            const range = quill.getEditorSelection();
                            range && quill.getEditor().insertEmbed(range.index, "image", response.data);
                            toast.dismiss(99)
                            toast('Image added!', {type: "info",autoClose:500})
                        }
                    } else {
                        toast.dismiss(99)
                        toast(response.data, {type: "error"})
                    }
                })

            }
        };
    }, [blog.id]);
    const [editorModules, setEditorModule] = useState({});

    const handleChange = (e) => {
        let value;
        const files = e.target.files;
        if (files) {
            setMainImage(e.target.files[0]);
            const url = URL.createObjectURL(e.target.files[0])
            setImgUrl(url)
        } else {
            value = e.target.type === "checkbox"
                ? e.target.checked
                : e.target.value;
        }

        setDisplayBlog(prevState => {
            return {
                ...prevState,
                [e.target.name]: value
            }
        })
    }
    const clearImage = () => {
        URL.revokeObjectURL(imgUrl)
        setImgUrl("")
        setMainImage(null)
        fileRef.current.value = null;
        dispatch(setBlog({
            ...displayBlog,
            mainImageUrl: null
        }))
    }
    const handleNewPost = () => {
        setNewPostLoading(true)
        createBlog(initBlog).then(response => {
            setNewPostLoading(false)
            if (response){
                if (response.status !== 201) {
                    toast(`Create blog error! ${response.data.error}`, {type: "error"})
                } else {
                    toast("Blog created with id: " + response.data.id, {type: "success"})
                    dispatch(setBlog(response.data))
                }
            }else {
                toast("Connection error!",{type:"error"})
            }
        })
    }

    useEffect(() => {
        setEditorModule({
            toolbar: {
                container: [
                    [{'header': [1, 2, 3, 4, false]}], [{'font': []}],
                    [{'align': []}], [{'direction': 'rtl'}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'
                    ],
                    [{'script': 'sub'}, {'script': 'super'}],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image'], [{'color': []}, {'background': []}],
                    ['clean'],
                ],
                handlers: {
                    image: imageHandler
                }
            },
            clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false
            },
            imageResize: {
                parchment: Quill.import('parchment'),
                modules: ['Resize', 'DisplaySize']
            }
        })
        setValue(blog.content)
    }, [blog.id])

    useEffect(() => {
        if (displayBlog.id) {
            dispatch(setBlog({...displayBlog, content: value}))
        }
    }, [value])

    useEffect(() => {
        if (blog) {
            setDisplayBlog(blog)
        }
    }, [blog])

    useEffect(() => {
        toggleSaveValid(typeof displayBlog.id === "number")
    }, [displayBlog])

    useEffect(() => {
        if (submitClicked !== null) {
            toast('Saving...', {
                type: "info",
                isLoading: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
                toastId: 98
            })
            updateBlog({...displayBlog, mainImage}).then(response => {
                toast.dismiss(98)
                if (response){
                    if (response.status === 200){
                        toast('Saved!', {type: "success", autoClose: 1000})
                    }else {
                        toast(`Save error! [${response.status}]`, {type: "error", autoClose: 1000})
                    }
                }else {
                    toast('Connection error!', {type: "error", autoClose: 1000})
                }
            })
        }
    }, [submitClicked])

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (displayBlog && displayBlog.id){
                e.preventDefault();
                e.returnValue = "Dữ liệu chưa được lưu. Bạn có chắc chắn muốn rời khỏi trang?";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <>
            <div className="col-xl-9">
                <div className="card">
                    {displayBlog.id
                        ? <div className="card-body text-light">
                            <div className="post-editor border-bottom border-info">
                                <h1 className="card-title text-primary">Create new Blog</h1>
                            </div>
                            <section className="blog-create-header">
                                <div className="mb-3 mt-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-info">Post
                                        title</label>
                                    <input type="text" className="form-control text-light" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter post title" required
                                           name="title"
                                           value={displayBlog.title}
                                           onChange={handleChange}
                                           maxLength={1000}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1"
                                           className="form-label text-info">Author</label>
                                    <input type="text"
                                           className="form-control text-light"
                                           name="author" id="exampleInputPassword1"
                                           value={displayBlog.author}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description-1"
                                           className="form-label text-info">Description</label>
                                    <textarea
                                           className="form-control text-light"
                                           name="description" id="description-1"
                                           value={displayBlog.description}
                                           onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="flexSwitchCheckDefault" className={"text-info"}>Publish
                                        status</label>
                                    <div className="form-check form-switch border p-2 rounded mt-0">
                                        <input className="form-check-input ms-0 position-relative cursor-pointer"
                                               type="checkbox" role="switch" name={"publish"}
                                               checked={displayBlog.publish}
                                               onChange={handleChange}
                                               id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label d-inline-block cursor-pointer"
                                               htmlFor="flexSwitchCheckDefault">Publish this post</label>
                                    </div>
                                </div>
                            </section>

                            <div className={"text-center"}>
                                <h2>{displayBlog.title}</h2>
                            </div>
                            <div className={styles.uploadWrapper}>
                                <div className={styles.clearImage} onClick={clearImage}>
                                    <i className="mdi mdi-close fs-1 text-warning"></i>
                                </div>
                                <div hidden={!!mainImage || !!displayBlog.mainImageUrl} className={clsx(styles.uploadArea)}>
                                    <input type="file" name="mainImage" ref={fileRef} onChange={handleChange}/>
                                    <div className={styles.uploadLabel}>
                                        <i className="mdi mdi-image fs-1">Upload main Image</i>
                                    </div>
                                </div>
                                <div className={styles.imgPreview}>
                                    <Image
                                        src={displayBlog.mainImageUrl
                                            ?displayBlog.mainImageUrl
                                            :imgUrl}
                                        alt="Image"
                                        width={"100%"}
                                        height={'300'}
                                        preview/>
                                </div>
                            </div>
                            <div className="editor-body">
                                <div className={clsx(styles.postTextSection)}>
                                    <ReactQuill ref={reactQuillRef}
                                                theme="snow"
                                                value={value}
                                                modules={editorModules}
                                                onChange={setValue}
                                    />
                                </div>
                            </div>
                        </div>
                        : <div>
                            <button type="button"
                                    disabled={newPostLoading}
                                    className={clsx(styles.leftSlide, styles.postCreateBtn, "btn btn-success btn-lg btn-block")}
                                    onClick={handleNewPost}
                            >
                                {newPostLoading
                                    ? <><ProgressSpinner/>
                                        <span>Creating</span></>
                                    : <><i className="mdi mdi-newspaper fs-1"></i>
                                        <p className="fs-4">Create new Post</p></>

                                }
                            </button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default memo(BlogCreateSection);