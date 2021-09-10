import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { useHistory } from 'react-router';
import Loader from 'react-loader-spinner';

export default function Inputs() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');
    const [buttonContent, setButtonContent] = useState('Cadastrar');

    function EnviarPost() {
        setLoading(true);
        setButtonContent(
            <Loader
                type="ThreeDots"
                color="white"
                height={45}
                width={100}
            />
        )
        const objectPost = {
            email: email,
            name: nome,
            image: foto,
            password: senha
        }
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', objectPost).then(TratarSucesso).catch(TratarErro);
    }

    function TratarSucesso(resp) {
        history.push('/');
    }

    function TratarErro(resp) {
        if (resp.response.status === 409) {
            alert('Este usuário(a) já existe');
        } else {
            alert('Confira se as informações estão preenchidas corretamentes')
        }
        setLoading(false);
        setButtonContent('Cadastrar');
    }

    return (
        <Container loading={loading}>
            <input disabled={loading} placeholder='email' onChange={(e) => setEmail(e.target.value)} ></input>
            <input disabled={loading} placeholder='senha' onChange={(e) => setSenha(e.target.value)} ></input>
            <input disabled={loading} placeholder='nome' onChange={(e) => setNome(e.target.value)}></input>
            <input disabled={loading} placeholder='foto' onChange={(e) => setFoto(e.target.value)}></input>
            <button disabled={loading} onClick={EnviarPost}>{buttonContent}</button>
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
        background-color: ${(props) => props.loading ? 'lightgray' : 'white'};
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
        opacity: ${(props) => props.loading ? 0.7 : 1};
    }
`