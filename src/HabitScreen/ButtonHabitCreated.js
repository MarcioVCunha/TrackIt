import styled from "styled-components";

export default function ButtonHabitCreated(props) {
    const { days, week } = props;

    return (
        <ContainerWeekDayButtons>
            {week.map((weekDay, index, i) => {
                return (
                    <WeekDayButton key={index} days={days} i={index}>{weekDay}</WeekDayButton>
                )
            })}
        </ContainerWeekDayButtons>
    )
}

const ContainerWeekDayButtons = styled.div`
    display: flex;
`

const WeekDayButton = styled.button`
    margin: 10px 5px 0 0;
    height: 30px;
    width: 30px;
    background-color: ${(props) => props.days.includes(props.i) ? 'rgb(212, 212, 212)' : 'white'};
    border: 1px solid rgb(212, 212, 212);
    border-radius: 5px;
    color: ${(props) => props.days.includes(props.i) ? 'white' : 'rgb(212, 212, 212)'};
`