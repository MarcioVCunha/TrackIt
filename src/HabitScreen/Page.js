import { useState } from 'react';
import styled from 'styled-components';
import Habits from './Habits';

export default function Page() {
    const [create, setCreate] = useState(false);
    const [noHabits, setNoHabits] = useState(true);

    return (
        <Main>
            <MenuCreateHabit>
                <p>Meus hábitos</p>
                <button onClick={() => setCreate(true)}>+</button>
            </MenuCreateHabit>
            <ContainerHabits create={create}>
                <Habits setCreate={setCreate}></Habits>
            </ContainerHabits>
            <NoHabitsText noHabits={noHabits}>Você não tem nenhum hábito cadastrado ainda. adcione um hábito para começar a trackear!</NoHabitsText>
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

const ContainerHabits = styled.div`
    display: ${((props) => props.create ? 'flex' : 'none')};
    margin: 30px auto 0 auto;
`

const NoHabitsText = styled.p`
    display: ${((props) => props.noHabits ? 'flex' : 'none')};
    width: 90%;
    margin-top: 40px;
    font-size: 18px;
    color: rgb(102, 102, 102);
    line-height: 24px;
`