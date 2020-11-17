import React, { useEffect, useState } from "react";
import ProductResult from "./ProductResult";
import "./product.css";
import API from "../../../utils/User/userAPI";
import ProductSearchFilter from "./ProductSearchFilter";

function Product() {
    const [currentSearch, setCurrentSearch] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchProduct, setProductSearchState] = useState({
        search: ""
    })

    useEffect(() => {
        loadAllProducts();
    }, [])

    function loadAllProducts() {
        API.getAllProducts()
            .then(res => {
                // console.log(res.data);
                setCurrentSearch(res.data);
                setFiltered(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        // setProductSearchState({
        //     ...loadProducts,
        //     [name]: value
        // })
        setProductSearchState(value);
        // console.log(value)
        // let filtering = currentSearch
        // console.log(filtering)
        // let activeFilter = filtering.filter(query => query.name.includes(value.toLowerCase()))
        // console.log(activeFilter)
        // setFiltered([activeFilter])
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(currentSearch);
        console.log("SUBMITTED", searchProduct)
        API.getProductsName(searchProduct)
            .then(res => {
                setCurrentSearch([res.data])
                console.log(res.data)
                console.log(filtered)
            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleSelect() {

    }

    return (
        <form >
            <div className="columns productStyle is-justify-content-center">
                <div className="column">
                    <div className="field">
                        <div className="control has-icons-left">
                            <div className="select">
                                <select>
                                    <option selected>All Products</option>
                                    <option>In Stock</option>
                                    <option>Sale</option>
                                    <option>Season</option>
                                </select>
                                <div className="icon is-small is-left">
                                    <i className="fas fa-info-circle"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="column">

                </div>

                <div className="column">

                </div>

                <div className="column">
                        <div className="column">
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-rounded" name="search" type="text" placeholder="Search Product" onChange={handleInputChange} />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                        </div>

                        <div className="column">
                            <div>
                                <button type="submit" className="button" onClick={handleFormSubmit}>
                                    <span className="icon is-small">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                </div>

            </div>

            {/* <ProductSearchFilter /> */}
            {currentSearch.map(searchObj => {
                // console.log(searchObj);
                return <ProductResult name={searchObj.name} season={searchObj.bloomSeason} color={searchObj.color} planting={searchObj.plantingSeason} price={searchObj.price}/>
            })}
        </form>
    )
}

export default Product