import reactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserContext from './Contexts/UserContext'
import { useState } from 'react'

import './reset.css'

import LoginScreen from './LoginScreen/LoginScreen'
import SignUpScreen from './signUpScreen/SignUpScreen'
import HabitScreen from './HabitScreen/HabitsScreen'
import TodayScreen from './TodayScreen/TodayScreen'
import HistoryScreen from './HistoryScreen/HistoryScreen'


function App() {
    const [infoUser, setInfoUser] = useState('');
    const [config, setConfig] = useState('');

    return (
        <UserContext.Provider value={{ infoUser, setInfoUser, config, setConfig }}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <LoginScreen />
                    </Route>

                    <Route path='/cadastro' exact>
                        <SignUpScreen />
                    </Route>

                    <Route path='/hoje' exact>
                        <TodayScreen />
                    </Route>

                    <Route path='/habitos' exact>
                        <HabitScreen />
                    </Route>

                    <Route path='/historico' exact>
                        <HistoryScreen />
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

reactDom.render(<App />, document.querySelector('.root'));