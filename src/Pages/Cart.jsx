import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteCart, getCart } from '../Redux/CartReducer/action';

const Cart = () => {

    const cartData= useSelector((store)=>store.CartReducer.cart);
    const dispatch= useDispatch();
  
    useEffect(()=>{
        dispatch(getCart());
    }, [dispatch, cartData.length]);

    const totalprice=cartData.reduce((acc, el)=>{
        return acc+(+el.price)
    }, 0)


    const handleRemove= (id)=>{
        dispatch(deleteCart(id))
        .then(()=>dispatch(getCart()));
      }
    

  return (
    <div style={{paddingTop: "20px"}}>
      {cartData.length>0 ? <div style={{ width:"85%", margin:"auto", display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
        <div style={{width:"60%"}}>
            <p style={{fontSize:"27px"}}>Order Summary : </p>
            <div style={{width:"100%"}}>
                {cartData.length>0 && cartData.map((el)=>{
                    return <div key={el._id} style={{padding:"10px 0px", width:"80%"}}>
                        <div style={{display:"flex", gap:"10px", justifyContent:"space-between", alignItems:"center"}}>
                            <div style={{display:"flex", gap:"10px", justifyContent:"flex-start", alignItems: "center"}}>
                                <img style={{height:"110px", width:"110px"}} src={el.image} alt="avatar" />
                                <div style={{fontSize:"18px", textAlign: "left"}}>
                                    <p>{el.name}</p>
                                    <p>{el.net}</p>
                                    <p style={{color:"#D11243"}}>₹{el.price}</p>
                                </div>
                            </div>
                            <button style={{height:"40px", fontSize:"16px", backgroundColor:"#D11243", color:"white"}} onClick={(id=el.id)=>handleRemove(el.id)} >Remove</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div style={{width:"30%", border:"1px solid grey", borderRadius:"10px", padding:"35px", marginTop:"45px"}}>
            <div>
                <p style={{fontWeight:"600", fontSize:"22px"}}>Bill Details</p>
                <div style={{fontSize:"18px"}}>
                <div style={{display:"flex", justifyContent:"space-between", fontWeight: "600"}}>
                        <p>Total Item</p>
                        <p>{cartData.length}</p>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", fontWeight: "600"}}>
                        <p>subtotal</p>
                        <p>₹{totalprice}</p>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", fontWeight: "600"}}>
                        <p>Delivery Charge</p>
                        <p>₹0</p>
                    </div>
                    <div style={{border: "0.1px solid #D11243"}}></div>
                    <div style={{display:"flex", justifyContent:"space-between", fontWeight: "600"}}>
                        <p style={{fontSize:"20px"}}>Total Amount</p>
                        <p style={{color:"#D11243"}}>₹{totalprice}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>: <div style={{width:"100%", textAlign:"center"}}>
      <img style={{width:"60%", margin:"auto", marginTop:"3%"}} src="https://jobs.ficsi.in/assets/front_end/images/no-data-found.jpg" alt="" />
      </div>
      }
    </div>
  )
}

export default Cart
