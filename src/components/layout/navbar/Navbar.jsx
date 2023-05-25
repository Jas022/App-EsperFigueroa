import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import CarWidget from "../../CarWidget/CarWidget";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar position="relative">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Artesanias Ste
          </Typography>
          <Button color="inherit">Artesanias</Button>
          <Button color="inherit">Artistica</Button>
          <Button color="inherit">Deco Hogar</Button>
          <Button color="inherit"> Sahumos</Button>
          <CarWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
