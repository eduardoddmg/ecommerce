import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router'
import {Modal, Button, Table} from "react-bootstrap";

import "../style/navbar.css";

const Navbar = ({ cart, setArr, arr }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    return setShow(true);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lista de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {arr.length == 0 && <h6>Não há nada no seu carrinho</h6>}
          <Table striped bordered hover>
            {arr.length > 0 && (
              <thead>
                <tr>
                  <th>id</th>
                  <th>Produto</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
            )}
            <tbody>
              {arr.map((val) => {
                return (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.nome}</td>
                    <td>{val.quantidade}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          for (let i of cart) {
                            if (i.id === val.id && i.quantidade > 0)
                              i.quantidade--;
                          }
                          setArr(() =>
                            cart.filter((val) => val.quantidade > 0)
                          );
                          console.log(cart);
                          console.log(arr);
                        }}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        {arr.length > 0 && (
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                for (let i of arr) i.quantidade = 0;
                setArr([]);
              }}
            >
              Esvaziar
            </Button>
            <Link to="/checkout">
              <Button variant="primary" onClick={handleClose}>
                Comprar
              </Button>
            </Link>
          </Modal.Footer>
        )}
      </Modal>
      <center>
        <nav className="navbar">
          <div>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <h2>ComaBem</h2>
            </Link>
          </div>
          <div style={{ display: "flex" }}>
            <button
              style={{
                padding: "1vh",
                border: "none",
                backgroundColor: "rgb(64, 143, 233)",
                color: "white",
                fontWeight: "bold",
                fontSize: "25px",
                margin: "0 0 0 3vh",
                cursor: "pointer",
              }}
              onClick={handleShow}
            >
              <FiShoppingCart />
            </button>
          </div>
        </nav>
      </center>
    </>
  );
};

export default Navbar;
