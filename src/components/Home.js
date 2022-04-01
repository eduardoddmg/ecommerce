import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../style/bebidas.css';
import { Button } from "react-bootstrap";

const Home = () => {
  const [btn, setBtn] = useState("btn_geral_desativado");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "5vh 0",
      }}
      className="menu"
    >
      <Link to="/cardapio" style={{ color: "white" }}>
        <Button variant='primary'
          className="btn_geral"
          style={{ width: "20vh", margin: "2vh" }}
        >
          Tudo
        </Button>
      </Link>
      <Link to="/cardapio/sanduiche" style={{ color: "white" }}>
        <Button variant='primary'
          className="btn_geral"
          style={{ width: "20vh", margin: "2vh" }}
        >
          Sanduiche
        </Button>
      </Link>
      <Link to="/cardapio/bebidas" style={{ color: "white" }}>
        <Button variant='primary'
          className="btn_geral"
          style={{ width: "20vh", margin: "2vh" }}
        >
          Bebidas
        </Button>
      </Link>
    </div>
  );
};

export default Home;
