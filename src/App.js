import React from "react";
// import AdminDashboard from "./pages/Admin Dashboard/AdminDashboard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserDashboard from './pages/User Dashboard/UserDashboard';
import BasicInfoUpdate from "./pages/BasicInfoUpdate"
import FAQUpdate from './pages/FAQUpdate'
import HomeUpdate from './pages/HomeUpdate'
import PlantingInstructionsAdmin from './pages/PlantingInstructionsAdmin'
import AdminProducts from './pages/AdminProducts'

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path='/'>
            <UserDashboard />
          </Route>
          <Route exact path='/admin/dashboard'>
            <BasicInfoUpdate />
          </Route>
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
        </Switch>
      </Router> */}
      <UserDashboard />
    </div>
  );
}

export default App;
