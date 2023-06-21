import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import CartWidget from "../../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Link to="/">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  className="logo"
                  src="https://res.cloudinary.com/dcp0gctln/image/upload/v1686023792/logoop_pwxj9t.png"
                  alt=""
                />
              </Typography>
            </Link>
            <div className="Categories">
              <NavLink
                to={`/category/Artesanias`}
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                <Button color="secondary">Artesanias</Button>
              </NavLink>
              <NavLink
                to={`/category/Artistica`}
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                <Button color="secondary">Artistica</Button>
              </NavLink>
              <NavLink
                to={`/category/DecoHogar`}
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                <Button color="secondary">DecoHogar</Button>
              </NavLink>
              <NavLink
                to={`/category/Sahumos`}
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
              >
                <Button color="secondary">Sahumos</Button>
              </NavLink>
            </div>
            <CartWidget />
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

export default Navbar;
