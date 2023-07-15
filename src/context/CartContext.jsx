import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addItem = (item, quantity) => {
    if (isInCart(item.itemId)) {
      setCart(
        cart.map((product) => {
          return product.itemId === item.itemId
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  //     setCart(newArray);
  //     localStorage.setItem("cart", JSON.stringify(newArray));
  //   } else {
  //     setCart([...cart, newProduct]);
  //     localStorage.setItem("cart", JSON.stringify([...cart, newProduct]));
  //   }
  // };

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const removeItem = (id) =>
    setCart(cart.filter((product) => product.itemId !== id));

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
