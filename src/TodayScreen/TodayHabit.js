import styled from "styled-components";
import Check from '../Assets/CheckBox.svg'
import { useContext } from 'react';
import UserContext from '../Contexts/UserContext';
import axios from 'axios';

export default function TodayHabit(props) {
    const { habit, loadHabits } = props;
    const { name, done, currentSequence, highestSequence, id } = habit;
    const { config } = useContext(UserContext);

    function isMarked(){
        if(done === false){
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, '' ,config).then(TratarSucessoMarking).catch(TratarErro);
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, '' ,config).then(TratarSucessoUnmarking).catch(TratarErro);
        }
    }

    function TratarSucessoMarking(){
        loadHabits();
    }

    function TratarSucessoUnmarking(){
        loadHabits();
    }

    function TratarErro(){
        alert('Seu login expirou');
    }

    return (
        <ContainerHabit onClick={isMarked}>
            <ContainerText>
                <Tittle>{name}</Tittle>
                <CurrentStreak done={done}>Sequência atual: <span>{currentSequence} dias</span></CurrentStreak>
                <HighestStreak currentSequence={currentSequence} highestSequence={highestSequence} done={done}>Seu recorde: <span>{highestSequence} dias</span></HighestStreak>
            </ContainerText>
            <Button done={done}>
                <img src={Check} alt='Check Sign' />
            </Button>
        </ContainerHabit>
    );
}

const ContainerHabit = styled.div`
    background-color: white;
    height: 94px;
    width: 90vw;
    border-radius: 5px;
    margin-top: 10px;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
`

const Tittle = styled.p`
    font-size: 20px;
    color: rgb(102, 102, 102);
`

const CurrentStreak = styled.p`
    margin-top: 15px;
    font-size: 14px;
    color: rgb(102, 102, 102);

    span {
        color: ${(props) => props.done ? 'rgb(143, 197, 73)' : 'rgb(102, 102, 102)'};
    }
`

const HighestStreak = styled.p`
    font-size: 14px;
    color: rgb(102, 102, 102);

    span {
        color: ${(props) => {
            if (props.done && (props.highestSequence <= props.currentSequence)) {
                return ('rgb(143, 197, 73)');
          } else {
                return ('rgb(102, 102, 102)');
          }
       }}
    }
`

const Button = styled.button`
    height: 70px;
    width: 70px;
    background-color: ${(props) => props.done ? 'rgb(143, 197, 73)' : 'rgb(231, 231, 231)'};
    border: none;
    border-radius: 5px;
`