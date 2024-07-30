import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getProductByName } from "../helpers/getProductByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Usa location.search para obtener la cadena de consulta
  const { q = "" } = queryString.parse(location.search);

  const productos = getProductByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && productos.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1> Buscar </h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="busca un producto"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-4">
              Buscar producto
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Resultados </h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Busca un producto
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No se encontraron resultados sobre <b> {q} </b>
          </div>

          {productos.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};
