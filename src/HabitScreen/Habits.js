import styled from 'styled-components';
import HabitsContext from '../Contexts/HabitsContext';
import { useContext, useState } from 'react';
import UserContext from '../Contexts/UserContext';
import axios from 'axios';
import Loader from 'react-loader-spinner';

import Button from './Button';

export default function Habits(props) {
    const { setCreate, loadHabits } = props;
    const { config } = useContext(UserContext);
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const infoHabit = {
        name: '',
        days: []
    };
    const [loading, setLoading] = useState(false);
    const [buttonContent, setButtonContent] = useState('Salvar');

    function sendHabitToAPI() {
        if (infoHabit.name === '' && infoHabit.days.length === 0) {
            alert('Preencher os dados corretamente para criar um novo hábito.');
        } else {
            setLoading(true);
            setButtonContent(
                <Loader
                    type="ThreeDots"
                    color="white"
                    width={60}
                    height={20}
                />
            )
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', infoHabit, config).then(TratarSucesso).catch(TratarErro);
        }
    }

    function TratarSucesso(resp) {
        setCreate(false);
        setLoading(false);
        infoHabit.name = '';
        infoHabit.days = [];
        setButtonContent('Salvar');
        loadHabits();
    }

    function TratarErro(resp) {
        alert('Seu login expirou, favor fazer login novamente.');
        setLoading(false);
        setButtonContent('Salvar');
    }

    return (
        <HabitsContext.Provider value={{ infoHabit }}>
            <ContainerHabits loading={loading}>
                <input onChange={((e) => infoHabit.name = (e.target.value))} placeholder='nome do hábito'></input>
                <ContainerButtons>
                    {days.map((day, index) => {
                        return (
                            <Button disabled={loading} key={index} day={day} i={index} loading={loading}></Button>
                        )
                    })}
                </ContainerButtons>
                <ContainerFunctions disabled={loading}>
                    <CancelButton onClick={() => props.setCreate(false)} loading={loading}>Cancelar</CancelButton>
                    <SaveButton onClick={() => sendHabitToAPI()} loading={loading}>{buttonContent}</SaveButton>
                </ContainerFunctions>
            </ContainerHabits>
        </HabitsContext.Provider>
    )
}

const ContainerHabits = styled.div`
    background-color: white;
    width: 90vw;
    padding: 10px;

    input {
        width: 100%;
        border: 1px solid rgb(190, 190, 190);
        border-radius: 5px;
        font-size: 20px;
        padding: 5px;
        background-color: ${(props) => props.loading ? 'lightgray' : 'white'};
        ::placeholder {
            color: rgb(160, 160, 160);
        }
    }
`

const ContainerButtons = styled.div`
    display: flex;
    margin: 5px 0 20px 0;
`

const ContainerFunctions = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CancelButton = styled.button`
    margin-right: 20px;
    background-color: white;
    border: none;
    color: rgb(82, 182, 255);
    font-size: 20px;
`

const SaveButton = styled.button`
    background-color: rgb(82, 182, 255);
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    padding: 5px 20px;
    opacity: ${(props) => props.loading ? '0.7' : '1'};
    
`