import React from "react";
import "../Header/style.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
function Topo() {
  return (
    <header>
      <div className="logo-and-links">
        <img src={logo} alt="Geladeira" />
        <hr />
        <nav>
          <Link class="my-link" to="/">
            Home
          </Link>
          <Link class="my-link" to="/Sabores">
            Sabores
          </Link>
          <Link class="my-link" to="/Sobre">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Topo;
