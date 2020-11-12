import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Navbar from "../../components/User Dashboard/Navbar/Navbar";
import Header from "./Header/Header";

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
        </Router>
    );
}

export default UserDashboard;
