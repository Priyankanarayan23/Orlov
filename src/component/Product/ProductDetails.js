import React,{Fragment, useEffect} from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProductDetails } from '../../actions/productAction';
import Loader from "../layout/Loader/Loaderx";
import {useAlert} from "react-alert";

const ProductDetails = ({match}) => {

    const dispatch= useDispatch();
    const alert =useAlert();

    const {product,loading,error}=useSelector((state)=>state.productDetails);

    useEffect(()=>{
      if(error){
       alert.error(error);
       dispatch(clearErrors());
      }
 dispatch(getProductDetails(match.params.id));
    },[dispatch,match.params.id,error,alert]);


  return (
   <Fragment>
    {loading? <Loader/> : ( <Fragment>
        <div className="ProductDetails">
<div>
    <Carousel>
        {product.images && 
        product.images.map((i,item)=>(
<img className="CarouselImage"
key={item.url}
src={item.url}
alt={`${i}Slide`}
/>
        ))}
    </Carousel>
</div>
<div>
<div className="detailsBlock-1">
<h2>{product.name}</h2>
      <p>Product # {product._id}</p>      
</div >

<div className="detailsBlock-3">
                <h1>{`₹${product.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                   <button>-</button>
                   <input value="1" type="number" />
                   <button>+</button>
                   </div>{""}
                   <button>ADD TO CART</button>
                  </div> 
                  <p>
                  Status: {" "}
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                  </p>
</div>

<div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>

              


</div>
 </div>
    </Fragment>)}
   </Fragment>
  );
};

export default ProductDetails;
