import React from "react";
// import AdminDashboard from "./pages/Admin Dashboard/AdminDashboard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import UserDashboard from './pages/User Dashboard/UserDashboard';
import BasicInfoUpdate from "./pages/BasicInfoUpdate"
import FAQUpdate from './pages/FAQUpdate'
import HomeUpdate from './pages/HomeUpdate'
import PlantingInstructionsAdmin from './pages/PlantingInstructionsAdmin'
import AdminProducts from './pages/AdminProducts'
import Faq from "./pages/User Dashboard/FAQ/Faq";
import UserAuth from "./pages/User Dashboard/User Authentication/UserAuth";
import Product from "./pages/User Dashboard/Product/Product";
import Home from "./pages/User Dashboard/Home/Home";
import Planting from "./pages/User Dashboard/Planting/Planting";
import Orders from "./pages/Orders"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/products">
            <Product />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
          <Route exact path="/planting">
            <Planting />
          </Route>
          <Route exact path="/login">
            <UserAuth />
          </Route>
          {/* <Route exact path='/admin/dashboard'>
            <BasicInfoUpdate />
          </Route> */}
          <Route exact path='/admin/dashboard/basicinfo'>
            <BasicInfoUpdate />
          </Route>
          <Route exact path='/admin/dashboard/faq'>
            <FAQUpdate />
          </Route>
          <Route exact path='/admin/dashboard/home'>
            <HomeUpdate />
          </Route>
          <Route exact path='/admin/dashboard/planting'>
            <PlantingInstructionsAdmin />
          </Route>
          <Route exact path='/admin/dashboard/products'>
            <AdminProducts />
          </Route>
          <Route exact path='/admin/dashboard/orders'>
            <Orders />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
