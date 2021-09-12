import styled from 'styled-components';
import ButtonHabitCreated from './ButtonHabitCreated';
import TrashCan from '../Assets/TrashCan.svg'
import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../Contexts/UserContext';

export default function Habit(props) {
    const { habit, loadHabits } = props;
    const { id, name, days } = habit;
    const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { config } = useContext(UserContext);

    function deletHabit() {
        if (window.confirm('Quer deletar este hábito?')) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config).then(loadHabits());
        }
    }

    return (
        <ContainerHabit>
            <p>{name}</p>
            <ButtonHabitCreated days={days} week={week} />
            <img src={TrashCan} onClick={deletHabit} alt='TrashCan Icon'/>
        </ContainerHabit>
    )
}

const ContainerHabit = styled.div`
    position: relative;
    margin-top: 20px;
    height: 90px;
    width: 90vw;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        font-size: 20px;
        color: rgb(102, 102, 102);
    }

    img { 
        position: absolute;
        right: 20px;
        top: 20px;
    }
`