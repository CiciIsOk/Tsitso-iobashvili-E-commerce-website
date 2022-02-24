import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Products from "../Products/Products";
import Tech from "../Products/Tech";
import Clothes from "../Products/Clothes";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Item from "../Item/Item";

export class Navbar extends Component {
  render() {
    return (
      <main className="navbar">
        <Router>
          <ul className="clothing-type">
            <li>
              <Link to="/" className="nav-link nav-link-fade-up">
                All
              </Link>
            </li>
            <li>
              <Link to="/tech" className="nav-link nav-link-fade-up">
                Tech
              </Link>
            </li>
            <li>
              <Link to="/clothes" className="nav-link nav-link-fade-up">
                Clothes
              </Link>
            </li>
          </ul>

          <ul className="curency-cart">
            <li className="icons">
              <button>
                <AiOutlineShoppingCart />
              </button>
            </li>
            <li className="icons">
              <button className="currency">$</button>
            </li>
          </ul>

          <Routes>
            <Route exact path="/" element={<Products />}></Route>
            <Route exact path="/tech" element={<Tech />}></Route>
            <Route exact path="/clothes" element={<Clothes />}></Route>
            <Route exact path="/item/:id" element={<Item />}></Route>
          </Routes>
        </Router>
      </main>
    );
  }
}

export default Navbar;
