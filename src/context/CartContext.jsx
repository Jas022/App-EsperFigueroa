import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  console.log(cart);
  const addItem = (newProduct) => {
    let exist = isInCart(newProduct.id);

    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newProduct.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, newProduct]);
      localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
    }
  };

  const isInCart = (itemId) => {
    let exist = cart.some((prod) => prod.id === +itemId);
    return exist;
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const removeItem = (itemId) => {
    let newArray = cart.filter((product) => product.id !== itemId);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const getTotalQuantityById = (itemId) => {
    let producto = cart.find((prod) => prod.id === itemId);
    return producto?.quantity;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalQuantityById,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
