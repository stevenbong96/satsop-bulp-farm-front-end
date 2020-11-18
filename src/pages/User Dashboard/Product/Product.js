import React, { useEffect, useState } from "react";
import ProductResult from "./ProductResult";
import "./product.css";
import API from "../../../utils/User/userAPI";
// import ProductSearchFilter from "./ProductSearchFilter";
import Grid from '@material-ui/core/Grid';

function Product() {
    // Declare the state using Hook
    const [currentSearch, setCurrentSearch] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchProduct, setProductSearchState] = useState("");
    const [value, setValue] = useState({});
    // const [dropFilter , setDropFilter] = useState([]);
    // const [finalResult, setFinalResultState] = useState([]);

    // Use Effect
    useEffect(() => {
        loadAllProducts();
    }, [])

    // Load All Products Function
    function loadAllProducts() {
        API.getAllProducts()
            .then(res => {
                // console.log(res.data);
                setCurrentSearch(res.data);
                setFiltered(res.data);
                // setDropFilter(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // Handle Input Change
    function handleInputChange(event) {
        const { name, value } = event.target;
        // setProductSearchState({
        //     ...loadProducts,
        //     [name]: value
        // })
        setProductSearchState(value.toLowerCase());

        // const serachedItem = filtered.filter(item=> item.name.toLowerCase().indexOf(searchProduct)>-1)

        // console.log(value)
        // let filtering = currentSearch
        // console.log(filtering)
        // let activeFilter = filtering.filter(query => query.name.includes(value.toLowerCase()))
        // console.log(activeFilter)
        // setFiltered([activeFilter])

    }
    
    // Dropdown menu select
    function handleSelect(event) {
        const { value } = event.target;
        console.log("SELECTED");
        setValue(value);
        if(value === "All Products"){
             setFiltered(currentSearch)
        } else if (value=== "inStock" || value === "sale"){
            const newFilter = currentSearch.filter(product => product[value] === true )
            setFiltered(newFilter)
        }
        if(value === "All Products"){
            setFiltered(currentSearch)
        } else if (value === "inStock" || value === "sale" || value === "sun"){
           const newFilter = currentSearch.filter(product => product[value] === true )
           setFiltered(newFilter)
        } else if (value === "color"){
            const newFilter = currentSearch.filter(product => product[value] === "red" )
            setFiltered(newFilter)
        } else if (value === "plantingSeason"){
            const newFilter = currentSearch.filter(product => product[value] === "Fall" )
            setFiltered(newFilter)
        } else {
            setFiltered(currentSearch)
        }
        // if (value=== "inStock" || value === "sale")
        // console.log(value);
        // const dropdownFilter = dropFilter.filter(queryFilter => queryFilter.sale === "true" ? console.log(queryFilter) : console.log("FALSE"));
        // console.log(dropdownFilter);
    }
    
    // Form Submit Function
    function handleFormSubmit(event) {
        event.preventDefault();
        // console.log(currentSearch);
        // console.log("SUBMITTED", searchProduct);
        // const objFilter = currentSearch.filter(query => query.name.includes(searchProduct));
        // console.log(currentSearch);
        // setFiltered(objFilter);
        // console.log(objFilter);
        // console.log(value);
    }

    return (
        <form >
            <div className="columns productStyle is-justify-content-center">
                <div className="column">
                    <div className="field">
                        <div className="control has-icons-left">
                            <div className="select">
                                <select onChange={handleSelect} value={value}>
                                    <option selected>All Products</option>
                                    <option value="inStock">In Stock</option>
                                    <option value="sale">Sale</option>
                                    <option value="plantingSeason">Season</option>
                                    <option value="sun">Full Sun</option>
                                    <option value="color">Color</option>
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

                    {/* <div className="column">
                        <div>
                            <button type="submit" className="button" onClick={handleFormSubmit}>
                                <span className="icon is-small">
                                    <i className="fas fa-search"></i>
                                </span>
                            </button>
                        </div>
                    </div> */}
                </div>

            </div>

            {/* <ProductSearchFilter /> */}
            <Grid container direction="row" justify="center" alignItems="center" spacing={2} className="resultStyle">
                {[...filtered].filter(item=> item.name.toLowerCase().indexOf(searchProduct)>-1).map(searchObj => {
                    // console.log(searchObj);
                    return <ProductResult name={searchObj.name} color={searchObj.color} planting={searchObj.plantingSeason} price={searchObj.price} />
                })}
            </Grid>
        </form>
    )
}

export default Product