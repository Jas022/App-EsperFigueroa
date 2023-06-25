import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import ItemCount from "../../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
            ></ItemCount>
          </footer>
        </CardContent>
      </Card>
    </article>
  );
};

// const ItemDetail = ({ productSelected }) => {
//   return (
//     <div>
//       <h2>{productSelected.name}</h2>
//       <img src={productSelected.img} alt="" />
//     </div>
//   );
// };

export default ItemDetail;
