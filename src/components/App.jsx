import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Movies from './Movies';
import People from './People';
import Home from './Home';
import Header from './Header';
import SingleMovies from './SingleMovies';
import Person from './Person';

class App extends React.Component {
   
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Link to="/">
                        <button className="btn btn-primary" style={{margin:'10px'}}>HOME PAGE</button>
                    </Link>
                    <Link to="/Movies">
                        <button className="btn btn-primary" style={{margin:'10px'}}>MOVIES PAGE</button>
                    </Link>
                    <Link to="/People">
                        <button className="btn btn-primary" style={{margin:'10px'}}>PEOPLE PAGE</button>
                    </Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Movies" component={Movies} />
                        <Route exact path="/People" component={People} />
                        <Route exact path="/Movies/:id" component={SingleMovies} />
                        <Route exact path="/People/:id" component={Person} />
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default App;