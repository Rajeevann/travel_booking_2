import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../src/pages/Home";
import Tours from "../../src/pages/Tours";
import TourDetails from "../../src/pages/TourDetails";
import Login from "../../src/pages/Login";
import Register from "../../src/pages/Register";
import SearchList from "../../src/pages/SearchResultList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tours/search" element={<SearchList />} />
    </Routes>
  );
};

export default Routers;
