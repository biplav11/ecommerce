import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import routes from './routes'
import auth from './auth';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map((route, i) => {
              let {path, component, exact, privateRoute} = route
              if(privateRoute){
                return <PrivateRoute key ={i} exact={exact === true ? true : false} component={component} path={path}/>
              } 
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

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}