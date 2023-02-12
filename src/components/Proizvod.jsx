import React from "react";
import { BsPatchPlus, BsPatchMinus } from "react-icons/bs";

function Proizvod({ product, onAdd, inCart, onRemove }) {
  return (
    <div className="card" style={{ margin: 15 }}>
      <img src={product.url} alt="image" className="img-krofne" />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-price"> {product.price} RSD</p>
      </div>
      {/*ako je vrednost incart promenljive 0 onda se ovo dole nece izvrsiti*/}
      {inCart === 0 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            <BsPatchPlus style={{ width: 25 + "px", height: 25 + "px" }} />
          </button>
          <button
            className="btn"
            onClick={() => onRemove(product.title, product.id)}
          >
            <BsPatchMinus style={{ width: 25 + "px", height: 25 + "px" }} />
          </button>
        </>
        //else
      ) : (
        <>
          <h3>Kolicina: {product.amount}</h3>

          <button
            className="btn"
            onClick={() => onRemove(product.title, product.id)}
            style={{ color: "red", fontWeight: "bold" }}
          >
            Ukloni proizvod
          </button>
        </>
      )}
    </div>
  );
}

export default Proizvod;
