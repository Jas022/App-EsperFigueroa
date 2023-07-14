import { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");

  //   const [lastName, setLastName] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();

    // if (!userData.lastName.includes("@")){
    //     console.log("el campo email no es valido")
    //     return
    // }

    if (userData.name.length < 3) {
      console.log("El nombre no puede ser menor a 3");
      return;
    }
    let data = {
      nombreUsuario: userData.name,
      apellidoUsuario: userData.lastName,
    };
    //mandarle info al back -
    console.log(data);
  };

  const handleName = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLastName = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleName}
        />
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="lastName"
          onChange={handleLastName}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
