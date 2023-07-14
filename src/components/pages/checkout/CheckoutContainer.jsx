import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice;

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
      addDoc(ordersCollection, order);
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
    <Checkout
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
