import React from 'react'

const About = () => {
  return (
    <div>
       <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", paddingTop: "40px"}}>
        <div style={{width: "45%", textAlign: "center"}}>
          <h1>About the project</h1>
          <p style={{fontSize: "17px"}}>This project is the assignment for Ambula app, which is made by Sanghamitra satpathy using following teckstacks HTML, CSS, JavaScript, React.js and Redux. User can add any task to the To-do app inside this project. The user can mark the tasks pending or completed according to the usage. Tasks can also be removed if not required. To-do app will show how many tasks are there in total, how many are completed and how many tasks are pending. User can also do shopping inside the project by going to the Shopping app. By clicking on Add to cart, one can add the products to the cart and also remove products from cart in the cart page by clicking on remove button. Cart page will show the total number of items added in the cart and the total value.</p>
        </div>
        <div>
          <img src="https://ambula.app/assets/images/Icon.png" alt="img" />
        </div>
       </div>
    </div>
  )
}

export default About
