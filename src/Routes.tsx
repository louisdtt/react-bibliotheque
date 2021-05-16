import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import BookPresenter from "./components/BookPresenter";
import BookList from "./components/BookList";
import PrimarySearchAppBar from './components/Header';
import AddComment from "./components/AddComment";
import NotFound from './components/NotFound';
import {Book} from "@material-ui/icons";
import Comment from "./components/Comment";
import CommentList from "./components/CommentList";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <PrimarySearchAppBar/>
                    <App/>
                </Route>

                <Route exact path="/login">
                    <PrimarySearchAppBar/>
                    <Login/>
                </Route>

                <Route exact path="/books">
                    <PrimarySearchAppBar/>
                    <BookList/>
                </Route>

                <Route
                    path="/books/:id"
                    render={(props) =>
                        <React.Fragment>
                            <PrimarySearchAppBar/>
                            <BookPresenter {...props} />
                            <AddComment {...props}/>
                            <CommentList {...props}/>
                        </React.Fragment>
                    }
                />

                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
