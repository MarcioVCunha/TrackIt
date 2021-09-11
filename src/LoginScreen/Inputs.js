import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import UserContext from '../Contexts/UserContext';

export default function Inputs() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonContent, setButtonContent] = useState('Entrar');
    const history = useHistory();
    const { setInfoUser, setConfig } = useContext(UserContext);

    function AveriguarLogin() {
        if (email === '' || senha === '') {
            alert('Preencha os campos de email e senha')
        } else {
            setLoading(true);
            setButtonContent(
                <Loader
                    type="ThreeDots"
                    color="white"
                    height={45}
                    width={100}
                />
            )
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
                email: email,
                password: senha
            }).then(TratarSucesso).catch((event) => TratarErro(event));
        }
    }

    function TratarSucesso(resp) {
        setInfoUser(resp.data);
        setConfig({
            headers: {
                Authorization: `Bearer ${resp.data.token}`
            }
        })
        history.push('/hoje');
    }

    function TratarErro(resp, event) {
        if (resp.response.status === 401) {
            alert('Email e/ou senha invalidos');
        } else {
            alert('Preencha corretamente os campos')
        }
        setLoading(false);
        setButtonContent('Entrar');
    }

    return (
        <Container loading={loading}>
            <input disabled={loading} placeholder='email' onChange={(event) => setEmail(event.target.value)}></input>
            <input disabled={loading} placeholder='senha' onChange={(event) => setSenha(event.target.value)}></input>
            <button disabled={loading} onClick={AveriguarLogin}>{buttonContent}</button>
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