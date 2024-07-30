import { productos } from "../data/productos";

export const getProductByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return productos.filter((product) =>
    product.nombre.toLocaleLowerCase().includes(name)
  );
};
