import { useEffect, useState } from "react";
import "../style/navbar.scss";


const Navbar = () => {
  const [open, setOpen] = useState("")

  useEffect(() => {
    window.addEventListener('scroll', ()=>{setOpen("")});

    return () => window.removeEventListener('scroll')
  }, [])


  return (
    <header className="header">

      <a href="#" className="logo">
        <i className="fas fa-shopping-basket"></i> Fruit
      </a>

      <nav className={open==="menu"?"navbar active":"navbar"}>
        <a href="#home">home</a>
        <a href="#features">Features</a>
        <a href="#products">Products</a>
        <a href="#categories">Categories</a>
        <a href="#review">Review</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <div className="icons">
        <div className="fas fa-bars" id="menu-btn" onClick={()=>setOpen(pre=>pre==="menu"?"":"menu")}></div>
        <div className="fas fa-search" id="search-btn" onClick={()=>setOpen(pre=>pre==="search"?"":"search")}></div>
        <div className="fas fa-shopping-cart" id="cart-btn" onClick={()=>setOpen(pre=>pre==="cart"?"":"cart")}></div>
        <div className="fas fa-user" id="login-btn" onClick={()=>setOpen(pre=>pre==="login"?"":"login")}></div>
      </div>

      <form className={open==="search"?"search-form active":"search-form"}>
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </form>

      <div className={open==="cart"?"shopping-cart active":"shopping-cart"}>

        <div className="box">
          <i className="fas fa-trash"></i>
          <img src="image/cart-img-1.png" alt="cart" />
          <div className="content">
            <h3>watermelon</h3>
            <span className="price">$4.50/-</span>
            <span className="quantity">qty : 1</span>
          </div>
        </div>

        <div className="box">
          <i className="fas fa-trash"></i>
          <img src="image/cart-img-2.png" alt="cart" />
          <div className="content">
            <h3>onion</h3>
            <span className="price">$4.50/-</span>
            <span className="quantity">qty : 1</span>
          </div>
        </div>

        <div className="box">
          <i className="fas fa-trash"></i>
          <img src="image/cart-img-3.png" alt="cart" />
          <div className="content">
            <h3>chicken</h3>
            <span className="price">$4.50/-</span>
            <span className="quantity">qty : 1</span>
          </div>
        </div>

        <div className="total">total : $14.5/-</div>
        <a href="#" className="btn">chekout</a>

      </div>

      <form className= {open==="login"?"login-form active":"login-form"}>
        <h3>login now</h3>
        <input type="email" className="box" placeholder="your email" />
        <input type="password" className="box" placeholder="your password" />
        <p>forgot your password <a href="#">click here</a></p>
        <p>don't have an account <a href="#">create now</a></p>
        <input type="submit" value="login now" className="btn" />
      </form>

    </header>
  );
};

export default Navbar;
