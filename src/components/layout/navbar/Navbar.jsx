// import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import CartWidget from "../../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">
        <h3>Ecommerce</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={"/category/Artesanias"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          {" "}
          Artesanias
        </NavLink>
        <NavLink
          to={"/category/Artistica"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Artistica
        </NavLink>
        <NavLink
          to={"/category/DecoHogar"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          DecoHogar
        </NavLink>
        <NavLink
          to={"/category/Sahumos"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Sahumos
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
