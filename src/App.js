import Navbar from "./components/Navbar";
import Bebidas from'./components/Bebidas';
import Tudo from'./components/Tudo';
import Sanduiche from'./components/Sanduiche';
import Checkout from'./components/Checkout';
import Principal from "./components/Principal";
import Error from './components/Error'
import './style/style.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Final from "./components/Final";

function App() {
  const [cart, setCart] = useState([]);
  const [cart2, setCart2] = useState([]);
  const [arr, setArr] = useState([]);
  const [red, setRed] = useState(false);
  useEffect(() => setArr(() => cart.filter((val) => val.quantidade > 0)));
  return (
    <>
      <Navbar cart={cart} arr={arr} setArr={setArr} />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path="*" element={<Error />} />
        <Route
          path="/cardapio"
          element={
            <Tudo cart={cart} setCart={setCart} arr={arr} setArr={setArr} />
          }
        />
        <Route
          path="/cardapio/sanduiche"
          element={
            <Sanduiche
              cart={cart}
              setCart={setCart}
              arr={arr}
              setArr={setArr}
            />
          }
        />
        <Route
          path="/cardapio/bebidas"
          element={
            <Bebidas cart={cart} setCart={setCart} arr={arr} setArr={setArr} />
          }
        />
        <Route path="/checkout" element={<Checkout arr={arr} cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
