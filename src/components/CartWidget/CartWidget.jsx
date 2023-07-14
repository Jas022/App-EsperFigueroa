import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <div>
      <Link
        to="/carrito"
        className="CartWidget"
        // style={{ display: totalQuantity > 0 ? "block" : "none" }}
      >
        <Badge
          badgeContent={totalItems}
          showZero
          color="secondary"
          sx={{ marginRight: 1 }}
        ></Badge>
        <BsFillCartCheckFill />
      </Link>
    </div>
  );
};

export default CartWidget;
