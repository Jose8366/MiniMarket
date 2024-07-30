import React from "react";
import { productos } from "../data/productos";

export const TodoPage = () => {
  return (
    <>
      <h1 className="p-2"> Todos Los Productos </h1>
      <hr />
      <div className="row rows-cols-1 row-cols-md-3 g-3 p-3 animate__animated animate__fadeIn">
        {productos.map((producto) => (
          <>
            <div className="col">
              <div className="card">
                <div className="row no-gutters">
                  <div className="col-4">
                    <img
                      src={`/assets/productos/${producto.id}.jpg`}
                      className="card-img"
                      alt={producto.nombre}
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title"> {producto.nombre} </h5>
                      <p> {producto.precio} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
