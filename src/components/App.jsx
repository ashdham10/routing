import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Movies from './Movies';
import People from './People';
import Home from './Home';
import Header from './Header';
import SingleMovies from './SingleMovies';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Link to="/">
                        <button style={{margin:'10px'}}>HOME PAGE</button>
                    </Link>
                    <Link to="/Movies">
                        <button style={{margin:'10px'}}>MOVIES PAGE</button>
                    </Link>
                    <Link to="/People">
                        <button style={{margin:'10px'}}>PEOPLE PAGE</button>
                    </Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Movies" component={Movies} />
                        <Route exact path="/People" component={People} />
                        <Route exact path="/Movies/:id" component={SingleMovies} />
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default App;