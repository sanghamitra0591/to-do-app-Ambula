import React, { useState } from 'react'

const Contact = () => {

  const [data, setData]= useState({
    name: "",
    email: "",
    number: "",
    text: ""
  })

  const handleChange= (e)=>{
    setData({...data, [e.target.name]:e.target.value});
  }

  const handleClick= ()=>{
    if(data.name!=="" || data.email!=="" || data.number!=="" || data.text!==""){
      alert("Sent your message");
      setData({name: "", email: "", number: "", text: ""});
    }else {
      alert("Please fill all the fields.")
    }
  }

  return (
    <div style={{paddingTop: "40px"}}> 
    <div>
      <h2>Have any query or feedback for us?</h2>
      <h3>Please fill the below form to let us know</h3>
    </div>
      <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <div style={{width: "50%", margin: "auto"}}>
          <img style={{width: "100%"}} src="https://thereppro.com/wp-content/uploads/2022/04/post-contact-us.jpg" alt="" />
        </div>
        <div style={{width: "25%", margin: "auto", border: "1px solid gray", borderRadius: "20px", padding: "40px"}}>
          <input type="text" name='name' value={data.name} onChange={(e)=>handleChange(e)} placeholder='Enter your Name' /><br/><br/>
          <input type="email" name='email' value={data.email} onChange={(e)=>handleChange(e)} placeholder='Enter your Email' /><br/><br/>
          <input type="text" name='number' value={data.number} onChange={(e)=>handleChange(e)} placeholder='Enter your Number' /><br/><br/>
          <textarea name='text' value={data.text} onChange={(e)=>handleChange(e)} placeholder='Enter text...' style={{height: "70px", resize: "none"}} /><br/><br/>
          <button onClick={()=>handleClick()}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
