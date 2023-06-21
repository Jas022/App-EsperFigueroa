import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
<Button variant="contained">Contained</Button>;
const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={elemento.img}
        name={elemento.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {elemento.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
