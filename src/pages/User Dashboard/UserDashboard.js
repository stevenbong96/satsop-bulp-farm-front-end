import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Navbar from "../../components/User Dashboard/Navbar/Navbar";
import Header from "./Header/Header";
import Footer from "../../components/User Dashboard/Footer/Footer";

function UserDashboard() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <Product />
                </Route>
                {/* <Route exact path ="/search">
          <Search/>
        </Route> */}
            </Switch>
            <Footer />
        </Router>
    );
}

export default UserDashboard;
