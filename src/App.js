import './App.css';

import { BrowserRouter as Router,Route } from "react-router-dom";
import webFont from "webfontloader";
 import React from "react";
 import Footer from "./component/layout/Footer/Footer.js";
 import Home from "./component/Home/Home.js";
import DrawerX from './component/layout/Header/DrawerX';
import Loader from './component/layout/Loader/Loaderx.js';
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import Cart from "./component/Cart/Cart.js";
import Contact from './component/layout/Contact';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import ProtectedRoute from "./component/Route/ProtectedRoute";



function App() {

  React.useEffect(()=> {
    webFont.load({
      google:{
        families:["Poppins","Roboto","Driod-Sans","Jomhuria"],
      },
    });
   },[]);


  return (
  <Router>
    <DrawerX/>   
    <Route exact path="/" component={Home}/>
    <Route exact path="/product/:id" component={ProductDetails}/>
    <Route exact path="/products" component={Products}/>
    <Route path="/products/:keyword" component={Products}/>
    <Route exact path="/search" component={Search}/>
    <Route exact path="/login" component={LoginSignUp}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/order/confirm" component={ConfirmOrder} />

    <Footer />
    
  </Router> 
  
  );  
}

export default App;
