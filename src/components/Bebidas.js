import { useState, useEffect } from "react";
import data from "../data.json";
import Final from "./Final";
import Home from "./Home";

import '../style/bebidas.css'

const Produtos = ({ cart, setCart, arr, setArr }) => {
  const [fileData, setFileData] = useState(data);
  useEffect(() => {
    setCart(() => data);
  }, []);
  return (
    <>
    <section style={{display: 'flex'}} className='geral'>
      <Home />
      <div style={{ display: "flex", justifyContent: "center" }} className='central'>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "auto",
            justifyContent: "center",
          }}
        >
          {data.filter((val) => val.tipo === 'bebida').map((value) => {
            return (
              <center
                style={{
                  margin: "2vh 2vh",
                  padding: "2vh",
                }}
                className="card"
                key={value.id}
              >
                <h4>{value.nome}</h4>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "2vh",
                    margin: "1vh 0 0 0",
                    backgroundColor: "white",
                  }}
                  onClick={() => {
                    console.log(`id do item clicado: ${value.id}`);
                    for (let i of cart) if (i.id === value.id) i.quantidade++;
                    setArr(() => cart.filter((val) => val.quantidade > 0));
                    console.log(arr);
                  }}
                >
                  <img
                    src={value.img}
                    alt=""
                    style={{
                      width: "80%",
                    }}
                  />
                </button>
              </center>
            );
          })}
        </div>
      </div>
    </section>
    <Final arr={arr} setArr={setArr} cart={cart} />
    </>
  );
};

export default Produtos;
