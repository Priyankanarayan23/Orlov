import React, { Fragment } from 'react';
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";

const product={
    name:"Blue Tshirt",images:[{url:"https://i.pinimg.com/564x/0a/b9/e9/0ab9e93635d92f1defa45108d69b9271.jpg"}],price:"Rs.15,000",_id:"pri",
};

const Home = () => {
  return <Fragment>
    <div className="Banner">
        <h1>Welcome to ORLOV</h1>
        <a href="#container">
            <button>Scroll <CgMouse /></button>
        </a>
    </div>

    <h2 className="homeHeading">TRENDING</h2>
    <div className="container" id="container">

        <Product product={product}/>
    </div>
  </Fragment>;
};

export default Home;
