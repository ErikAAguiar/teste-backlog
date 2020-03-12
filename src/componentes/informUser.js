import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Imports do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Import do CSS e ícones
import './style.css';

function InformUser() {
    const [usuario, setUsuario] = useState()

    function nome(usuario){
        localStorage.setItem('nomeUser', usuario);
    }

    return (
        <Container id="container-informUser">
            <Form>
                <Form.Group>
                    <Form.Control className="campo"  type="text" onChange={e => setUsuario(e.target.value)} placeholder="Informe Seu nome de Usuário!" />
                </Form.Group>
                <Link to={{ pathname: `/home/` }} style={{ color: 'white' }}><Button onClick={() =>nome(usuario)} className="btn">Enviar</Button></Link>

            </Form>
        </Container >
    )
}

export default InformUser;