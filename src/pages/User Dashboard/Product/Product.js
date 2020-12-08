import React, { useEffect, useState } from "react";
import ProductResult from "./ProductResult";
import "./product.css";
import API from "../../../utils/User/userAPI";
import ProductSearchFilter from "./ProductSearchFilter";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../../components/User Dashboard/Navbar/Navbar";
import Footer from "../../../components/User Dashboard/Footer/Footer";
import Header from "../Header/Header";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import ShoppingCart from "./ShoppingCart";
import Jumbotron from "../../../components/Jumbotron/Jumbotron";
import bkgImage from "../../../images/bkg-5.jpg";

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
    saleName: "",
  });
  const [shoppingCartState, setShoppingCartState] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Use Effect
  useEffect(() => {
    loadAllProducts();
  }, []);
  useEffect(() => {
    getTotal();
  }, [shoppingCartState]);

  // Load All Products Function
  function loadAllProducts() {
    API.getAllProducts()
      .then((res) => {
        // console.log(res.data);
        setCurrentSearch(res.data);
        setFiltered(res.data);
        // setDropFilter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Handle Input Change
  function handleInputChange(event) {
    const { name, value } = event.target;
    setProductSearchState(value.toLowerCase());
  }

  // Dropdown menu select
  function handleSelect(event) {
    const { name, value } = event.target;
    // console.log("SELECTED");
    console.log({ name, value });
    setValue({ ...stateValue, [name]: value });

    if (value === "") {
      window.location.reload();
    } else if (value === "All Category") {
      setFiltered(currentSearch);
    } else if (value === "Bulbs") {
      const newFilter = currentSearch.filter(
        (product) => product.category === value
      );
      console.log(newFilter);
      setFiltered(newFilter);
    } else if (value === "Fresh Cut Flowers") {
      const newFilter = currentSearch.filter(
        (product) => product.category === value
      );
      console.log(newFilter);
      setFiltered(newFilter);
    } else if (value === "Potted Plants") {
      const newFilter = currentSearch.filter(
        (product) => product.category === value
      );
      console.log(newFilter);
      setFiltered(newFilter);
    } else if (value === "Extra Supplies") {
      const newFilter = currentSearch.filter(
        (product) => product.category === value
      );
      console.log(newFilter);
      setFiltered(newFilter);
    } else if (value === "Floral Arrangements") {
      const newFilter = currentSearch.filter(
        (product) => product.category === value
      );
      console.log(newFilter);
      setFiltered(newFilter);
    } else if (value === "Fall") {
      const newFilter = currentSearch.filter(
        (product) => product.plantingSeason === value
      );
      console.log(newFilter);
      setFiltered(newFilter);
    } else if (value === "Spring") {
      const newFilter = currentSearch.filter(
        (product) => product.plantingSeason === value
      );
      console.log(newFilter);
      setFiltered(newFilter);
    }
  }

  const onClick = (event) => {
    showCart(event);
  };
  const addToCart = (obj) => {
    setShoppingCartState([...shoppingCartState, obj]);
  };
  const showCart = (event) => {
    document.querySelector(".Cart").className = "modal is-active Cart";
  };
  const getTotal = () => {
    let price1 = 0;
    // console.log(totalPrice);
    for (let i = 0; i < shoppingCartState.length; i++) {
      price1 = price1 + shoppingCartState[i].price;
    }
    setTotalPrice(price1);
  };
  const removeItem = (obj) => {
    let cartArray = [...shoppingCartState];
    let index = cartArray.indexOf(obj);
    cartArray.splice(index, 1);
    setShoppingCartState(cartArray);
  };

  return (
    <>
      <Header />
      <Navbar />
      <Jumbotron image={bkgImage} headline="Products"></Jumbotron>
      <div className="section">
        <form>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={6}>
              <div className="">
                <div className="control has-icons-left has-icons-right ">
                  <input
                    className="input is-rounded"
                    name="search"
                    type="text"
                    placeholder="Search Product"
                    onChange={handleInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={6} md={6}>
              <ProductSearchFilter
                onChange={handleSelect}
                value={stateValue}
                handleDropdownChange={handleSelect}
              />
            </Grid>

            <Grid item xs={6} md={6}>
              <div className="chartStyle">
                <IconContext.Provider value={{ size: 50 }}>
                  <div>
                    <AiOutlineShoppingCart
                      onClick={onClick}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <h1>
                    {shoppingCartState.length !== 0
                      ? shoppingCartState.length
                      : null}
                  </h1>
                </IconContext.Provider>
              </div>
            </Grid>
          </Grid>
        </form>

        <div className="resultStyle">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {[...filtered]
              .filter(
                (item) => item.name.toLowerCase().indexOf(searchProduct) > -1
              )
              .map((searchObj) => {
                // console.log(searchObj);
                return (
                  <ProductResult props={searchObj} addToCart={addToCart} />
                );
              })}
          </Grid>
        </div>
      </div>
      <ShoppingCart
        props={shoppingCartState}
        total={totalPrice}
        remove={removeItem}
      />
      <Footer />
    </>
  );
}

export default Product;
