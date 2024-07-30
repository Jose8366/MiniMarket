import React from "react";
import { Route, Routes } from "react-router-dom";
import { MarketRoutes } from "../market";
import { LoginPages } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPages />} />

        <Route path="/*" element={<MarketRoutes />} />
      </Routes>
    </>
  );
};
