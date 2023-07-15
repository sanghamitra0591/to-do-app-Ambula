import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { AddCart } from '../Redux/CartReducer/action';

const ProductCard = ({ props }) => {

    const { name, image, desc, net, price } =props;

    const dispatch= useDispatch();

    const handlecart= (e)=>{
      dispatch(AddCart(props)).then(()=>alert("Product added to cart"))
    }

  return (
    <div>
      <div
      style={{
        bg:"white",
        rounded:"10px",
        textAlign:"left",
        boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height: "520px"
      }}
      >
        <img style={{width: "100%"}} src={image} alt="img" />
        <div style={{padding:"15px", color:"#4e4b4b"}}>
          <p style={{height: "70px", fontWeight: "600", fontSize: "17px"}}>{name}</p>
          <p style={{color:"#757070", h:"55px", fontSize:"13px"}}>{desc}</p>
          <p style={{height:"30px", fontWeight:"600", fontSize:"14px"}}>{net}</p>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <p style={{color:"#b52231", fontSize:"16px"}}>MRP: ₹{price}</p>
            <button
              onClick={handlecart}
              style={{border:"1px solid #b52231", backgroundColor:"#b52231", color:"white", padding:"7px", height:"40px", fontSize:"16px"}}
              >ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
