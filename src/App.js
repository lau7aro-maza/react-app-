import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/Items/ItemListContainer"

function App(){

  return (
    <div>
    <NavBar/>
    <ItemListContainer/>
    </div>
  );
}

export default App;
