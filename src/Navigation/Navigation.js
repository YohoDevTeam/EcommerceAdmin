import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Business,
  Contacts,
  Expenses,
  Onboarding,
  Overview,
  Projects,
  Reports,
  Sales,
  Transactions,
  Authentication,
  SignIn,
  SignUp,
  Carousel,
  ProductList,
  Invoices,
  Orders,
  Category,
  OrderProductDetail,
  OrderDetail,
  Users,
} from "../pages";
import { useAuthContext } from "../context/AuthContext/AuthContext";
const Navigation = () => {
  const { dbUser } = useAuthContext();
  console.log("ISLogin : ", dbUser);
  return (
    <Routes>
      {dbUser ? (
        <>
          <Route path="/" element={<Overview />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Expenses" element={<Expenses />} />
          <Route path="/Onboarding" element={<Onboarding />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Invoices" element={<Invoices />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/OrderProductDetail" element={<OrderProductDetail />} />
          <Route path="/OrderDetail" element={<OrderDetail />} />
        </>
      ) : (
        <Route path="/" element={<SignIn />} />
      )}
    </Routes>
  );
};

export default Navigation;
