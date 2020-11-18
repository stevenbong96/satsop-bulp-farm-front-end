import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import AdminProductCard from '../../components/AdminProductCard'
import './index.css'

export default function AdminProducts() {
    const [products, setProducts] = useState([])
    const [productToUpdate, setProductToUpdate] = useState({
        id: '',
        name: '',
        price: null,
        plantingSeason: '',
        needsFullSun: null,
        inStock: null,
        onSale: null
    })

    // on load, grab all products from db
    useEffect(() => {
        API.getProducts().then(({ data }) => {
            // set state to array of products
            setProducts(data)
        })
    }, [])

    return (
        <div className='products-container'>
            {products.map(product => {
                return (
                    <AdminProductCard />
                )
            })}
        </div>
    )
}
