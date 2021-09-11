import styled from 'styled-components'

export default function Habits() {
    return (
        <ContainerHabits>
            <p>Você não tem nenhum hábito cadastrado ainda. adcione um hábito para começar a trackear!</p>
        </ContainerHabits>
    )
}

const ContainerHabits = styled.div`
    width: 90%;
    margin-top: 40px;

    p {
        font-size: 18px;
        color: rgb(102, 102, 102);
        line-height: 24px;
    }
`