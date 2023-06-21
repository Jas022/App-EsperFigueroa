import { Link } from "react-router-dom";
import "./Item.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <Card sx={{ width: 345 }}>
        <CardMedia sx={{ height: 140 }} image={img} name={name} />
        <CardContent>
          <header className="Header">
            <h2 className="ItemHeader">{name}</h2>
          </header>
          <section>
            <Typography gutterBottom variant="h5" component="div">
              <p className="Info">Precio:$ {price}</p>
              <p className="Info">Stock disponible: {stock}</p>
            </Typography>
          </section>

          <footer className="ItemFooter">
            <Typography variant="body2" color="text.secondary">
              <Link to={`/item/${id}`} className="Option">
                <Button variant="contained">Ver detalle</Button>
              </Link>
            </Typography>
          </footer>
        </CardContent>
      </Card>
    </article>
  );
};

export default Item;
