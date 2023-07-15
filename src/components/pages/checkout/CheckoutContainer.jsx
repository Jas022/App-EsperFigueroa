import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const { orderId, setOrderId } = useState(null);

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name es requerido")
        .min(3, "este campo debe contener al menos 3 caracteres"),
      email: Yup.string()
        .email("No es un email valido")
        .required("Email es requerido"),
      phone: Yup.string()
        .required("Phone es requerido")
        .min(10, "El telefono no cumple los requisitos"),
    }),
  });

  return (
    <div>
      {orderId ? (
        <h1>Su compra fue exitosa, el numero de comprobante es: {orderId}</h1>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default CheckoutContainer;
