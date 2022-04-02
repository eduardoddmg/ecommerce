import React from "react";
import { Link } from "react-router-dom";
import '../style/style.css'
import { Button } from "react-bootstrap";


const Principal = () => {
  return (
    <div style={{height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 3vh'}}>
        <h3>O melhor lugar para você comer é aqui</h3>
      <Link to="/cardapio" style={{width: '30%', textAlign: 'center'}}>
        <Button variant='primary'>Cardápio</Button>
      </Link>
    </div>
  );
};

export default Principal;
