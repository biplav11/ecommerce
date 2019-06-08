import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map((route, i) => {
              let {path, component, exact} = route
              return(
                <Route key={i} exact={exact === true ? true : false} component={component} path={path}/>
              )
            })
          }
        </Switch>
      </Router>
    )
  }
}
