import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { RotateLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const objetoLoader = {
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "50px",
};

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { addItem, getTotalQuantityById } = useContext(CartContext);
  const { itemId } = useParams();
  const cantidad = getTotalQuantityById(itemId);
  // console.log("la cantidad es:", cantidad);
  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, itemId);
    getDoc(refDoc).then((res) => {
      setProduct({ ...res.data(), itemId: res.id });
    });
  }, [itemId]);

  const onAdd = (cantidad) => {
    addItem(product, cantidad);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado exitosamente",
      showConfirmButton: true,
      timer: 1500,
    });
  };
  return (
    <div className="ItemDetailContainer">
      {product.price ? (
        <ItemDetail
          cantidad={cantidad}
          {...product}
          addItem={addItem}
          onAdd={onAdd}
        />
      ) : (
        <h1>
          <RotateLoader cssOverride={objetoLoader} color="#9575CD" />
        </h1>
      )}
    </div>
  );
};
export default ItemDetailContainer;
