import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, limpiar, removeItem, total }) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-item">
                <img src={product.img} alt="" />
                <div className="cart-item-info">
                  <h2>{product.name}</h2>
                  <h2>${product.price}.-</h2>
                  <h2>Unidades: {product.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  onClick={() => removeItem(product.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Descripcion del carrito:</h2>
          <h3>Cantidad de productos: </h3>
          <h3>Precio total: {total}</h3>
          <h3>Descuento: </h3>
          <h3>Precio final: </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={limpiar} variant="contained">
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="contained">Finalizar compra</Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}

          <h1>El total del carrito es ${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
