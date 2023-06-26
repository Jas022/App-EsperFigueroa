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

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
