import { useContext } from 'react';
import HabitsContext from '../Contexts/HabitsContext';
import { useState } from 'react';
import styled from 'styled-components'

export default function Button(props) {
    const { day, i } = props;
    const [isMarked, setIsMarked] = useState(false);
    const { infoHabit } = useContext(HabitsContext);

    function MarkHabit(e, i) {
        if (isMarked === false) {
            setIsMarked(true);
            infoHabit.days.push(i);
        } else {
            setIsMarked(false);
            infoHabit.days.splice(i, 1);
        }
    }

    return (
        <DayContainer isMarked={isMarked} onClick={(e) => MarkHabit(e, i)}>{day}</DayContainer>
    )
}

const DayContainer = styled.button`
    color: ${(props) => props.isMarked ? 'white' : 'rgb(190, 190, 190)'};
    background-color: ${(props) => props.isMarked ? 'rgb(190, 190, 190)' : 'white'};
    border: 1px solid rgb(190, 190, 190);
    border-radius: 5px;
    font-size: 20px;
    width: 35px;
    height: 35px;
    margin-right: 5px;
`