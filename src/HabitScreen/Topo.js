import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../Contexts/UserContext';

export default function Topo() {
    const { infoUser } = useContext(UserContext)

    return (
        <Header>
            <p>TrackIt</p>
            <img src={infoUser.image} alt='' />
        </Header>
    )
}

const Header = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');

    height: 70px;
    background-color: rgb(18, 107, 165);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    p {
        color: white;
        font-size: 39px;
        font-family: 'Playball', cursive;
        font-style: italic;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`