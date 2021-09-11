import styled from 'styled-components';
import Habits from './Habits';

export default function Page() {
    return (
        <Main>
            <MenuCreateHabit>
                <p>Meus hábitos</p>
                <button>+</button>
            </MenuCreateHabit>
            <Habits />
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
const MenuCreateHabit = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    p {
        color: rgb(18, 107, 165);
        font-size: 24px;
    }

    button {
        width: 40px;
        height: 35px;
        background-color: rgb(82, 182, 255);
        color: white;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 4px;
    }
`