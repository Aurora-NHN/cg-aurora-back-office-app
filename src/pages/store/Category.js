import React, {useEffect, useState} from 'react';
import {InputText} from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea"
import {Dropdown} from "primereact/dropdown";
import {InputSwitch} from "primereact/inputswitch";
import {FileUpload} from "primereact/fileupload";
import "./category.scss"
import {Button} from "primereact/button";
import {useDispatch, useSelector} from "react-redux";
import {createCategory, getCategories, selectCategories, selectGetCategoriesSuccess} from "~/features/categorySlice";
import logo from "~/assets/images/aurora.jpg"

function Category() {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const getCategoriesSuccess = useSelector(selectGetCategoriesSuccess);
    const [showEntries, setShowEntries] = useState(20);
    const [active, setActive] = useState(false);
    const [thumb, setThumb] = useState(null);
    const [name, setName] = useState("New category");
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        dispatch(createCategory({
            name,
            active,
            thumb,
            description
        }))
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
                            <label htmlFor="name">Name</label>
                            <InputText id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="d-flex flex-column mt-3">
                            <label>Thumb</label>
                            <FileUpload name="demo[]"
                                        url={'/api/upload'}
                                        accept="image/*"
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
                        <table className="table table-dark border table-responsive" style={{maxWidth:'100%'}}>
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
                                categories.map((category, index) => (
                                    <tr className="category-line" key={index}>
                                        <td><img src={category.thumbUrl || logo}
                                                 style={{width: 100, height: 100, objectFit: "cover"}} alt="thumb"/>
                                        </td>
                                        <td>{category.name}</td>
                                        <td>product</td>
                                        <td>{category.description}</td>
                                        <td>{category.active ? "Active" : "Inactive"}</td>
                                        <td className="pe-2">
                                            <button className="btn btn-sm btn-info">Edit</button>
                                            <button className="btn btn-sm btn-danger ms-2">Delete</button>
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

export default Category;