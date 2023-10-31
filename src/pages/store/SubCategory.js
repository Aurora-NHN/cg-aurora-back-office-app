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
    createSubCategory,
    getCategories, getSubCategories,
    selectCategories,
    selectGetCategoriesSuccess,
    selectGetSubCategoriesSuccess,
    selectSubCategories
} from "~/features/categorySlice";
import logo from "~/assets/images/aurora.jpg"

function SubCategory() {
    const [nodes, setNodes] = useState([]);
    const [showEntries, setShowEntries] = useState(20);
    const [thumb, setThumb] = useState(null);
    const [name, setName] = useState('');
    const [id, setId] = useState(null);
    const [active, setActive] = useState(false);
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState(null);
    const categories = useSelector(selectCategories);
    const subCategories = useSelector(selectSubCategories);
    const dispatch = useDispatch();
    const getCategoriesSuccess = useSelector(selectGetCategoriesSuccess);
    const getSubCategoriesSuccess = useSelector(selectGetSubCategoriesSuccess);

    const handleSubmit = () => {
        dispatch(createSubCategory({
            id,
            name,
            active,
            thumb,
            description,
            categoryId
        }))
    }
    const handleCancelEdit = () => {

    }
    const handleDelete = () => {

    }
    const handleEdit = () => {

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
                            <label htmlFor={"entries"}>Show</label>
                            <Dropdown id={"entries"}
                                      className="text-light ms-2"
                                      value={showEntries}
                                      onChange={(e) => setShowEntries(e.value)}
                                      options={[20, 30, 50, {label: 'All', value: 100}]}/>
                            <span className="ms-2">Entries</span>
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
                                                 style={{width: 50, height: 50, objectFit: "cover"}} alt="thumb"/>
                                        </td>
                                        <td>{subCategory.name}</td>
                                        <td>{subCategory.categoryName}</td>
                                        <td>{subCategory.productTypeCount}</td>
                                        <td className={subCategory.active ? "text-success" : "text-danger"}>{subCategory.active ? "Active" : "Inactive"}</td>
                                        <td className="pe-2" style={{whiteSpace:"nowrap"}}>
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
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SubCategory;