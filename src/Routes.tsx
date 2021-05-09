import React from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import BookPresenter from "./components/BookPresenter";
import APIAccesser from "./components/APIAccesser";
import BookList from "./components/BookList";
import PrimarySearchAppBar from './components/Header';

const api = APIAccesser.getInstance();

function Routes() {
    return (
        <Switch>
            <Route>
              <PrimarySearchAppBar/>
            </Route>
            <Route exact path="/">
                <App/>
            </Route>

            <Route exact path="/login">
                <Login/>
            </Route>

            <Route exact path="/books">
                <BookList books={api.GetBooks()}/>
            </Route>

            <Route exact path="/books/:id" component={BookPresenter}/>
        </Switch>
    )
}

export default Routes;
