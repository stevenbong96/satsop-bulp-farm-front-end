import { Category } from '@material-ui/icons'
import React, { useState } from 'react'
import './index.css'

export default function ProductUpdateModal(props) {

    const handleModalClose = event => {
        document.querySelector('.modal').className = 'modal'
    }

    const handleInputChange = event => {
        // grab name of property to be changed and new value
        const { name, value } = event.target

        // update state with new values
    }

    // categories and colors for a product
    const categories = ['Fresh Cut Flowers', 'Potted Plants', 'Bulbs', 'Extra Supplies', 'Floral Arrangements']
    const colors = ['yellow', 'purple', 'blue', 'pink', 'white', 'red', 'orange', 'green']

    return (
        <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Update Product: {props.name}</p>
                    <button className="delete" aria-label="close" onClick={handleModalClose} ></button>
                </header>
                <section className="modal-card-body">
                    <div className='field'>
                        <div className='control modal-input-field'>
                            <label className='label'>Product Name</label>
                            <input
                                className='input'
                                type='text'
                                value={props.name}
                                name='name'
                                onChange={props.handleInputChange}
                                placeholder='Product Name'
                            />
                        </div>
                        <div className='control modal-input-field'>
                            <label className='label'>Price</label>
                            <input
                                className='input'
                                type='number'
                                value={props.price}
                                name='price'
                                onChange={props.handleInputChange}
                                placeholder='Product Price'
                            />
                        </div>
                        <div className='control modal-input-field'>
                            <label className='label'>Category</label>
                            <select name='category' className='select' onChange={props.handleInputChange}>
                                {categories.map(category => {
                                    if (props.category === category) {
                                        return (
                                            <option value={category} selected>{category}</option>
                                        )
                                    } else {
                                        return (
                                            <option value={category}>{category}</option>
                                        )
                                    }
                                })}
                            </select>
                        </div>
                        <div className='control modal-input-field'>
                            <label className='label'>Planting Season</label>
                            <select className='select' name='plantingSeason' onChange={props.handleInputChange} >
                                {['Fall', 'Spring'].map(season => {
                                    if (props.plantingSeason === season) {
                                        return (
                                            <option selected value={season}>
                                                {season}
                                            </option>
                                        )
                                    } else {
                                        return (
                                            <option value={season}>
                                                {season}
                                            </option>
                                        )
                                    }
                                })}


                            </select>
                        </div>
                        <div className='control modal-input-field'>
                            <div className="in-stock-check-container">
                                <label>
                                    Available Online
                                    {props.inStock ? <input type='checkbox' className='checkbox instock-check' onClick={props.handleCheckboxClick} checked /> : <input type='checkbox' className='checkbox instock-check' onClick={props.handleCheckboxClick} />}
                                </label>
                            </div>
                        </div>
                        <div className='control modal-input-field'>
                            <label className='label'>Description</label>
                            <textarea
                                className="textarea"
                                placeholder="Product Description"
                                name='description'
                                onChange={props.handleInputChange}
                                value={props.description} >
                            </textarea>
                        </div>
                    </div>
                    <div className="change-img-container">
                        <button
                            id="upload_widget"
                            className="cloudinary-button change-img-btn"
                            onClick={() => props.imageWidget()}
                        >
                            Add Image
                        </button>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={() => {
                        handleModalClose()
                        props.handleProductUpdate(true)
                    }}>Save changes</button>
                    <button className="button" onClick={handleModalClose}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}
