import { productos } from "../data/productos";

export const getProductBySeccion = (seccion) => {
  const validSeccion = ["Aperitivos", "Bebidas", "Aseo"];

  if (!validSeccion.includes(seccion)) {
    throw new Error(`${seccion} no es una seccion valida`);
  }
  return productos.filter((producto) => producto.seccion === seccion);
};
