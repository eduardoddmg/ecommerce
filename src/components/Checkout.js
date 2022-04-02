import { Form, Button, Table, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";


const Checkout = ({ arr, setArr, cart }) => {
  const [str, setStr] = useState("https://wa.me/5582996038479?text=")
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    return setShow(true);
  };
  return (
    <div
      style={{
        padding: "5vh 20%",
      }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lista de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Você tem certeza que deseja finalizar a sua compra?</h3>
          <h6 style={{color: 'red'}}>Quando você clicr no botao, seu carrinho esvaziará automaticamente</h6>
        </Modal.Body>
        {arr.length > 0 && (
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => setShow(false)}
            >
              Não
            </Button>
            <a href={str} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" onClick={() => {
                for (let i of arr) i.quantidade = 0;
                setArr([]);
                setShow(false);
              }
                }>
                Sim
              </Button>
            </a>
          </Modal.Footer>
        )}
      </Modal>
      {arr.length > 0 && (
        <div>
          <h2>Finalizar Compra</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                value={nome}
                onChange={(e) => setNome(() => e.target.value)}
                type="name"
                placeholder="Digite o seu nome..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                value={telefone}
                onChange={(e) => setTelefone(() => e.target.value)}
                type="tel"
                placeholder="Digite o seu telefone..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                value={endereco}
                onChange={(e) => setEndereco(() => e.target.value)}
                type="text"
                placeholder="Digite o seu endereço..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Forma de Pagamento</Form.Label>
              <Form.Control
                value={pagamento}
                onChange={(e) => setPagamento(() => e.target.value)}
                type="text"
                placeholder="Dinheiro, cartão ou PIX"
              />
            </Form.Group>
            <h2 style={{ padding: "2vh 0" }}>Seu carrinho de compras</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Item</th>
                    <th>QTD</th>
                  </tr>
                </thead>
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
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log({
                  nome: nome,
                  telefone: telefone,
                  endereco: endereco,
                  pagamento: pagamento,
                });
                setStr(() => str + "Nome: ");
                setStr(() => str + nome);
                setStr(() => str + "%0A");
                setStr(() => str + "Telefone: ");
                setStr(() => str + telefone);
                setStr(() => str + "%0A");
                setStr(() => str + "Forma de pagamento");
                setStr(() => str + pagamento);
                setStr(() => str + "%0A");
                for (let i of arr) {
                  setStr(() => str + "%0A");
                  setStr(() => str + i.quantidade);
                  setStr(() => str + " ");
                  setStr(() => str + i.nome);
                }
                setStr(() => str.replace(/ /gi, "+"));
                setNome(() => "");
                setTelefone(() => "");
                setEndereco(() => "");
                setPagamento(() => "");
                return setShow(true);
              }}
            >
              Finalizar Compra
            </Button>
          </Form>
        </div>
      )}
      {arr.length === 0 && (
        <h2 style={{ padding: "2vh 0" }}>Não há nada no seu carrinho</h2>
      )}
    </div>
  );
};

export default Checkout;
