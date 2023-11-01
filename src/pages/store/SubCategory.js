import React, {useEffect, useState} from 'react';
import {InputText} from "primereact/inputtext";
import {FileUpload} from "primereact/fileupload";
import {InputSwitch} from "primereact/inputswitch";
import {InputTextarea} from "primereact/inputtextarea";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import {TreeSelect} from "primereact/treeselect";
import {useDispatch, useSelector} from "react-redux";
import {
    createSubCategory, deleteCategory,
    getCategories, getSubCategories,
    selectCategories,
    selectGetCategoriesSuccess,
    selectGetSubCategoriesSuccess,
    selectSubCategoryPage
} from "~/features/categorySlice";
import logo from "~/assets/images/aurora.jpg"
import {Paginator} from "primereact/paginator";
import {confirmPopup} from "primereact/confirmpopup";
import Reload from "~/components/blog_section/Reload";

function SubCategory() {
    const [nodes, setNodes] = useState([]);
    const [showEntries, setShowEntries] = useState(20);
    const [thumbFile, setThumb] = useState(null);
    const [name, setName] = useState('');
    const [id, setId] = useState(null);
    const [active, setActive] = useState(false);
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState(null);
    const categories = useSelector(selectCategories);
    const subCategoryPage = useSelector(selectSubCategoryPage);
    const [subCategories, setSubCategories] = useState([]);
    const dispatch = useDispatch();
    const getCategoriesSuccess = useSelector(selectGetCategoriesSuccess);
    const getSubCategoriesSuccess = useSelector(selectGetSubCategoriesSuccess);
    const [rows, setRows] = useState(10);
    const [first, setFirst] = useState(0);

    const handleSubmit = () => {
        dispatch(createSubCategory({
            id,
            name,
            active,
            thumbFile,
            description,
            categoryId
        }))
    }
    const handleCancelEdit = () => {

    }
    const handleDelete = (subCategory, event) => {
        confirmPopup({
            target: event.target,
            message: 'Are you sure you want to delete?',
            icon: 'pi pi-exclamation-triangle',
            accept() {
                // dispatch(deleteSubCategory(subCategories.id))
            },
            reject() {
            }
        })
    }
    const handleEdit = () => {

    }
    const onPageChange = (e) => {
        setFirst(e.first)
        setRows(e.rows)
        dispatch(getSubCategories({
            page: e.page,
            size: e.rows
        }))
    }
    const handleReload = () => {
        dispatch(getSubCategories())
    }

    useEffect(() => {
        const categoryNodes = categories.map(category => {
            return {
                label: category.name,
                data: category.id,
                key: category.id
            }
        })
        setNodes(categoryNodes)
    }, []);

    useEffect(() => {
        if (subCategoryPage.content)
            setSubCategories(subCategoryPage.content)
    }, [subCategoryPage]);

    useEffect(() => {
        if (!getCategoriesSuccess)
            dispatch(getCategories())
        if (!getSubCategoriesSuccess)
            dispatch(getSubCategories())
    }, []);

    return (
        <div className="row">
            <div className="col-xl-4">
                <div className="card min-vh-100 p-3">
                    <div className="border-bottom">
                        <h1 className="text-info">Sub Category</h1>
                    </div>
                    <div className="text-light">
                        <div className="d-flex flex-column mt-3">
                            <label htmlFor="category-name">Category:</label>
                            <TreeSelect options={nodes}
                                        value={categoryId}
                                        placeholder="Select category"
                                        required
                                        onChange={e => setCategoryId(e.value)}/>
                        </div>
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
                            <InputText id="name" value={name}
                                       placeholder="New sub-category"
                                       onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="d-flex flex-column mt-3 border rounded">
                            <label>Thumb</label>
                            <FileUpload accept="image/*"
                                        maxFileSize={1000000}
                                        headerStyle={{background: '#191c24', border: "none"}}
                                        contentStyle={{background: '#191c24', border: "none"}}
                                        uploadOptions={{style: {display: "none"}}}
                                        cancelOptions={{style: {borderRadius: 6}}}
                                        onSelect={(e) => setThumb(e.files[0])}
                                        onClear={() => setThumb(null)}
                                        onRemove={() => setThumb(null)}
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
                        <div>
                            <Paginator first={first} rows={rows}
                                       totalRecords={subCategoryPage.totalElements}
                                       rowsPerPageOptions={[10, 20, 50, 100]}
                                       onPageChange={onPageChange}/>
                        </div>
                        <table className="table table-dark border table-responsive">
                            <thead className="text-info">
                            <tr>
                                <th>Thumb
                                </th>
                                <th>Name
                                    <i className="mdi mdi-sort text-light" style={{backgroundColor: "#191c24"}}></i>
                                </th>
                                <th>Categories
                                    <i className="mdi mdi-sort text-light" style={{backgroundColor: "#191c24"}}></i>
                                </th>
                                <th>Product
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
                                subCategories.map((subCategory, index) => (
                                    <tr className="category-line" key={index}>
                                        <td><img src={subCategory.thumbUrl || logo}
                                                 style={{width: 50, height: 50, objectFit: "cover"}} alt="thumbFile"/>
                                        </td>
                                        <td>{subCategory.name}</td>
                                        <td>{subCategory.categoryName}</td>
                                        <td>{subCategory.productTypeCount}</td>
                                        <td className={subCategory.active ? "text-success" : "text-danger"}>{subCategory.active ? "Active" : "Inactive"}</td>
                                        <td className="pe-2" style={{whiteSpace: "nowrap"}}>
                                            <button className="btn btn-sm btn-info"
                                                    onClick={() => handleEdit(subCategory)}>Edit
                                            </button>
                                            <button className="btn btn-sm btn-danger ms-2"
                                                    onClick={(event) => handleDelete(subCategory, event)}>Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        <div>
                            <Paginator first={first} rows={rows}
                                       totalRecords={subCategoryPage.totalElements}
                                       rowsPerPageOptions={[10, 20, 50, 100]}
                                       onPageChange={onPageChange}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SubCategory;