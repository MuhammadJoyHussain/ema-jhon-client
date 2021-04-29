import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Review from './components/Review/Review';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';

export const UserContext = createContext();

function App() {
  const  [ loggedInUser, setLoggedInUser ] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>    
      <Router>
       <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivetRoute path="/inventory">
            <Inventory></Inventory>
            </PrivetRoute>
          <Route path="/login">
            <Login></Login>
            </Route>
          <PrivetRoute path="/Shipment">
            <Shipment></Shipment>
          </PrivetRoute>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>     
    </UserContext.Provider>
  );
}

export default App;
