import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Users } from "../App";
import { UserDetail } from "../components/UserDetail";

export const MenuRoutes = () => {
  return (
    <div>
      {" "}
      {/* <Routes>
        <Route path="/" element={<Navigate replace to="/" />} />
        <Route path="/welcome" element={<h1>Welcome</h1>}>
          <Route path="user" element={<p>Welcome, new user!</p>} />
        </Route>
        <Route path="/products" element={<h1>product</h1>} />
        <Route path="/products/:productId" element={<h1>Product ID</h1>} />
      </Routes> */}
    </div>
  );
};
