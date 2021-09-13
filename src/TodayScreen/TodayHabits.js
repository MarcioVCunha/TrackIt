import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../Contexts/UserContext';
import TodayHabit from './TodayHabit';

export default function TodayHabits() {
    const { config } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);

    useEffect(() => axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config).then(TratarSucesso).catch(TratarErro), [])

    function TratarSucesso(resp) {
        setTodayHabits(resp.data);
    }

    function TratarErro() {
        alert('Seu login expirou');
    }

    return (
        <>
            {todayHabits.map((habit, index) => <TodayHabit key={index} habit={habit} />)}
        </>
    )
}