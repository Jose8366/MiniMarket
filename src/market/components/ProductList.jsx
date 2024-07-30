import React from "react";
import { getProductBySeccion } from "../helpers";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ seccion }) => {
  const productos = getProductBySeccion(seccion);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 p-3">
      {productos.map((producto) => (
        <>
          <ProductCard key={producto.id} {...producto} />
        </>
      ))}
    </div>
  );
};
