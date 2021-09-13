import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'
import TodayHabits from './TodayHabits';

export default function Page() {
    return (
        <Section>
            <TodayInformations>
                <h1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h1>
                <p>Nenhum hábito concluído ainda</p>
            </TodayInformations>
            <TodayHabits />
        </Section>
    )
}

const Section = styled.section`
    width: 90%;
`

const TodayInformations = styled.div`
    margin-top: 40px;
    
    h1 {
        font-size: 24px;
        color: rgb(18, 107, 165);
    }

    p {
        font-size: 18px;
        color: rgb(186, 186, 186);
        margin-top: 10px;
    }
`