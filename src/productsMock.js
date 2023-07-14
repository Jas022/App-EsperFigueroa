export const products = [
  {
    id: 1,

    name: "Maceta Ceramica",

    price: 700,

    stock: 10,

    description: "Maceta Blanca detalle de flores, ceramica blanca",

    category: "Artesanias",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1686716139/maceta6_xbjx1n.jpg",
  },

  {
    id: 2,

    name: "Sahumerios Jazmin",

    price: 500,

    stock: 10,

    description: "Sahumerios perfume Jazmin",

    category: "Sahumos",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1686716546/sahumerios4_bfbooa.jpg",
  },

  {
    id: 3,

    name: "Sahumerios Rosas",

    price: 500,

    stock: 10,

    description: "Sahumerios perfume Rosas",

    category: "Sahumos",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1686716618/sahumerios1_wojuua.jpg",
  },

  {
    id: 4,

    name: "Perlas Primavera",

    price: 700,

    stock: 10,

    description: "Perlas perfumadas olor primavera",

    category: "Sahumos",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1686717698/perlas1_ck7pjt.jpg",
  },
  {
    id: 5,

    name: "Perlas Lavanda",

    price: 700,

    stock: 10,

    description: "Perlas perfumadas olor Lavanda",

    category: "Sahumos",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1686716744/perlas5_qc1u6y.jpg",
  },
  {
    id: 6,

    name: "Maceta blanca con pie",

    price: 900,

    stock: 10,

    description: "Maceta blancablanca con pie",

    category: "Artesanias",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1686717723/maceta7_lbvav4.jpg",
  },
  {
    id: 7,

    name: "Maceta Verde",

    price: 900,

    stock: 10,

    description: "Maceta detalles verde",

    category: "Artesanias",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1686716854/maceta5_gszbm9.jpg",
  },
  {
    id: 8,

    name: "Reloj negro",

    price: 3000,

    stock: 10,

    description: "Reloj negro con detalles dorados",

    category: "Deco Hogar",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1686716932/decohogar10_rxpt3c.jpg",
  },
  {
    id: 9,

    name: "Florero Blanco",

    price: 2500,

    stock: 10,

    description: "Florero blanco con forma",

    category: "Deco Hogar",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1686716984/decohogar3_eyemos.jpg",
  },
  {
    id: 10,

    name: "Pinceles",

    price: 1000,

    stock: 100,

    description: "Pinceles distintos tamaños y formas",

    category: "Artistica",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1689136275/Pinceles_swqjnx.jpg",
  },
  {
    id: 11,

    name: "Pintura Chalk",

    price: 1500,

    stock: 40,

    description: "Pinturas Chalk multisuperficies, varios colores",

    category: "Artistica",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1689136225/Chalk_ynhlyu.jpg",
  },
  {
    id: 12,

    name: "Lienzos",

    price: 2000,

    stock: 30,

    description: "Lienzos distintos tamaños",

    category: "Artistica",

    img: "https://res.cloudinary.com/dcp0gctln/image/upload/v1689136156/lienzos_rjxeec.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
