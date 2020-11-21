import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import AdminProductCard from '../../components/AdminProductCard'
import AdminDashUpdateFields from '../../components/AdminDashUpdateFields'
import AdminNav from '../../components/AdminNav'
import AdminHeader from '../../components/AdminHeader'
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
        <>
            <AdminHeader />
            <AdminNav />
            <AdminDashUpdateFields>
            <h1 className='page-heading'>Products Page</h1>
            <hr />
                <div className='products-container'>
                    {products.map(product => {
                        return (
                            <AdminProductCard />
                        )
                    })}
                </div>
            </AdminDashUpdateFields>
        </>
    )
}
