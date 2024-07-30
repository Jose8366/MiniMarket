import React from "react";

export const ProductCard = ({ id, nombre, seccion, precio }) => {
  const productImageUrl = `/assets/productos/${id}.jpg`;

  return (
    <div className="col mt-5 animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={productImageUrl} className="card-img" alt={nombre} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title"> {nombre} </h5>
              <p> {precio} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
