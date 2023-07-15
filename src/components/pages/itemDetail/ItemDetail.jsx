import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ItemCount from "../../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({
  name,
  img,
  category,
  description,
  price,
  stock,
  cantidad,
  onAdd,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  return (
    <article className="CardItem">
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={img}
          title={name}
          component="div"
        />

        <CardContent>
          <header className="Header">
            <h2 className="ItemHeader">{name}</h2>
          </header>
          <section>
            <Typography gutterBottom variant="h5" component="div">
              <p className="Info">Categoria:{category}</p>
              <p className="Info">Descripcion:{description}</p>
              <p className="Info">Precio:{price}</p>
            </Typography>
          </section>
          <footer className="ItemFooter">
            {quantityAdded > 0 ? (
              <Link to="/carrito" className="Option">
                <Button variant="contained">Terminar Compra</Button>
              </Link>
            ) : (
              <ItemCount stock={stock} initial={cantidad} onAdd={onAdd} />
            )}
          </footer>
        </CardContent>
      </Card>
    </article>
  );
};

export default ItemDetail;
