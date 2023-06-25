import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../../productsMock";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName);
  useEffect(() => {
    const asyncFunc = categoryName ? getProductsByCategory : getProducts;
    asyncFunc(categoryName)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryName]);

  // useEffect(() => {
  //   getProducts()
  //     .then((response) => {
  //       setProducts(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  //   const tarea = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, 1000);
  //   });
  //   tarea
  //     .then((respuesta) => setItems(respuesta))
  //     .catch((rechazo) => {
  //       console.log(rechazo);
  //     });
  // }, []);
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );

  // {
  //   /* </div><ItemListPresentacional items={items} />; */
  // }
};
export default ItemListContainer;
