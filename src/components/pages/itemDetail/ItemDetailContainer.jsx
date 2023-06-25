import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../../../productsMock";
import { useParams } from "react-router-dom";
import Item from "../../Item/Item";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();
  useEffect(() => {
    getProductById(Number(itemId))
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);
  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );

  //   const [productSelected, setProductSelected] = useState({});
  //   let id = 2;

  //   useEffect(() => {
  //     let productFind = products.find((product) => product.id === id);

  //     const getProduct = new Promise((res, rej) => {
  //       res(productFind);
  //     });
  //     getProduct
  //       .then((res) => setProductSelected(res))
  //       .catch((err) => console.log(err));
  //   }, [id]);
  //   console.log(productSelected);

  //   return <ProductDetail productSelected={productSelected} />;
  // };
};
export default ItemDetailContainer;
