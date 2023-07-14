import { createContext, useState } from "react";

export const CartContext = createContext("cart", []);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addItem = (newProduct) => {
    let exist = isInCart(newProduct.id);

    if (exist) {
      let cartUpdated = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newProduct.quantity,
          };
        } else {
          return product;
        }
      });
      setCart(cartUpdated);
      localStorage.setItem("cart", JSON.stringify(cartUpdated));
    } else {
      setCart([...cart, newProduct]);
      localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
    }
  };

  const isInCart = (itemId) => {
    let exist = cart.some((prod) => prod.id === +itemId);
    return exist;
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
    localStorage.setItem("cart", JSON.stringify(cartUpdated));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
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
