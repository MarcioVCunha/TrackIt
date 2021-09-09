import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

export default function Inputs() {
    function EnviarPost() {
        const objectPost = {
            email: email,
            name: nome,
            image: foto,
            password: senha
        }

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', objectPost).then(TratarSucesso).catch(TratarErro);
    }

    function TratarSucesso(resp) {
        
    }

    function TratarErro(resp) {
        if (resp.response.status === 409) {
            alert('Este usuário já existe');
        } else {
            alert('Confira se as informações estão preenchidas corretamentes')
        }
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');

    return (
        <Container>
            <input placeholder='email' onChange={(e) => setEmail(e.target.value)} ></input>
            <input placeholder='senha' onChange={(e) => setSenha(e.target.value)} ></input>
            <input placeholder='nome' onChange={(e) => setNome(e.target.value)}></input>
            <input placeholder='foto' onChange={(e) => setFoto(e.target.value)}></input>
            <button onClick={EnviarPost}>Cadastrar</button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        height: 45px;
        width: 80vw;
        border: 1px solid rgb(212, 212, 212);
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        margin: 5px auto 0 auto;
        ::placeholder{
            color: rgb(130, 130, 130);
        }
    }

    button {
        height: 45px;
        width: 80vw;
        text-align: center;
        background-color: rgb(82, 182, 255);
        color: rgb(255, 255, 255);
        border: none;
        border-radius: 5px;
        font-size: 21px;
        margin: 10px auto 0 auto;
        cursor: pointer;
    }
`