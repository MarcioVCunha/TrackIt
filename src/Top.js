import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from './Contexts/UserContext';

export default function Top() {
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
    width: 100%;
    background-color: rgb(18, 107, 165);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    position: fixed;
    left: 0;
    top: 0;
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.15);
    z-index: 1;

    p {
        margin-top: 8px;
        color: white;
        font-size: 40px;
        font-family: 'Playball', cursive;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`