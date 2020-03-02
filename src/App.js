import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import StartPage from './pages/start'
import MonitorPage from './pages/monitor'
import { NavBar } from './components'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/monitor" component={MonitorPage} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App
