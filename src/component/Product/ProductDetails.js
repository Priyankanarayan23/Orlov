import React,{Fragment, useEffect,useState} from 'react';
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import Loader from "../layout/Loader/Loaderx";
import MetaData from '../layout/MetaData';
import { addItemsToCart } from "../../actions/cartAction";
import { useAlert } from "react-alert";

const ProductDetails = ({match}) => {

    const dispatch= useDispatch();
    const alert = useAlert();
    const {product,loading,error}=useSelector((state)=>state.productDetails);


    const[quantity,setQuantity]= useState(1);

    const increaseQuantity = () => {
      if (product.Stock <= quantity) return;
  
      const qty = quantity + 1;
      setQuantity(qty);
    };
  
    const decreaseQuantity = () => {
      if (1 >= quantity) return;
  
      const qty = quantity - 1;
      setQuantity(qty);
    };

    
  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id, quantity));
    alert.success("Item Added To Cart");
  };

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
<h1>{`₹${product.price}`}</h1>
      
</div >

<div className="detailsBlock-3">
               
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                   <button onClick={decreaseQuantity}>-</button>
                   <input value={quantity} readOnly type="number" />
                   <button onClick={increaseQuantity}>+</button>
                   </div>
                   <select name="Size" id="size">
                      <option value="SMALL">S</option>
                      <option value="MEDIUM">M</option>
                      <option value="LARGE">L</option>
                      <option value="X LARGE">XL</option>
                  </select>
                   <button onClick={addToCartHandler }>ADD TO CART</button>
                   <button onClick={addToCartHandler }>BUY NOW</button>
                  </div> 
                  <p>
                  Status: 
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