import { Button } from "@mui/material";
import "./ItemCount.css";
import { useCount } from "../hooks/useCount";
export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <div className="count--container">
      <Button disabled={stock < 1 ? true : false} variant="contained">
        <div className="Button" onClick={decrement}>
          -
        </div>

        <h2 className="number">{count}</h2>

        <div className="Button" onClick={increment}>
          +
        </div>
      </Button>
      <div className="Button-agregar">
        <Button
          variant="contained"
          className="Button"
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
  // const [quantity, setQuantity] = useCount(initial, stock);

  // const increment = () => {
  //   if (quantity < stock) {
  //     setQuantity(quantity + 1);
  //   }
  // };
  // const decrement = () => {
  //   if (quantity <= stock) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  // // console.log(quantity);
  // return (
  //   <div className="Counter">
  //     <div className="Controls">
  //       <Button variant="contained">
  //         <div className="Button" onClick={decrement}>
  //           -
  //         </div>
  //         <h4 className="Number">{quantity}</h4>
  //         <div className="Button" onClick={increment}>
  //           +
  //         </div>
  // </Button>
  // </div>
  //     <div className="Button-agregar">
  //       <Button
  //         variant="contained"
  //         className="Button"
  //         onClick={() => onAdd(quantity)}
  //       >
  //         Agregar al carrito
  //       </Button>
  //     </div>
  //   </div>
  // // );
  // )
};

export default ItemCount;
