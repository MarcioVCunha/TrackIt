import reactDom from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './reset.css'

import LoginScreen from './LoginScreen/LoginScreen'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <LoginScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

reactDom.render(<App />, document.querySelector('.root'));