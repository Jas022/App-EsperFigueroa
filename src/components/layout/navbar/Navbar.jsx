import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import CartWidget from "../../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar position="relative">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 10 }}>
            <img
              src="https://res.cloudinary.com/dcp0gctln/image/upload/v1686023792/logoop_pwxj9t.png"
              alt=""
            />
          </Typography>
          <Box>
            <NavLink
              to={`/category/Artesanias`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
              color="inherit"
              variant="h6"
              sx={{
                marginRight: 10,
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              Artesanias
            </NavLink>
            <NavLink
              to={`/category/Artistica`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
              color="inherit"
              sx={{
                marginRight: 10,
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              Artistica
            </NavLink>
            <NavLink
              to={`/category/DecoHogar`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
              color="inherit"
              sx={{
                marginRight: 10,
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              DecoHogar
            </NavLink>
            <NavLink
              to={`/category/Sahumos`}
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
              color="inherit"
              sx={{
                marginRight: 10,
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              {" "}
              Sahumos
            </NavLink>
          </Box>
          <CartWidget sx={{ marginRight: 10 }} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
