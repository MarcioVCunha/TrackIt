import { Link } from 'react-router-dom';

import Logo from '../Assets/Logo.png';
import Page from './LoginScreenStyle';
import Inputs from './Inputs';

export default function LoginScreen() {
    return (
        <Page>
            <img src={Logo} alt='Logo do TrackIt' />

            <Inputs />

            <Link to='/cadastro'>
                <p>Não tem uma conta? Cadastre-se</p>
            </Link>
        </Page>
    )
}