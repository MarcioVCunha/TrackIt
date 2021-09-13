import styled from "styled-components";
import Check from '../Assets/CheckBox.svg'

export default function TodayHabit(props) {
    const { name, done, currentSequence, highestSequence } = props.habit;

    return (
        <ContainerHabit>
            <ContainerText>
                <Tittle>{name}</Tittle>
                <CurrentStreak>Sequência atual: {currentSequence} dias</CurrentStreak>
                <HighestStreak>Seu recorde: {highestSequence} dias</HighestStreak>
            </ContainerText>
            <Button>
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
`

const HighestStreak = styled.p`
    font-size: 14px;
    color: rgb(102, 102, 102);
`

const Button = styled.button`
    background-color: red;
    height: 70px;
    width: 70px;
    background-color: rgb(235, 235, 235);
    border: none;
    border-radius: 5px;
`