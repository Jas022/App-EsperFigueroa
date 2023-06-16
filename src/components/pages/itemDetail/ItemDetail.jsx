const ItemDetail = ({ productSelected }) => {
  return (
    <div>
      <h2>{productSelected.name}</h2>
      <img src={productSelected.img} alt="" />
    </div>
  );
};

export default ItemDetail;
