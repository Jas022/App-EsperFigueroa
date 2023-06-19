import ItemCount from "./components/ItemCount/ItemCount";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import FetchingDeDatosContainer from "./components/pages/fetchingDedatos/FetchingDeDatosContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <ItemDetailContainer /> */}
        {/* <ItemListContainer />
        <ItemDetailContainer /> */}
        {/* <FetchingDeDatosContainer /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:category:Id"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
      /> */}
    </div>
  );
};

export default App;
