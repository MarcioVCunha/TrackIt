import { Link } from "react-router-dom";

import Page from "./SignUpScreenStyle";
import Logo from '../Assets/Logo.png';

import Inputs from "./Inputs";

export default function SignUpScreen(){
    return(
        <Page>
            <img src={Logo} alt='Logo do TrackIt' />
            <Inputs />
            <Link to='/'>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Page>
    )
}