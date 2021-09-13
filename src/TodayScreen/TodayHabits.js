import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../Contexts/UserContext';
import TodayHabit from './TodayHabit';

export default function TodayHabits() {
    const { config, setPercent } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);
    let listAllDones = [];

    function loadHabits() {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config).then(TratarSucesso).catch(TratarErro)
    }

    function TratarSucesso(resp) {
        setTodayHabits(resp.data);
        listAllDones = resp.data.filter((habit) => habit.done);
        setPercent((listAllDones.length)/(resp.data.length));
    }

    function TratarErro() {
        alert('Seu login expirou');
    }

    useEffect(() => {loadHabits();}, [])

    return (
        <>
            {todayHabits.map((habit, index) => <TodayHabit key={index} habit={habit} loadHabits={loadHabits} />)}
        </>
    )
}