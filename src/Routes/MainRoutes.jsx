import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTask from "../Pages/AddTask";
import Homepage from "../Pages/Homepage";
import Taskpage from "../Pages/TaskPage";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/task" element={<Taskpage />} />
      <Route path="/task/add" element={<AddTask />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;