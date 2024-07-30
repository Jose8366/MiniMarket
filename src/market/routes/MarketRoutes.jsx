import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import {
  TodoPage,
  BebidasPage,
  AseoPage,
  AperitivosPages,
  SearchPage,
  ProductoPage,
} from "../../market";

export const MarketRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="todo" element={<TodoPage />} />
          <Route path="bebidas" element={<BebidasPage />} />
          <Route path="aseo" element={<AseoPage />} />
          <Route path="aperitivos" element={<AperitivosPages />} />
          <Route path="buscar" element={<SearchPage />} />
          <Route path="producto" element={<ProductoPage />} />

          <Route path="/" element={<Navigate to="/todo" />} />
        </Routes>
      </div>
    </>
  );
};
