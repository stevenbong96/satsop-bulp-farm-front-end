import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import AdminProductCard from '../../components/AdminProductCard'
import AdminDashUpdateFields from '../../components/AdminDashUpdateFields'
import AdminNav from '../../components/AdminNav'
import './index.css'

export default function AdminProducts() {
    const [products, setProducts] = useState([])
    const [productToUpdate, setProductToUpdate] = useState({
        id: '',
        name: '',
        price: null,
        colors: [],
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
        <>
            <AdminNav />
            <AdminDashUpdateFields>
                <div className='products-container'>
                    {products.map(product => {
                        const { name, price, color, plantingSeason, needsFullSun, inStock, sale } = product
                        return (
                            <AdminProductCard 
                                name={name}
                                price={price}
                                color={color}
                                plantingSeason={plantingSeason}
                                needsFullSun={needsFullSun}
                                inStock={inStock}
                                sale={sale}
                            />
                        )
                    })}
                </div>
            </AdminDashUpdateFields>
        </>
    )
}
