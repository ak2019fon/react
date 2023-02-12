import React from "react";
import Proizvod from "./Proizvod";
//prosledjivanje funkcije na gore
function Prodavnica({ krofne, onAdd, onRemove }) {
  return (
    <div className="all-products">
      {krofne.map((prod) => (
        <Proizvod
          product={prod}
          key={prod.id}
          onAdd={onAdd}
          onRemove={onRemove}
          inCart={0}
        />
      ))}
    </div>
  );
}

export default Prodavnica;
