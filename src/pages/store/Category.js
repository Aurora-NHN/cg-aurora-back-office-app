import React, {useEffect, useState} from 'react';
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea"
import {Dropdown} from "primereact/dropdown";
import {InputSwitch} from "primereact/inputswitch";
import {FileUpload} from "primereact/fileupload";
import "./category.scss"
import {Button} from "primereact/button";
import {useDispatch, useSelector} from "react-redux";
import {
    createCategory,
    deleteCategory,
    getCategories,
    selectCategories,
    selectGetCategoriesSuccess, updateCategory
} from "~/features/categorySlice";
import logo from "~/assets/images/aurora.jpg"
import {confirmPopup} from "primereact/confirmpopup";
import subCategory from "~/pages/store/SubCategory";
import Reload from "~/components/blog_section/Reload";

function Category() {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const getCategoriesSuccess = useSelector(selectGetCategoriesSuccess);
    const [showEntries, setShowEntries] = useState(20);
    const [id, setId] = useState(null);
    const [active, setActive] = useState(false);
    const [thumbFile, setThumbFile] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (!id) {
            dispatch(createCategory({
                id,
                name,
                active,
                thumbFile: thumbFile,
                description
            }))
        } else {
            dispatch(updateCategory({
                id,
                name,
                active,
                thumbFile: thumbFile,
                description
            }))
        }
    }
    const handleEdit = (category) => {
        setThumbFile(null)
        setId(category.id)
        setName(category.name);
        setActive(category.active);
        setDescription(category.description ? category.description : '')
    }
    const handleCancelEdit = () => {
        setId(null)
        setName('');
        setActive(false);
        setDescription('')
    }
    const handleDelete = (category, event) => {
        confirmPopup({
            target: event.target,
            message: 'Are you sure you want to delete this category?',
            icon: 'pi pi-exclamation-triangle',
            accept() {
                dispatch(deleteCategory(category.id))
            },
            reject() {
            }
        })
    }
    const handleReload = () => {
        dispatch(getCategories())
    }

    useEffect(() => {
        if (!getCategoriesSuccess)
            dispatch(getCategories())
    }, []);

    return (
        <div className="row">
            <div className="col-xl-4">
                <div className="card min-vh-100 p-3">
                    <div className="border-bottom">
                        <h1 className="text-info">Main Category</h1>
                    </div>
                    <div className="text-light">
                        <div className="d-flex flex-column mt-3">
                            <div className='d-flex justify-content-between'>
                                <label htmlFor="name">Name</label>
                                {id
                                    ? <div className="d-flex align-items-center">
                                        <div className="text-warning fs-7">Editing category. Id:{id}</div>
                                        <div className="cursor-pointer ms-2" onClick={handleCancelEdit}>
                                            <i className="mdi mdi-close text-danger"></i>
                                        </div>
                                    </div>
                                    : <div></div>}
                            </div>
                            <InputText id="name" value={name} placeholder="New category"
                                       onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="d-flex flex-column mt-3">
                            <label>Thumb</label>
                            <FileUpload accept="image/*"
                                        maxFileSize={1000000}
                                        headerStyle={{background: '#191c24', border: "none"}}
                                        contentStyle={{background: '#191c24', border: "none"}}
                                        uploadOptions={{style: {display: "none"}}}
                                        cancelOptions={{style: {borderRadius: 6}}}
                                        onSelect={(e) => setThumbFile(e.files[0])}
                                        onClear={() => setThumbFile(null)}
                                        onRemove={() => setThumbFile(null)}
                                        emptyTemplate={
                                            <p className="m-0">
                                                Drag and drop files to here to upload.
                                            </p>
                                        }
                            />
                        </div>
                        <div className="d-flex mt-3">
                            <label htmlFor="select-main-category">Active</label>
                            <InputSwitch checked={active}
                                         className="ms-2"
                                         onChange={(e) => setActive(e.value)}/>
                        </div>

                        <div className="d-flex flex-column mt-3">
                            <label htmlFor="description">Description</label>
                            <InputTextarea
                                inputid="description"
                                name="description"
                                rows={4}
                                cols={30}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="d-flex flex-column mt-3">
                            <Button label="Submit" className="rounded" onClick={handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-8">
                <div className="card min-vh-100 p-3">

                    <div className="d-flex justify-content-between border-bottom pb-1 text-light">
                        <div>
                            <Reload onReload={handleReload}/>
                        </div>
                        <div>
                            <div className="d-flex align-items-center">
                                <label htmlFor="search-entries">Search:</label>
                                <InputText className="ms-2" id="search-entries"/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <table className="table table-dark border table-responsive">
                            <thead className="text-info">
                            <tr>
                                <th>Thumb
                                </th>
                                <th>Name
                                    <i className="mdi mdi-sort text-light" style={{backgroundColor: "#191c24"}}></i>
                                </th>
                                <th>Sub Categories
                                    <i className="mdi mdi-sort text-light" style={{backgroundColor: "#191c24"}}></i>
                                </th>
                                <th>Description
                                    <i className="mdi mdi-sort text-light" style={{backgroundColor: "#191c24"}}></i>
                                </th>
                                <th>Status
                                    <i className="mdi mdi-sort text-light" style={{backgroundColor: "#191c24"}}></i>
                                </th>
                                <th>Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                categories.map((category, index) => (
                                    <tr className="category-line" key={index}>
                                        <td><img src={category.thumbUrl || logo}
                                                 style={{width: 50, height: 50, objectFit: "cover"}} alt="thumbFile"/>
                                        </td>
                                        <td>{category.name}</td>
                                        <td style={{lineHeight: 1}}>
                                            {
                                                category.subCategories && category.subCategories.length > 0
                                                    ? category.subCategories.map((item, index) => {
                                                        return <p
                                                            key={index}
                                                            className="rounded p-0 mb-0 border"
                                                            style={{whiteSpace: "nowrap", backgroundColor:"#5c5c5cb0"}}
                                                        >
                                                           {item}
                                                        </p>
                                                    })
                                                    : "No sub-category"
                                            }
                                        </td>
                                        <td>{category.description}</td>
                                        <td className={category.active ? "text-success" : "text-danger"}>
                                            {category.active ? "Active" : "Inactive"}
                                        </td>
                                        <td className="pe-2 text-nowrap">
                                            <button className="btn btn-sm btn-info"
                                                    onClick={() => handleEdit(category)}>Edit
                                            </button>
                                            <button className="btn btn-sm btn-danger ms-2"
                                                    onClick={(event) => handleDelete(category, event)}>Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
}

export default Category;