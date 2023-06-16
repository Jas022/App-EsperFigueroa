import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="secondary" sx={{ marginRight: 1 }}></Badge>
      <BsFillCartCheckFill />
    </div>
  );
};

export default CartWidget;
