import React from "react";
import "../style/final.css";
import { useState, useEffect } from "react";
import {Button, Modal, Table} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'

const Final = ({ arr, setArr, cart }) => {
  const [count, setCount] = useState(0);
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
          <Table striped bordered hover>
            {arr.length > 0 && (
              <thead>
                <tr>
                  <th>id</th>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Remover</th>
                </tr>
              </thead>
            )}
            {arr.length == 0 && <h6>Não há nada no seu carrinho</h6>}
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
            <Button variant="primary" onClick={() => {
              for (let i of arr) i.quantidade = 0;
              setArr([]);
            }}>
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
      ;
      {arr.length > 0 && (
        <div className="final">
          <button onClick={handleShow}>Itens selecionados {arr.length}</button>
        </div>
      )}
    </>
  );
};

export default Final;
