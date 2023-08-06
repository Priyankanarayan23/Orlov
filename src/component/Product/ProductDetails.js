import React,{Fragment, useEffect} from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import MetaData from '../layout/MetaData';

const ProductDetails = ({match}) => {

    const dispatch= useDispatch();
    const {product,loading,error}=useSelector((state)=>state.productDetails);

    useEffect(()=>{
 dispatch(getProductDetails(match.params.id));
    },[dispatch,match.params.id]);


  return (
    <Fragment>
        <MetaData title={`${product.name } : ORLOV`}/>
        <div className="ProductDetails">
<div>
    <Carousel>
        {product.images && 
        product.images.map((item,i)=>(
              <img className='CarouselImage'
              key={i}
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
                   <select name="Size" id="size">
                      <option value="SMALL">S</option>
                      <option value="MEDIUM">M</option>
                      <option value="LARGE">L</option>
                      <option value="X LARGE">XL</option>
                  </select>
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
    </Fragment>
  );
};

export default ProductDetails;