import styled from 'styled-components'

import Footer from "../Footer";
import Top from "../Top";
import Page from './Page';

export default function TodayScreen() {
    return (
        <Main>
            <Top />
            <Page />
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