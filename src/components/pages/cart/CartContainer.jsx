import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "../cart/Cart";

const CartContainer = () => {
  const { cart, clearCart, removeItem, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      <Cart
        total={total}
        limpiar={limpiar}
        cart={cart}
        removeItem={removeItem}
      />
    </div>
  );
};

export default CartContainer;
