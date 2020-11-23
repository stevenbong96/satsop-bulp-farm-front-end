import React, { useEffect, useState } from "react";
import ProductResult from "./ProductResult";
import "./product.css";
import API from "../../../utils/User/userAPI";
import ProductSearchFilter from "./ProductSearchFilter";
import Grid from '@material-ui/core/Grid';
import Navbar from "../../../components/User Dashboard/Navbar/Navbar";
import Footer from "../../../components/User Dashboard/Footer/Footer";
import Header from "../Header/Header";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { IconContext } from "react-icons/lib";
import ShoppingCart from "./ShoppingCart";

function Product() {
    // Declare the state using Hook
    const [currentSearch, setCurrentSearch] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchProduct, setProductSearchState] = useState("");
    const [stateValue, setValue] = useState({
        categoryName: "",
        colorName: "",
        seasonName: "",
        stockName: "",
        saleName: ""
    });
    const [shoppingCartState, setShoppingCartState] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    // const [dropFilter , setDropFilter] = useState([]);
    // const [finalResult, setFinalResultState] = useState([]);

    // Use Effect
    useEffect(() => {
        loadAllProducts();
    }, [])
    useEffect(() => {
        getTotal();
    }, [shoppingCartState])  

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
        const { name, value } = event.target;
        // console.log("SELECTED");
        console.log({ name, value })
        setValue({ ...stateValue, [name]: value });
        // console.log(stateValue);
        // if(value === "All Products"){
        //      setFiltered(currentSearch)
        // } else if (value=== "inStock" || value === "sale"){
        //     const newFilter = currentSearch.filter(product => product[value] === true )
        //     setFiltered(newFilter)
        // }
        // if (value === "All Products") {
        //     setFiltered(currentSearch)
        // } else if (value === "inStock" || value === "sale" || value === "sun") {
        //     const newFilter = currentSearch.filter(product => product[value] === true)
        //     setFiltered(newFilter)
        // } else if (value === "color") {
        //     const newFilter = currentSearch.filter(product => product[value] === "red")
        //     setFiltered(newFilter)
        // } else if (value === "plantingSeason") {
        //     const newFilter = currentSearch.filter(product => product[value] === "Fall")
        //     setFiltered(newFilter)
        // } else {
        //     setFiltered(currentSearch)
        // }
        // const colors = ["red", "green", "yellow", "blue", "white", "pink","purple"];
        // const seasons = ["All Seasons", "Fall", "Spring"];
        // const categories = ["Bulbs", "Fresh Cut Flowers", "Potted Plants", "Extra Supplies"];

        // console.log(value)

        // Other method
        // console.log(currentSearch);
        // const filteringCategory = ["Bulbs", "Fresh Cut Flowers", "Potted Plants", "Extra Supplies"];
        // const filteringColor = ["red", "green", "yellow", "blue", "white", "pink", "purple", "striped"];
        // const filteringSeason = ["All Seasons", "Fall", "Spring"];

        if (value === "") {
            window.location.reload();
        } else if (value === "All Category") {
            setFiltered(currentSearch);
        } else if (value === "Bulbs") {
            const newFilter = currentSearch.filter(product => product.category === value)
            console.log(newFilter)
            setFiltered(newFilter)
        } else if (value === "Fresh Cut Flowers") {
            const newFilter = currentSearch.filter(product => product.category === value)
            console.log(newFilter)
            setFiltered(newFilter)
        } else if (value === "Potted Plants") {
            const newFilter = currentSearch.filter(product => product.category === value)
            console.log(newFilter)
            setFiltered(newFilter)
        } else if (value === "Extra Supplies") {
            const newFilter = currentSearch.filter(product => product.category === value)
            console.log(newFilter)
            setFiltered(newFilter)
        } else if (value === "Floral Arrangements") {
            const newFilter = currentSearch.filter(product => product.category === value)
            console.log(newFilter)
            setFiltered(newFilter)
        } else if (value === "Fall") {
            const newFilter = currentSearch.filter(product => product.plantingSeason === value)
            console.log(newFilter)
            setFiltered(newFilter)
        } else if (value === "Spring") {
            const newFilter = currentSearch.filter(product => product.plantingSeason === value)
            console.log(newFilter)
            setFiltered(newFilter)
        }

        // if (filteringCategory.includes(value) && filteringColor.includes(value) && filteringSeason.includes(value))
        //     const newFilter = currentSearch.filter(product => {
        //         console.log(product)
        //         return (product.filteringCategory === value)
        //     })
        // console.log(newFilter);

        // setFiltered(newFilter)

        // const filteringColor = ["red", "green", "yellow", "blue", "white", "pink", "purple", "striped"];
        // const newFilter = filtered.filter(product => {
        //     return (product.category === value)
        // })
        // console.log(newFilter);
        // setFiltered(newFilter)

        // const filteringSeason = ["All Seasons", "Fall", "Spring"];
        // const newFilter = filtered.filter(product => {
        //     return (product.category === value)
        // })
        // console.log(newFilter);
        // setFiltered(newFilter)

        // if (value === "All Category" || value === "All Color") {
        //     setFiltered(currentSearch);
        //     // setValue("");
        // }
        // if (value === "inStock") {
        //     const newFilter = currentSearch.filter(product => product.inStock);
        //     setFiltered(newFilter);
        // }
        // if (value === "sale") {
        //     const newFilter = filtered.filter(product => product.sale);
        //     setFiltered(newFilter);
        // }
        // if (value === "sun") {
        //     const newFilter = currentSearch.filter(product => product.sun);
        //     console.log('asdf', newFilter);
        //     setFiltered(newFilter)
        //     // } else if (categories.includes(value)) {
        //     //     const newFilter = currentSearch.filter(product => product.category.indexOf(value)>-1)
        //     //     // console.log(newFilter)
        //     //     setFiltered(newFilter)
        //     // } else if (colors.includes(value)) {
        //     //     const newFilter = currentSearch.filter(product => product.color.indexOf(value)>-1)
        //     //     // console.log(newFilter);
        //     //     setFiltered(newFilter)
        //     // } else if (seasons.includes(value)) {
        //     //     const newFilter = currentSearch.filter(product => product.plantingSeason.indexOf(value)>-1)
        //     //     // console.log(newFilter);
        //     //     setFiltered(newFilter)
        //     // } else if(value === "") {
        //     //     setFiltered(currentSearch)
        // } else {
        //     const newFilter = currentSearch.filter(product => product.category.includes(stateValue.categoryName) && product.color.includes(stateValue.colorName) && product.plantingSeason.includes(stateValue.seasonName))
        //     console.log(stateValue);
        //     console.log(newFilter);
        //     setFiltered(newFilter);
        // }
        // && product.inStock.includes(stateValue.stockName) && product.sale.includes(stateValue.saleName)
        // if (value=== "inStock" || value === "sale")
        // console.log(value);
        // const dropdownFilter = dropFilter.filter(queryFilter => queryFilter.sale === "true" ? console.log(queryFilter) : console.log("FALSE"));
        // console.log(dropdownFilter);
    }

    // function handleSelectColor(event){
    //     const { name, value } = event.target;
    //     // console.log("SELECTED");
    //     console.log({ name, value })
    //     setValue({ ...stateValue, [name]: value });

    //     if(value === "All Color"){
    //         setFiltered(filtered)
    //     } else if(value === "red"){
    //         const colorFilter = filtered.filter(product => product.color === [value] )
    //         console.log(colorFilter)
    //         setFiltered(colorFilter)
    //     }
    // }
    const onClick = (event) => {
        showCart(event)
    }
    const addToCart = (obj) => {
        setShoppingCartState([...shoppingCartState, obj])
    }
    const showCart = (event) => {
        document.querySelector('.modal').className = "modal is-active"
    }
    const getTotal =  () => {
        let price1 = 0
        console.log(totalPrice)
        for(let i = 0; i < shoppingCartState.length; i++) {
            price1 = price1 + shoppingCartState[i].price
        }
        setTotalPrice(price1)
    }
    const removeItem = (obj) => {
        let cartArray = [...shoppingCartState]
        let index = cartArray.indexOf(obj)
        cartArray.splice(index,1)
        setShoppingCartState(cartArray)
    }

    return (
        <>
            <Header />
            <Navbar />
            <form >
                <div className="columns productStyle is-justify-content-center">
                    <div className="column is-3">
                        <ProductSearchFilter onChange={handleSelect} value={stateValue} handleDropdownChange={handleSelect} />
                    </div>

                    <div className="column is-3">
                        <div className="inputStyle">
                            <div className="control has-icons-left has-icons-right ">
                                <input className="input is-rounded" name="search" type="text" placeholder="Search Product" onChange={handleInputChange} />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <IconContext.Provider value={{size:50}}>
                        <div>
                            <AiOutlineShoppingCart onClick={onClick} style={{cursor: "pointer"}}  />
                        </div>
                            <h1>{shoppingCartState.length !== 0 ? shoppingCartState.length : null}</h1>
                    </IconContext.Provider>
                </div>

            </form>

            <div className="resultStyle">
                <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                    {[...filtered].filter(item => item.name.toLowerCase().indexOf(searchProduct) > -1).map(searchObj => {
                        // console.log(searchObj);
                        return <ProductResult props={searchObj} addToCart={addToCart} />
                    })}
                </Grid>
            </div>
            <ShoppingCart props={shoppingCartState} total={totalPrice} remove={removeItem} />
            <Footer />
  
        </>
    )
}

export default Product
//Tried separating filter from setting new state

// function handleFilter(val) {
    //     if (val === "All Products") {
    //         setFiltered(currentSearch)
    //     } else if (val === "inStock" || val === "sale" || val === "sun") {
    //         const newFilter = currentSearch.filter(product => product[val] === true)
    //         // console.log(newFilter)
    //         setFiltered(newFilter)
    //     } else {
    //         const newFilter = currentSearch.filter(product => product.category.includes(stateValue.categoryName ) && product.color.includes(stateValue.colorName))
    //         setFiltered(newFilter)
    //     }
    // }