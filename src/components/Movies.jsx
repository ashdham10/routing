import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => res.json())
            .then((films) => {
                this.setState({
                    films,
                })
            })
    }

    render() {
        return this.state.films.map(film => {
           let {id} = props.film;
            return (
                <div className="row" key={film.id}>
                    <div className="card col-3" >
                        <div className="card-body">
                            <h5 className="card-title">{film.title}</h5>
                            <p className="card-text">Directed by {film.director}</p>
                            <Link to={`/Movies/${this.state.films.id}`} className="btn btn-primary">Movie Details</Link>
                        </div>
                    </div>
                </div>

            )
        })

    }

}

export default Movies;