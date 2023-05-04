import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  console.log(items, "itmesss");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <span className="logo">Shoping Store</span>
      <div>
        <Link className="navLink" to="/">
          HOME
        </Link>
        <Link className="navLink" to="/cart">
          CART 
        </Link>
        <span className="cartCount">SHOP ITEMS :{items.length} </span>
      </div>
    </div>
  );
};

export default Navbar;
