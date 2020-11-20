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
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className='product-name-container'>
                    <h2 className='product-name'>{props.name}</h2>
                </div>
                <div className='product-price-container'>
                    <p className='product-price'>${props.price.toFixed(2)}</p>
                </div>
                <div className='product-colors-container'>
                    {props.color.map(color => <div style={color !== 'mixed' && color !== 'mixtures' ? { backgroundColor: colors[color] } : { background: colors[color] }} className='color-square'></div>)}
                </div>
                <div className='availability-container'>
                    <p className='availability'>{props.inStock ? 'In Stock' : 'Out of Stock'}</p>
                </div>
                <div className='product-sale-container'>
                    <p className='product-sale'>{props.sale ? 'on sale' : '<sale here>'}</p>
                </div>
                <div className='product-btns'>
                    <button className='btn product-update-btn' onClick={() => props.handleUpdateBtnClick(props.id)}>Update</button>
                    <button className='btn product-delete-btn' onClick={() => props.handleProductDelete(props.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}
