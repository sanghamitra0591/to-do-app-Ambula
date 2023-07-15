import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from '../Components/ProductCard';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [data, setData]= useState([]);

    const navigate= useNavigate();

    useEffect(()=>{
        getData();
    }, [data])

    const getData= ()=>{
        return axios.get(`https://odd-boa-earrings.cyclic.app/product?category=Chicken`)
            .then((r)=>{
              setData(r.data)
            })
            .catch((e)=>console.log(e));
      }

  return (
    <div style={{paddingTop: "30px"}}>
      <div style={{display: "flex", justifyContent: "center", padding: "20px"}}>
        <button onClick={()=>navigate("/cart")} style={{border:"4px solid #b52231", backgroundColor:"white", color:"#b52231", padding:"7px", height:"40px", fontSize:"16px", fontWeight: "600", borderRadius: "15px"}}>Go to Cart</button>
      </div>
      <div style={{width: "85%", margin: "auto", display:"grid", gap:"25px", gridTemplateColumns:"repeat(3, 1fr)"}}>
        {data && data.map((el)=>{
            return <ProductCard key={el._id} props={el} />
        })}
    </div>
    </div>
  )
}

export default Product
