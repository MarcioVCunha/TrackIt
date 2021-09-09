import reactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './reset.css'

import LoginScreen from './LoginScreen/LoginScreen'
import SignUpScreen from './signUpScreen/SignUpScreen'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <LoginScreen />
                </Route>

                <Route path='/cadastro' exact>
                    <SignUpScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

reactDom.render(<App />, document.querySelector('.root'));