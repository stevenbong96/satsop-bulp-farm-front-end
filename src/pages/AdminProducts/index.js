import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import AdminProductCard from '../../components/AdminProductCard'
import AdminDashUpdateFields from '../../components/AdminDashUpdateFields'
import AdminNav from '../../components/AdminNav'
import AdminHeader from '../../components/AdminHeader'
import './index.css'
import FilterDropdown from '../../components/FilterDropdown'
import ProductSortDropdown from '../../components/ProductSortDropdown'
import ProductUpdateModal from '../../components/ProductUpdateModal'
import { colors } from '@material-ui/core'
import SearchBar from '../../components/SearchBar'
import { useHistory } from 'react-router-dom'

export default function AdminProducts() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filters, setFilters] = useState({
        category: '',
        plantingSeason: '',
    })
    const [searchQuery, setSearchQuery] = useState('')
    const [productToUpdate, setProductToUpdate] = useState({
        id: '',
        name: '',
        price: 0,
        color: [],
        plantingSeason: '',
        sun: '',
        description: '',
        category: ''
    })

    let history = useHistory();

    // on load, grab all products from db
    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log(token);
        if(!token){
            history.push("/login")
        }
        API.getProducts().then(({ data }) => {
            // set state to array of products
            setProducts(data)
            setFilteredProducts(data)
        }).catch(err => {
            console.log(err);
            history.push("/login")
        })
    }, [])

    // when user updates the filters for their search, filter the products to meet the new filters
    useEffect(() => {
        // filter products to meet current filter
        let newProducts = []
        if (filters.category !== '' && filters.plantingSeason !== '') {
            newProducts = filteredProducts.filter(product => product.category === filters.category && product.plantingSeason === filters.plantingSeason)
        } else if (filters.category !== '') {
            newProducts = filteredProducts.filter(product => product.category === filters.category)
        } else if (filters.plantingSeason !== '') {
            newProducts = filteredProducts.filter(product => product.plantingSeason === filters.plantingSeason)
        } else {
            newProducts = products
        }
        // if there is a search query, match products to the query
        if (searchQuery !== '') {
            let regexStr = '';

            // for each character in search query, allow any characters to come between the given characters
            searchQuery.split('').forEach(char => {
                regexStr += char + '[a-z]*'
            })

            // create new array of matching products
            newProducts = newProducts.filter(product => {
                const regex = new RegExp(regexStr, 'i')
                return regex.test(product.name)
            })
        }
        // set state to new products array
        setFilteredProducts(newProducts)
    }, [filters])

    const handleSearchInputChange = event => {
        // grab value of new search query
        const value = event.target.value

        // update state to contain new value
        setSearchQuery(value)
    }

    const handleSearch = event => {
        event.preventDefault();

        let regexStr = '';
        // for each character in search query, allow any characters to come between the given characters
        searchQuery.split('').forEach(char => {
            regexStr += char + '[a-z]*'
        })

        // create new array of matching products
        const newProducts = products.filter(product => {
            const regex = new RegExp(regexStr, 'i')
            return regex.test(product.name)
        })

        setFilteredProducts(newProducts)
    }

    const handleFilterChange = async event => {
        // grab filter to be applied to search
        const filter = event.target.value
        const filterType = event.target.getAttribute('data-filterType')

        // set filtered products to contain entire array of products
        await setFilteredProducts(products)

        // add new filter object to state
        setFilters({
            ...filters,
            [filterType]: filter
        })
    }

    const handleFilterReset = event => {
        // set filters in state to empty strings
        setFilters({
            category: '',
            plantingSeason: ''
        })
        // set filtered products back to original array of products
        // setFilteredProducts(products)
    }

    // when user clicks update btn, pop up modal with info to be changed
    const handleUpdateBtnClick = id => {
        if (id) {
            const productToUpdate = products.filter(product => product._id === id)[0]
            // assign values in state to have values of product
            setProductToUpdate(productToUpdate)
        } else {
            setProductToUpdate({
                name: '',
                price: 0,
                color: [],
                plantingSeason: '',
                sun: '',
                description: '',
                category: ''
            })
        }

        document.querySelector('.modal').className = 'modal is-active'
    }

    const handleInputChange = event => {
        // grab name of property in state to change and it's value
        const { name, value } = event.target
        console.log(name, value)

        // if user is changing colors, make sure to update the array of colors first
        if (name === 'color') {
            const isChecked = event.target.checked
            // if checked, add the color to the color array for the product
            var currentColors = productToUpdate.color
            if (isChecked) {
                currentColors.push(value)
            } else {
                // if not checked, remove that color from the array
                currentColors = currentColors.filter(color => color != value)
            }
            // update state to contain new array of colors
            setProductToUpdate({
                ...productToUpdate,
                color: currentColors
            })
        } else {
            setProductToUpdate({
                ...productToUpdate,
                [name]: value
            })
        }
    }

    const handleProductUpdate = (isNew=null) => {
        if (!isNew) {
            API.updateProduct(productToUpdate._id, productToUpdate)
        } else {
            console.log('new product')
            console.log(productToUpdate)
            API.postProduct(productToUpdate)
        }
    }

    const handleProductDelete = id => {
        // make request to remove product from db
        API.deleteProduct(id)
    }

    const openCloudinaryWidget = (id) => {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "satstop-bulb-farm",
            uploadPreset: "ml_default",
            apiKey: '149938291122592'
        }, (error, result) => {
            if (!error && result && result.event === 'success') {
                // console.log("Done!  Here is the image info: ", result.info)
                console.log(result.info.secure_url)
                // make call to update url of image to new image
                API.updateProduct(id, { image: result.info.secure_url})
            }
        })

        widget.open()
    }

    const handleCheckboxClick = (event) => {
        const isChecked = event.target.checked
        let newBool;
        if (isChecked) {
            newBool = true
        } else {
            newBool = false
        }

        setProductToUpdate({
            ...productToUpdate,
            inStock: newBool
        })
    }

    return (
        <>
            <AdminHeader />
            <AdminNav />
            <AdminDashUpdateFields>
                <h1 className='page-heading'>Products Page</h1>
                <div className='search-filters'>
                    <SearchBar
                        value={searchQuery}
                        handleSearchInputChange={handleSearchInputChange}
                        handleSearch={handleSearch}
                    />
                    <div className='product-filters'>
                        <ProductSortDropdown />
                        <FilterDropdown
                            handleFilterChange={handleFilterChange}
                            filterType='category'
                            label='Category'
                            options={['Bulbs', 'Fresh Cut Flowers', 'Potted Plants', 'Extra Supplies', 'Floral Arrangements']}
                        />
                        <FilterDropdown
                            handleFilterChange={handleFilterChange}
                            filterType='plantingSeason'
                            label='Planting Season'
                            options={['Spring', 'Fall']}
                        />
                        <button className='button reset-filters-btn' onClick={handleFilterReset}>Reset Filters</button>
                        <button className='button new-product-btn is-primary' onClick={() => handleUpdateBtnClick(null)}>New Product</button>
                    </div>
                </div>
                <hr />
                <div className='products-container'>
                    {filteredProducts.map(product => {
                        const { _id, name, price, color, plantingSeason, needsFullSun, inStock, sale } = product
                        return (
                            <AdminProductCard
                                id={_id}
                                name={name}
                                price={price}
                                image={product.image ? product.image : 'https://bulma.io/images/placeholders/1280x960.png'}
                                color={color}
                                plantingSeason={plantingSeason}
                                needsFullSun={needsFullSun}
                                inStock={inStock}
                                sale={sale}
                                imageWidget={openCloudinaryWidget}
                                handleUpdateBtnClick={handleUpdateBtnClick}
                                handleProductDelete={handleProductDelete}
                            />
                        )
                    })}
                </div>
            </AdminDashUpdateFields>
            <ProductUpdateModal
                name={productToUpdate.name}
                category={productToUpdate.category}
                color={productToUpdate.color}
                price={productToUpdate.price}
                plantingSeason={productToUpdate.plantingSeason}
                sun={productToUpdate.sun}
                inStock={productToUpdate.inStock}
                description={productToUpdate.description}
                handleInputChange={handleInputChange}
                handleProductUpdate={handleProductUpdate}
                handleCheckboxClick={handleCheckboxClick}
            />
        </>
    )
}
