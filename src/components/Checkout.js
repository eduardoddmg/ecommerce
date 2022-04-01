import { Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";

const Checkout = ({ arr, cart }) => {
  let str = 'https://wa.me/5582991929436?text=';
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");
  return (
    <div
      style={{
        padding: "5vh 20%"
      }}
    >
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
                  <th>Produto</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((val) => {
                  return (
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.nome}</td>
                      <td>{val.quantidade}</td>
                      <td>
                        <Button variant="primary" onClick={() => {
                          for (let i of cart) 
                          {
                            if (i.id === val.id && i.quantidade > 0) i.quantidade--; 
                          }
                          console.log(cart);
                          console.log(arr);
                        }}>Remover</Button>
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
                str += 'Nome: '+nome+'%0A'+'Telefone: '+telefone+'%0A'+'Endereço: '+endereco+'%0A'+'Forma de Pagamento: '+pagamento+'%0A'
                for (let i of arr)
                {
                  str+='%0A';
                  str+=i.quantidade;
                  str+=' ';
                  str+=i.nome;
                }
                str = str.replace(/ /gi, '+');
                console.log(str);
                setNome(() => '');
                setTelefone(() => '');
                setEndereco(() => '');
                setPagamento(() => '');
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
