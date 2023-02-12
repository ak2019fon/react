import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

function Meni({ cartNum, isHome, isShop }) {
  return (
    <div className={isHome === 1 ? "menu-bar" : "menu-else"}>
      <Link to="/" className="link-img">
        <img
          src="https://slatkoteka.rs/wp-content/uploads/2020/10/group-11.svg"
          alt="slika logo"
          className={isHome === 1 ? "img" : "img-else"}
        />
      </Link>

      <div
        className={
          isHome === 1 ? "menu-bar-items-div" : "menu-bar-items-div-else"
        }
      >
        <Link
          to="/prodavnica"
          className="menu-bar-items"
          style={
            isShop === 1
              ? { fontStyle: "italic" }
              : { textDecorationLine: "underline" }
          }
        >
          Krofne
        </Link>
      </div>
      {isShop === 1 ? (
        <Link to="/korpa" className="cart-items">
          <BsCartFill className="icon-cart" />
          <p className="cart-num">{cartNum}</p>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Meni;
