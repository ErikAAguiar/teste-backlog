import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

// Import do CSS e ícones
import './style.css';

export default function Home(props) {
    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchData = () => {
            axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    _limit: 10
                }
            }).then(response => {
                setData(response.data)
            })
        }

        fetchData()
    }, []);

    function clickImagePerfil(thumbnailUrl){
        localStorage.setItem('imgPerfil', thumbnailUrl)

        window.location.reload(false); 
    }

    const nome =  localStorage.getItem('nomeUser');
    console.log(nome);

    return (
        <Container className="cont">
            <div className="us">
                <img className="img-perfil" src={localStorage.getItem('imgPerfil')}></img><br></br>
                <span className="msg">Bem Vindo(a) {nome}</span>
            </div>
            <div className="div-img-home">
                {data.map(img => (
                    <img onClick={() => clickImagePerfil(img.thumbnailUrl)} className='img-home' src={img.thumbnailUrl}></img>
                ))}
            </div>
        </Container>
    )
}