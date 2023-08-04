import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router,Route } from "react-router-dom";
import webFont from "webfontloader";
 import React from "react";
 import Footer from "./component/layout/Footer/Footer.js";
 import Home from "./component/Home/Home.js";
import DrawerX from './component/layout/Header/DrawerX';
import Loader from './component/layout/Loader/Loaderx.js';


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
    <Footer />
    
  </Router> 
  
  );  
}

export default App;
