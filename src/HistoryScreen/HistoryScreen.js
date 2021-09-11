import styled from 'styled-components'

import Footer from "../Footer";
import Top from "../Top";

export default function HistoryScreen() {
    return (
        <Main>
            <Top />
            <Tittle>Histórico</Tittle>
            <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
            <Footer />
        </Main>
    )
}

const Main = styled.main`
    height: calc(100vh - 70px);
    width: 100vw;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(242, 242, 242);
`

const Tittle = styled.h1`
    width: 90%;
    margin-top: 40px;
    font-size: 24px;
    color: rgb(18, 107, 165);
`

const Text = styled.p`
    margin-top: 30px;
    width: 90%;
    font-size: 18px;
    color: rgb(102, 102, 102);
    line-height: 24px;
`