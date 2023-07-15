import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="cards-container">
      {products.map((products) => {
        return <Item key={products.id} {...products} />;
      })}
    </div>
  );
};

export default ItemList;
