import Form from "../components/pages/Form/Form";
import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "item",
    path: "/item/:itemId",
    Element: ItemDetailContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
