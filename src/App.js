import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/Items/ItemListContainer"
import ItemDetailContainer from "./components/Items/ItemDetailContainer";

function App(){

  return (
    <div>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
