import { Button } from "@mui/material";
import "./ItemCount.css";
import { useCount } from "../hooks/useCount";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  const [isAdd, setIsAdd] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="count--container">
      {!isAdd && (
        <>
          <Button disabled={stock < 1 ? true : false} variant="contained">
            <div className="Button" onClick={decrement}>
              -
            </div>

            <h2 className="number">{count}</h2>

            <div className="Button" onClick={increment}>
              +
            </div>
          </Button>
        </>
      )}
      {isAdd ? (
        <Button
          variant="contained"
          onClick={() => {
            navigate("/carrito");
          }}
        >
          Ir al Carrito
        </Button>
      ) : (
        <div className="Button-agregar">
          <Button
            variant="contained"
            className="Button"
            onClick={() => {
              onAdd(count);
              setIsAdd(true);
            }}
          >
            Agregar al carrito
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
