import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../../utils/themeUtil'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const App = () => (
  <Router>
    <ThemeProvider theme={ theme }>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/login' component={ LoginPage } />
        {/* <Route exact path='/signup' component={ SignupPage } />
        <Route exact path='/details' component={ DetailsPage } /> */}
      </Switch>
    </ThemeProvider>
  </Router>
)

export default App;
