import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'
import TodayHabits from './TodayHabits';
import { useContext } from 'react';
import UserContext from '../Contexts/UserContext';

export default function Page() {
    const { percent } = useContext(UserContext);
    let content = '';

    if(percent === 0){
        content = 'Nenhum hábito concluído ainda';
    } else {
        content = `${percent*100}% dos hábitos concluídos`;
    }

    return (
        <Section>
            <TodayInformations percent={percent}>
                <h1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h1>
                <p>{content}</p>
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
        color: ${(props) => props.percent === 0 ? 'rgb(186, 186, 186)' : 'rgb(143, 197, 73)'};
        margin-top: 10px;
    }
`