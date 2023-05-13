import React from "react";
import Card from "../Cards/Card";
import "../../stylesheet/CardList.css";

const db = [
  {
    titulo: "DE NUESTRA COCINA A TU CASA",
    descripcion:
      "Trabajamos con la mejor materia prima del mercado. El equipo de los mejores Chefs combinan sabores cada plato.",
  },
  {
    titulo: "LA MATERIA PRIMA",
    descripcion:
      "Los principales ingredientes son harina de trigo, huevos, agua y sal. Y el condimento por excelencia es el compromiso.",
  },
  {
    titulo: "PEDIDOS POR ENCARGOS",
    descripcion:
      "El Tano pastas es una garantia a la hora de la entrega. Confirmando que las pastas lleguen frescas a cada hogar.",
  },
  {
    titulo: "MENU DEL DIA",
    descripcion:
      "Se consideran las preferencias y sugerencias de los clientes para crear un menú que satisfaga sus gustos y necesidades.",
  },
];

const CardList = () => (
  <section className="flex flex-wrap justify-center h-auto sm:h-72 ">
    {db.map((destino) => (
      <Card destino={destino} />
    ))}
  </section>
);

export default CardList;
