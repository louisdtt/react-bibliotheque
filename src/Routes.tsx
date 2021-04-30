import React from 'react';
import { BrowserRouter as Switch,Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';

function Routes(){
  return(
    <Switch>

      <Route exact path="/">
        <App/>
      </Route>

      <Route exact path="/login">
        <Login/>
      </Route>

    </Switch>    
  )
}

export default Routes;
