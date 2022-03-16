import { useState } from "react";
import "../style/navbar.scss";


const Navbar = () => {
  const [open, setOpen] = useState("")


  return (
    <header className="header">

      <a href="#" className="logo">
        <i className="fas fa-shopping-basket"></i> Fruit
      </a>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#features">features</a>
        <a href="#products">products</a>
        <a href="#categories">categories</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
      </nav>

      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <div className="fas fa-search" id="search-btn" onClick={()=>setOpen(pre=>pre==="search"?"":"search")}></div>
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-user" id="login-btn"></div>
      </div>

      <form className={open==="search"?"search-form active":"search-form"}>
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </form>

    </header>
  );
};

export default Navbar;
