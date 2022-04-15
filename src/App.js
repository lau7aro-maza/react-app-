import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/Items/ItemListContainer"
import ItemDetailContainer from "./components/Items/ItemDetailContainer";



export default function App(){

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
    </>
  );
}

