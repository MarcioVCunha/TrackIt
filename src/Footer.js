import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Footer(){
    return(
        <BottomBar>
            <Link to='/habitos'>Hábitos</Link>

            <Link to='/hoje'>
                <button>Hoje</button>
            </Link>

            <Link to='/historico'>Histórico</Link>
        </BottomBar>
    )
}

const BottomBar = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
        font-size: 18px;
        color: rgb(82, 182, 255);
        text-decoration: none;
        font-family: 'Lexend Deca', sans-serif;
    }

    button {
        border: none;
        border-radius: 50%;
        height: 90px;
        width: 90px;
        background-color: rgb(82, 182, 255);
        color: white;
        font-size: 18px;
        margin-bottom: 50px;
    }
`