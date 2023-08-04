import React, { Fragment,useEffect } from 'react';
import "./Home.css";
import Product from "./Product.js";
import MetaData from '../layout/MetaData';
import MouseIcon from '@mui/icons-material/Mouse';
import {Button} from '@mui/material';
import {getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux";


const product={
    name:"Black Snake Tshirt",images:[{url:"https://i.pinimg.com/564x/0a/b9/e9/0ab9e93635d92f1defa45108d69b9271.jpg"}],price:"Rs.15,000",_id:"pri",
};

const Home = () => {
    const dispatch =useDispatch();
    const {loading,error,products,productsCount}=useSelector(
       (state)=>state.products);

    useEffect (() =>{
dispatch(getProduct());
    },[dispatch]);
    
  return <Fragment>
    <MetaData title="ORLOV" />
    <div className="Banner">
        <h1>Welcome to ORLOV</h1>
        <a href="#container">
        <Button variant="contained" endIcon={<MouseIcon/>} > Scroll</Button>
        </a>
    </div>

    <h2 className="homeHeading">TRENDING</h2>
    <div className="container" id="container">

    {products && products.map((product) => <Product product={product}/>)}
   
      
    </div>
   <div className="viewbutton"> <a href="#container">
            <button>View More</button>
        </a></div>

    <h2 className="homeHeading">BEST SELLING</h2>
    <div className="container" id="container">

     
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
       
    </div>
    <div className="viewbutton"> <a href="#container">
            <button>View More</button>
        </a></div>
  </Fragment>;
};

export default Home;
