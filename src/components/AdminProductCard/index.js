import React from 'react'
import './index.css'

export default function AdminProductCard(props) {
    const colors = {
        yellow: '#ffff00',
        purple: '#6a0dad',
        blue: '#0000ff',
        pink: '#ffc0cb',
        white: '#ffffff',
        red: '#ff0000',
        orange: '#ffa500',
        green: '#00ff00',
        mixed: 'linear-gradient(to right, red, yellow, green, lightblue)',
        mixtures: 'linear-gradient(to right, red, yellow, green, lightblue)'
    }

    return (
        <div className="card admin-product-card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.image} alt="Placeholder image" />
                </figure>
            </div>
            <div className='change-img-container'>
                <button id='upload_widget' className='cloudinary-button change-img-btn' onClick={() => props.imageWidget(props.image)}>Change Image</button>
            </div>
            <div className="card-content">
                <div className='product-name-container'>
                    <h2 className='product-name'>{props.name}</h2>
                </div>
                <div className='product-info-without-name'>
                    <div className='product-price-container'>
                        <p className='product-price'>${props.price.toFixed(2)}</p>
                    </div>
                    <div className='availability-container'>
                        <p className='availability'>{props.inStock ? 'In Stock' : 'Out of Stock'}</p>
                    </div>
                    <div className='product-btns'>
                        <button className='btn product-update-btn' onClick={() => props.handleUpdateBtnClick(props.id)}>Update</button>
                        <button className='btn product-delete-btn' onClick={() => props.handleProductDelete(props.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
