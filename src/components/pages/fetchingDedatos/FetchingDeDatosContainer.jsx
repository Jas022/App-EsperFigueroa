import { useEffect, useState } from "react";
import FetchingDeDatos from "./FetchingDeDatos";

const FetchingDeDatosContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const promiseData = fetch("https://jsonplaceholder.typicode.com/users");
    promiseData
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const createUser = () => {
    let data = {
      name: "pepito",
      userName: "perez",
      email: "pepito@gmail.com",
    };
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return <FetchingDeDatos users={users} createUser={createUser} />;
};

export default FetchingDeDatosContainer;
