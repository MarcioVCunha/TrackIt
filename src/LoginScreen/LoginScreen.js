import { Link } from 'react-router-dom';
import styled from 'styled-components'

import Logo from '../Assets/Logo.png';
import Inputs from './Inputs';

export default function LoginScreen() {
    return (
        <Page>
            <img src={Logo} alt='Logo do TrackIt' />

            <Inputs />

            <Link to='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Page>
    )
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 180px;
        margin-top: 10vh;
    }

    p {
        margin: 40px auto 0 auto;
        font-size: 14px;
        color: rgb(82, 182, 255);
        text-decoration: underline rgb(82, 182, 255);
    }    
`