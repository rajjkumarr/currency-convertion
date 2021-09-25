import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Signup from './components/SignUp'

import Login from './components/Login'

import Currency from './components/Currency'

import Register from './components/Register'

import Forgot from './components/Forgot'

import Googles from './components/Google'

import NotFound from './components/Notfound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/forgot" component={Forgot} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/google" component={Googles} />
      <Route exact path="/" component={Currency} />

      <Route component={NotFound} />

      <Route exact path="/" component={Currency} />
    </Switch>
  </BrowserRouter>
)

export default App
