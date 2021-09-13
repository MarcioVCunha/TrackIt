import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CircularProgressbar } from 'react-circular-progressbar';
import { useContext } from 'react';
import UserContext from './Contexts/UserContext';

export default function Footer() {
    const { percent } = useContext(UserContext)

    return (
        <BottomBar>
            <Link to='/habitos'>Hábitos</Link>

            <Link to='/hoje'>
                <button>
                    <CircularProgressbar
                        value={percent*100}
                        text={'Hoje'}
                        styles={{
                            path: {
                                stroke: 'white',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset 0.5s ease 0s'
                            },
                            text: {
                                fill: 'white',
                                fontSize: '28px',
                            }
                        }}
                    />
                </button>
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
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`