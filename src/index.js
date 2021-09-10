import reactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserContext from './Contexts/UserContext'
import { useState } from 'react'

import './reset.css'

import LoginScreen from './LoginScreen/LoginScreen'
import SignUpScreen from './signUpScreen/SignUpScreen'
import HabitScreen from './HabitScreen/HabbitScreen'


function App() {
    const [token, setToken] = useState('');

    return (
        <UserContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <LoginScreen />
                    </Route>

                    <Route path='/cadastro' exact>
                        <SignUpScreen />
                    </Route>

                    <Route path='/habito' exact>
                        <HabitScreen />
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

reactDom.render(<App />, document.querySelector('.root'));