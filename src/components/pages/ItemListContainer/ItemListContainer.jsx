import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { RotateLoader } from "react-spinners";
import "./ItemListContainer.css";

import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
// import {
//   getProducts,
//   getProductsByCategory,
//   products,
// } from "../../../productsMock";
db;
const objetoLoader = {
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  marginTop: "50px",
};

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let consulta;
    if (categoryName) {
      consulta = query(itemsCollection, where("category", "==", categoryName));
    } else {
      consulta = itemsCollection;
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);
  if (products.length === 0) {
    return (
      <h1>
        <RotateLoader cssOverride={objetoLoader} color="#9575CD" />
      </h1>
    );
  }
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
